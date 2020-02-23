const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); 
const mongoose = require("mongoose");
const url = "mongodb://chatRoyale:test123#@18.221.11.205:27017";
const cookieParser = require("cookie-parser");




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

const games = require("./routes/games");
app.use("/api/games", games);


app.listen(port, () => console.log(`server started on port ${port}`));
module.exports = {
    namespaces,
    app
}