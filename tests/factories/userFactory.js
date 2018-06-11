const mongoose = require('mongoose')
const User = mongoose.model('User')
module.exports = (user) => new User({}).save()
