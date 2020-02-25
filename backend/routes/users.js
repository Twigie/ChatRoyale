const express = require("express");
const passport = require("passport");
const passportConf = require("../passport");
const UsersController = require("../controllers/users");
const passportJWT = passport.authenticate("jwt", {session: false});
const passportFacebook = passport.authenticate("facebookToken", {session: false});
const User = require("../models/user"); 

const url = "mongodb://chatRoyale:test123#@18.221.11.205:27017";

const router = express.Router();

router.route("/oauth/facebook")
    .post(passportFacebook, UsersController.facebookOAUTH)

router.route("/secret")
    .get(passportJWT, UsersController.secret)

router.get("/details", async (req, res) => {
    // TODO:  Use projection instead of doing this jank ass shit
    const userId = req.body.userId;    
    let selectedUser = await User.findOne({"facebook.id": userId}, (err, user) => {
            return user.toObject();
        });
        returnValue = {};
        returnValue["facebook_id"] = selectedUser.facebook.id;
        returnValue["firstName"] = selectedUser.facebook.firstName;
        returnValue["lastName"] = selectedUser.facebook.lastName;
        returnValue["_id"] = selectedUser._id;
        if (selectedUser)
            res.status(200).send(returnValue);
        else
            res.status(404).send("User not found");
    });

module.exports = router;