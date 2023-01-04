const mongoose = require('mongoose');

// const URI = 'mongodb://localhost:27017/app-card'
mongoose.set("strictQuery", false);

mongoose.connect('mongodb://127.0.0.1:27017/app-card').then(db => console.log('connected to mongoDB'))


module.exports = mongoose;