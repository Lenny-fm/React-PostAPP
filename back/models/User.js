const mongoose = require('mongoose')
const Post = require('./Post')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    posts: {
        type: [Post],
        required: false
    }
})

module.exports = mongoose.model('User', UserSchema)