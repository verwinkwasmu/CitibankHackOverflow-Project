// preset
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path')

// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

// initialise APP
const app = express();
app.use(express.json());
app.use(cors());



const connectDB = require('./config/db');

// Load Config
dotenv.config({path: './config/config.env'})


// load assets
// DONT DELETE will need this once frontend is completed
// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + "/views/demoRoute.html");
// })
// app.get('/index2', (req,res)=>{
//     res.sendFile(__dirname + "/views/demoRoute2.html");
// })
// Connect to DB
connectDB();

// Access Routes
app.use('/', require('./routes/productsRoute'))
app.use('/', require('./routes/userRoute'))
app.use('/', require('./routes/cartRoute'))
app.use('/', require('./routes/libraryRoute'))


// port hosted on 3000 (access via localhost:3000)
app.listen(3000, () => {
    console.log('Application started and listening on port 3000')
});