const express = require("express");

const router = express.Router();

router.get("/create", (req, res) => {
    let nsp = io.of(req.body.name)
    namespaces.push(nsp);
    res.send(namespaces);
})

module.exports = router;