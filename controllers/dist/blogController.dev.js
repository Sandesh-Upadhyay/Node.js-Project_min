"use strict";

// blog_index , blog_details , blog_create_get , blog_create_post , blog_delete
var Blog = require('../models/blogs'); // Import the Blog model


var blog_index = function blog_index(req, res) {
  Blog.find().sort({
    createdAt: -1
  }) // Sort by createdAt in descending order
  .then(function (result) {
    // res.send(result);  
    res.render('index', {
      title: "All Blogs",
      blogs: result
    }); // for EJS
  })["catch"](function (err) {
    console.log(err);
  });
};

var blog_details = function blog_details(req, res) {
  var id = req.params.id; // Get the blog ID from the URL parameters

  Blog.findById(id) // Find the blog by ID
  .then(function (result) {
    // res.send(result);  
    res.render('details', {
      blog: result,
      title: "Blog Details"
    }); // for EJS
  })["catch"](function (err) {
    console.log(err);
    res.status(404).render('404', {
      title: "Blog not found"
    }); // for EJS
  });
};

var blog_create_get = function blog_create_get(req, res) {
  res.render('create', {
    title: "Create a new blog"
  }); // for EJS
};

var blog_create_post = function blog_create_post(req, res) {
  // console.log(req.body); Log the request body to the console
  var blog = new Blog(req.body); // Create a new blog instance with the request body

  blog.save().then(function (result) {
    res.redirect('blogs'); // Redirect to the blogs page after saving
  })["catch"](function (err) {
    console.log(err);
  });
};

var blog_delete = function blog_delete(req, res) {
  var id = req.params.id; // Get the blog ID from the URL parameters

  Blog.findByIdAndDelete(id) // Find the blog by ID and delete it
  .then(function (result) {
    res.json({
      redirect: '/blogs'
    }); // Send a JSON response to redirect after deletion
  })["catch"](function (err) {
    console.log(err);
  });
};

module.exports = {
  blog_index: blog_index,
  blog_details: blog_details,
  blog_create_get: blog_create_get,
  blog_create_post: blog_create_post,
  blog_delete: blog_delete
}; // blog_details = (req, res) => {
//     const id = req.params.id; // Get the blog ID from the URL parameters
//     Blog.findById(id) // Find the blog by ID
//     .then((result) => {
//         // res.send(result);