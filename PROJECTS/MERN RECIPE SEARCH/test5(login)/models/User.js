const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    googleId: String,
    username: String,
    picture: String,
    content: String
    
})

module.exports = mongoose.model("users",UserSchema);