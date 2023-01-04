const mongoose = require('mongoose')
const {Schema} = mongoose;

const cardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    life_span: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Cards', cardSchema);