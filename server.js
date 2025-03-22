const fs = require('fs');
const http = require('http');



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
