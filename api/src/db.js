const mongoose = require('mongoose');
require('dotenv').config()

// const URI = 'mongodb://localhost:27017/app-card'
const {MONGOHOST, MONGOPASSWORD, MONGOPORT, MONGOUSER } = process.env;
mongoose.set("strictQuery", false);

mongoose.connect(`mongodb://${ MONGOUSER }:${ MONGOPASSWORD }@${ MONGOHOST }:${ MONGOPORT }`).then(db => console.log('connected to mongoDB'))


module.exports = mongoose;