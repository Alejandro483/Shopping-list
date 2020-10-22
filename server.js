const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const items = require('./routes/api/items')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

// cors Middleware
app.use(cors());
app.use(express.json());

// DB Config
// const db = require('./config/keys').mongoURI;

// Connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose
.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.use('/api/items', items);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});