const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    name: String,
    email: String,
    company: String,
    place: String,
    description: String,
    createdAt:Date,
    updatedAt:Date
})

module.exports = mongoose.model("Job",JobSchema )