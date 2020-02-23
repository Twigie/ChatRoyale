const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); 
const mongoose = require("mongoose");
const url = "mongodb://chatRoyale:test123#@18.221.11.205:27017";
const cookieParser = require("cookie-parser");
const fs = require('fs');
const https = require('https');

const httpsOptions = {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem')
}

mongoose.Promise = global.Promise;
mongoose.connect(url, {useNewUrlParser: true,  useUnifiedTopology: true});

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
// socket server creation

io.serveClient("origins", "*:*");
const namespaces = [];

app.use(cookieParser());
app.use(bodyParser.json());

app.use(cors({
    "origin": ["https://localhost:8080"],
    "credentials": true,
    "methods": ["GET", "POST"]
}));

const port = process.env.PORT || 5000;
const users = require("./routes/users");
app.use("/api/users", users);
app.post("/api/games/create", (req, res) => {
    console.log(req.body," create");
    let roomName = req.body.roomID;
    let roomObj = {}
    roomObj.lobby = io.of(req.body.name);
    roomObj.id = roomName;
    namespaces.push(roomObj);
    res.send("created server");
})

app.get("/api/games/list", (req, res) => {
    for (let i = 0; i < namespaces.length; i++) {
        if (req.query.room === namespaces[i].id){
            return res.status(200).send(namespaces[i].id);
        }
    }
    return res.status(404).send("Requested lobby not found");
    
});

const httpsServer = https.createServer(httpsOptions, app)
    .listen(port, () => {
        console.log('server running at ' + port)
    })
