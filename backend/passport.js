require("dotenv").config();
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy
const { ExtractJwt } = require("passport-jwt");
const FacebookTokenStrategy = require("passport-facebook-token");
const JWT_SECRET = process.env.JWT_SECRET;
const User = require("./models/user");

passport.use("jwt", new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try{
        // find the users specified in toke
        const user = await User.findById(payload.sub);

        if(!user) {
            return done(null, false);
        }

        done(null, user);
    } catch(error) {
        done(error, false)
    }
}))

passport.use("facebookToken", new FacebookTokenStrategy({
    clientID: "3563200747086858",
    clientSecret: process.env.APP_SECRET
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log(accessToken, refreshToken, profile);

        //check if this user exists in the database already
        const existingUser = await User.findOne({"facebook.id": profile.id});

        if (existingUser){
            console.log("User already exists");
            return done(null, existingUser);
        }

        console.log("User does not exist creating a new one");
        
        const newUser = new User({
            method: "facebook",
            facebook: {
                id: profile.id,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName
            }
        })

        await newUser.save();
        done(null, newUser);
    } catch (error) {
        done(error, false, error.message)
    }
}));

