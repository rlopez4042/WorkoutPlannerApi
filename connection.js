const mongoose = require('mongoose')
let mongoUrl = ""

if (process.env.NODE_ENV==="production"){
    mongoUrl = process.env.DB_URL
} else {
    mongoUrl= "mongodb://127.0.0.1/workout"
}
mongoose.connect(mongoUrl)

module.exports = mongoose;