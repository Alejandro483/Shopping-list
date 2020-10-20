const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

// cors Middleware
app.use(cors());
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
.connect(db)
.then(() => console.log('MongoDB is Connected...'))
.catch(err => console.log(err));


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`));