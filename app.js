// preset
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

// initialise APP
const app = express();
app.use(express.json());
app.use(cors());



const connectDB = require('./config/db');

// Load Config
dotenv.config({path: './config/config.env'})


// load assets

// serve your css as static
app.use(express.static(__dirname + '/citibankui'));
// app.use(express.static(__dirname + '/citibankui/cashierUI'));


app.get('/', (req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname + "/citibankui/login.html");
})

// app.get('/index2', (req,res)=>{
//     res.sendFile(__dirname + "/views/demoRoute2.html");
// })
// Connect to DB
connectDB();

// Access Routes
app.use('/', require('./routes/vouchersRoute'))
app.use('/', require('./routes/userRoute'))
app.use('/', require('./routes/cartRoute'))
app.use('/', require('./routes/libraryRoute'))
app.use('/', require('./routes/transactionsRoute'))


// port hosted on 3000 (access via localhost:3000)
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Application started and listening on port 3000')
});
