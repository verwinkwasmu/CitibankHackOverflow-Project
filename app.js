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

// Connect to DB
connectDB();

// Access Routes
app.use('/', require('./routes/productsRoute'))
app.use('/', require('./routes/userRoute'))
app.use('/', require('./routes/cartRoute'))
app.use('/', require('./routes/libraryRoute'))


// port hosted on 3000 (access via localhost:3000)
app.listen(3000);