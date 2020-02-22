require("dotenv").config();
const JWT = require("jsonwebtoken");
const User = require("../models/user");
const JWT_SECRET = process.env.JWT_SECRET;



signToken = user => {
    return JWT.sign({
        iss: "ChatRoyale",
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() +1)
    }, JWT_SECRET)
}

module.exports = {
    facebookOAUTH: async (req, res, next) => {
        // Generate token
        const token = signToken(req.user);
        res.cookie("token", token).send("successful")
    },
    secret: async (req, res, next) => {
        console.log("I managed to get here");
        res.json({
            secret: "resource"
        })
    }
}