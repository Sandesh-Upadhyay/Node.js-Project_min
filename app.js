const express = require('express');
const { Server } = require('http');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const Blog = require('./models/blogs'); // Import the Blog model
// const fs = require('fs');

//express app  
const app = express();

// connect to mongodb
// const dbURI = 'mongodb+srv://sandesh:<db_test1234>@nodejspractice.8b3dra2.mongodb.net/nodejs?retryWrites=true&w=majority&appName=Nodejspractice';
const dbURI = 'mongodb+srv://sandesh:test1234@nodejspractice.8b3dra2.mongodb.net/nodejs?retryWrites=true&w=majority&appName=Nodejspractice';
mongoose.connect(dbURI, { })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err))
//     // .then((result) => app.listen(3000))

// register view engine
app.set('view engine', 'ejs');    // for EJS



// listen for requst
app.listen(3000);

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
app.use(express.static('public'));


// using morgan middleware
// app.use(morgan('tiny'));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog',
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


// routes

app.get('/', (req, res) => {
    
    const blogs = [
        {title:"Mohan finds eggs",snippet:"Lorem ipsum dolor sit amet consectetur"},
        {title:"I find you",snippet:"Lorem ipsum dolor sit amet consectetur"},
        {title:"You find me",snippet:"Lorem ipsum dolor sit amet consectetur"},
        ];
    // res.send('<p>Home Page</p>');
    // res.sendFile('/views/index.html', { root: __dirname }); // __dirname is the current directory
    res.render('index', {title:"Home",blogs });    // for EJS
});


app.get('/about', (req, res) => {
    // res.send('<p>About Page</p>');
    // res.sendFile('/views/about.html', { root: __dirname });
    res.render('about', {title:"About"});  // for EJS

});

app.get('/blogs/create',(req, res) =>{
    res.render('create', {title:"Create a new blog"});   // for EJS
})
// app.get('/contact', (req, res) => {
    // res.send('<p>Contact Page</p>');
    // res.sendFile('/views/contact.html', { root: __dirname });
// });

// redirects
// app.get('/about-us', (req, res)=>{
//     res.redirect('/about');
// });


// 404 page
app.use((req, res) => {
    // res.sendFile('/views/404.html', { root: __dirname });
    // res.status(404).sendFile('/views/404.html', { root: __dirname });
    res.status(404).render('404', {title:"404"})  // for EJS
});


 