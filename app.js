const express = require('express');
// const { Server } = require('http');
// const morgan = require('morgan');
// const mongoose = require('mongoose');

//express app  
const app = express();

// register view engine
app.set('view engine', 'ejs');




// listen for requst
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    res.sendFile('/views/index.html', { root: __dirname }); // __dirname is the current directory
});

app.get('/about', (req, res) => {
    // res.send('<p>About Page</p>');
    res.sendFile('/views/about.html', { root: __dirname });

});

app.get('/contact', (req, res) => {
    // res.send('<p>Contact Page</p>');
    res.sendFile('/views/contact.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res)=>{
    res.redirect('/about');
});


// 404 page
app.use((req, res) => {
    // res.sendFile('/views/404.html', { root: __dirname });
    res.status(404).sendFile('/views/404.html', { root: __dirname });
});


 