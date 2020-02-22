const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    method: {
        type: String,
        enum: ["facebook"],
        required: true
    },
    facebook: {
        id: {
            type: String
        },
        firstName: {
            type: String 
        },
        lastName: { 
            type: String
        }
    }
});



const User = mongoose.model("user", userSchema);

module.exports = User;

