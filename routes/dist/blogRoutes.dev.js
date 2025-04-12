"use strict";

var express = require('express');

var blogController = require('../controllers/blogController'); // Import the blog controller


var router = express.Router(); // Create a new router instance

router.get('/', blogController.blog_index); // Route for getting all blogs
// blogs routes

router.get('/', blogController.blog_index); // Route for getting all blogs

router.get('/:id', blogController.blog_details); // Route for getting blog details by ID

router.get('/', blogController.blog_create_get); // Route for creating a new blog

router.post('/', blogController.blog_create_post); // Route for creating a new blog
// Delete Request

router["delete"]('/:id', blogController.blog_delete); // Route for deleting a blog by ID

module.exports = router; // Export the router for use in other files