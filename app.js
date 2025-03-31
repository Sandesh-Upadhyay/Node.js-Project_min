const express = require('express');
// const { Server } = require('http');
// const morgan = require('morgan');
// const mongoose = require('mongoose');

//express app  
const app = express();

// register view engine
app.set('view engine', 'ejs');    // for EJS




// listen for requst
app.listen(3000);

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


 