const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const todo = new Schema({
    Title:String,
    Description: String 
});