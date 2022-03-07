require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT
const cors = require('cors');
const logger = require('morgan');

// Add the middleware code needed to accept incoming data and add it to req.body

app.use(logger('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        status:200,
        msg: 'you have hit the default route.'
    })
})


const userController = require('./controllers/userController')
app.use('/user', userController);

const workoutController = require('./controllers/workoutController')
app.use('/workout', workoutController);

const exerciseController = require('./controllers/exerciseController')
app.use('/exercise', exerciseController);



app.listen(PORT, () => {
    console.log('\x1b[33m%s\x1b[0m', '   WE LIVE!!!!')
    console.log('\x1b[34m%s\x1b[0m', `     Listening in on port: ${PORT}`)
})