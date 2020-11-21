const mongoose = require('mongoose');
const URI = require('../configs/key').mongoURL;

const connectDB = async ()=> {
    await mongoose.connect(URI, {
        useNewUrlParser: true,  
        useUnifiedTopology: true
    });
    console.log("Conected with database")
}

module.exports = connectDB;