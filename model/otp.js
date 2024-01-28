const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String
    },
    otp: {
        type: String
    }
})

module.exports = mongoose.model('userdetail', userSchema)