const fs = require('fs');
const http = require('http');
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Sandesh:test1234@nodejspractice.8b3dra2.mongodb.net/nodejs?retryWrites=true&w=majority&appName=Nodejspractice';// Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        // Perform database operations here if needed
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    } finally {
        // Uncomment the following line if you want to close the connection after operations
        // await client.close();
    }
}

connectToDatabase();

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    // lodash
    const _ = require('lodash');
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });
    greet();
    greet();      


    
    // Set Header Content Type
    res.setHeader('Content-Type', 'text/html');
    
    // ROUTING
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact':
            path += 'contact.html';
            res.statusCode = 200;
            break;
            // HOW TO REDIRECT
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;// Till Here

            // ERROR HANDLING
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });

// BASIC SERVER

//     res.write('<head><link rel="stylesheet" href="#"></head>');
//     res.end();

//     //  send an HTML File to the browser
//     fs.readFile('./views/index.html', (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//         } else {
//             // res.write(data);
//             res.end(data);
//         }
//     });


});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});
