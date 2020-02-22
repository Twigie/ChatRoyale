const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); 
const mongoose = require("mongoose");
const url = "mongodb://chatRoyale:test123#@18.221.11.205:27017";

mongoose.Promise = global.Promise;
mongoose.connect(url, {useNewUrlParser: true,  useUnifiedTopology: true});

const app = express();

app.use(bodyParser.json());

app.use(cors({
    "origin": ["http://localhost:8080"],
    "credentials": true,
    "methods": ["GET", "POST"]
}));

const port = process.env.PORT || 5000;
const users = require("./routes/users");
app.use("/api/users", users);

app.listen(port, () => console.log(`server started on port ${port}`));