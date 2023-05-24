const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    // name: {
    //     type: String,
    //     required: true},
    // username: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     minLenght: 6},
    password: {
        type: String,
        required: true,
        minLenght: 8},
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true}
    })

const User = mongoose.model('user', userSchema);
module.exports = User