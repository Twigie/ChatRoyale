const express = require("express");
const passport = require("passport");
const passportConf = require("../passport");
const UsersController = require("../controllers/users");
const passportJWT = passport.authenticate("jwt", {session: false});
const passportFacebook = passport.authenticate("facebookToken", {session: false})

const url = "mongodb://chatRoyale:test123#@18.221.11.205:27017";

const router = express.Router();

router.route("/oauth/facebook")
    .post(passportFacebook, UsersController.facebookOAUTH)

router.route("/secret")
    .get(passportJWT, UsersController.secret)

module.exports = router;