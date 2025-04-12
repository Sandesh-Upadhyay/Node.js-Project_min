"use strict";

var express = require('express');

var _require = require('http'),
    Server = _require.Server;

var morgan = require('morgan');

var mongoose = require('mongoose');

var blogRoutes = require('./routes/blogRoutes'); // const fs = require('fs');
//express app  


var app = express(); // connect to mongodb
// const dbURI = 'mongodb+srv://sandesh:<db_test1234>@nodejspractice.8b3dra2.mongodb.net/nodejs?retryWrites=true&w=majority&appName=Nodejspractice';

var dbURI = 'mongodb+srv://Sandesh:test1234@nodejspractice.8b3dra2.mongodb.net/nodejs?retryWrites=true&w=majority&appName=Nodejspractice';
mongoose.connect(dbURI, {}).then(function (result) {
  return app.listen(3000);
})["catch"](function (err) {
  return console.log(err);
}); // .then((result) => console.log('connected to db'))
//     // .then((result) => app.listen(3000)) IP 106.219.233.244/32
// register view engine

app.set('view engine', 'ejs'); // for EJS
// listen for requst
// app.listen(3000);
// middleware
// app.use((req, res, next) => {      //using next middleware
//     console.log('new request made');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:',req.method);
//     next();                             //using next middleware
// });
// using next middleware
// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });
// middleware and statis files

app.use(express["static"]('public'));
app.use(express.urlencoded({
  extended: true
})); // Parse URL-encoded bodies (form data)
// using morgan middleware
// app.use(morgan('tiny'));

app.use(morgan('dev')); // mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });
//     blog.save()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });
// app.get('/all-blogs', (req, res) =>{
//     Blog.find()
//     .then((result) => {
//         res.send(result);  
//     })
//     .catch((err) =>{
//         console.log(err);
//     });
// });
// app.get('/single-blog', (req, res) => {
//     Blog.findById('67f22682f6c93fe91bf74325')
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     }); 
// })
// routes

app.get('/', function (req, res) {
  var blogs = [{
    title: "Mohan finds eggs",
    snippet: "Lorem ipsum dolor sit amet consectetur"
  }, {
    title: "I find you",
    snippet: "Lorem ipsum dolor sit amet consectetur"
  }, {
    title: "You find me",
    snippet: "Lorem ipsum dolor sit amet consectetur"
  }]; // res.send('<p>Home Page</p>');
  // res.sendFile('/views/index.html', { root: __dirname }); // __dirname is the current directory

  res.render('index', {
    title: "Home",
    blogs: blogs
  }); // for EJS
}); //blogs routes

app.get('/', function (req, res) {
  res.redirect('/blogs'); // Redirect to the home page    
});
app.get('/about', function (req, res) {
  // res.send('<p>About Page</p>');
  // res.sendFile('/views/about.html', { root: __dirname });
  res.render('about', {
    title: "About"
  }); // for EJS
}); // app.get('/contact', (req, res) => {
// res.send('<p>Contact Page</p>');
// res.sendFile('/views/contact.html', { root: __dirname });
// });
// redirects
// app.get('/about-us', (req, res)=>{
//     res.redirect('/about');
// });
// // blogs routes

app.use("/blogs", blogRoutes); // Use the blog routes
// app.get('/blogs', (req, res) => {
//     Blog.find().sort({createdAt: -1}) // Sort by createdAt in descending order
//     .then((result) => {
//         // res.send(result);  
//         res.render('index', {title:"All Blogs", blogs: result});  // for EJS
//     })
//     .catch((err) =>{
//         console.log(err);
//     });
// });
// app.post('/blogs', (req, res) => {
//     // console.log(req.body); Log the request body to the console
//     const blog = new Blog(req.body); // Create a new blog instance with the request body
//     blog.save()
//     .then((result) => {
//         res.redirect('/blogs'); // Redirect to the blogs page after saving
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });
// app.get('/blogs/:id', (req, res) => {
//     const id = req.params.id; // Get the blog ID from the URL parameters
//     Blog.findById(id) // Find the blog by ID
//     .then((result) => {
//         // res.send(result);  
//         res.render('details', {blog: result , title:"Blog Details"});  // for EJS
//     })
//     .catch((err) => {
//         console.log(err);
//         res.status(404).render('404', {title:"Blog not found"});  // for EJS
//     });
// });
// // Delete Request
// app.delete('/blogs/:id', (req, res) => {
//     const id = req.params.id; // Get the blog ID from the URL parameters
//     Blog.findByIdAndDelete(id) // Find the blog by ID and delete it
//     .then((result) => {
//         res.json({ redirect: '/blogs' }); // Send a JSON response to redirect after deletion
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });
// app.get('/blogs/create',(req, res) =>{
//     res.render('create', {title:"Create a new blog"});   // for EJS
// })
// app.get('/contact', (req, res) => {
// res.send('<p>Contact Page</p>');
// res.sendFile('/views/contact.html', { root: __dirname });
// });
// redirects
// app.get('/about-us', (req, res)=>{
//     res.redirect('/about');
// });
// 404 page

app.use(function (req, res) {
  // res.sendFile('/views/404.html', { root: __dirname });
  // res.status(404).sendFile('/views/404.html', { root: __dirname });
  res.status(404).render('404', {
    title: "404"
  }); // for EJS
});