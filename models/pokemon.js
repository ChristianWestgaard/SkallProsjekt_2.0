const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokeSchema = new Schema({
    name: {
        type: String, 
        required: true},
    type: {
        type: String, 
        required: true},
    ability0: {
        type: String,
        required: true},
    ability1: {
        type: String,
        required: true},
    ability2: {
        type: String,
        required: true}
    author:{
        type: String,
        required: true},
}, {timestamps: true})

const Species = mongoose.model('Species', pokeSchema);
module.exports = Species