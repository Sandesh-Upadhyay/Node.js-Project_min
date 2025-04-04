const mongoose = require('mongoose');
const Schma = mongoose.Schema; // Import the Schema constructor from mongoose

const BlogSchema = new Schma({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

const Blog = mongoose.model('Blog', BlogSchema); // Create a model from the schema  
module.exports = Blog; // Export the model for use in other files
// const express = require('express'); // Import Expre





// const Blog = require('../models/blogs'); // Import the Blog model
// const fs = require('fs');                                                       
// const path = require('path');
// const express = require('express');

// const router = express.Router(); // Create a new router instance
// const morgan = require('morgan'); // Import Morgan for logging

// const app = express(); // Create an Express application
