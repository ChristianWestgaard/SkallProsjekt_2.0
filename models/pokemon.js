const mongoose = require('mongoose');
const { isEmail } = require('validator')
const Schema = mongoose.Schema;

const pokeSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Please enter a NAME for your Pokemon']},
    type: {
        type: String, 
        required: [true, 'Please enter a TYPE for your Pokemon']},
    ability0: {
        type: String,
        required: [true, 'Please enter an ABILITY  for your Pokemon']},
    ability1: {
        type: String,
        required: [true, 'Please enter an ABILITY for your Pokemon']},
    ability2: {
        type: String,
        required: [true, 'Please enter an ABILITY for your Pokemon']},
    author:{
        type: String,
        required: [true, 'Please enter an AUTHOR for your Pokemon']},
}, {timestamps: true})

const species = mongoose.model('species', pokeSchema);
module.exports = species