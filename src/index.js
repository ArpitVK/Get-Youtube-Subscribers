const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const cors = require('cors');
const port = process.env.PORT || 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
//Enable CORS for all routes
app.use(cors());
// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://vdiksha621:Diksha%401040@mydb.cwi6q3r.mongodb.net/subscribers";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
