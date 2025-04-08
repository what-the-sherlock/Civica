const mongoose = require("mongoose")
mongoose.connect("")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    password: {
        type: Number,
        required: true,
    },

})

const User = mongoose.model("User", UserSchema)

module.exports = {
    User,
}