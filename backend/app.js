const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(cors({
    "origin": ["http://localhost:8080"],
    "credentials": true,
    "methods": ["GET", "POST"]
}));

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`server started on port ${port}`));