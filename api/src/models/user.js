const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
})

const Users = models.user || model('user', userSchema)

module.exports = Users