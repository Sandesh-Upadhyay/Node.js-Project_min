"use strict";

var fs = require('fs');

var http = require('http');

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

var uri = 'mongodb+srv://Sandesh:test1234@nodejspractice.8b3dra2.mongodb.net/nodejs?retryWrites=true&w=majority&appName=Nodejspractice'; // Replace with your MongoDB connection string

var client = new MongoClient(uri);

function connectToDatabase() {
  return regeneratorRuntime.async(function connectToDatabase$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(client.connect());

        case 3:
          console.log("Connected to MongoDB"); // Perform database operations here if needed

          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error("Failed to connect to MongoDB", _context.t0);

        case 9:
          _context.prev = 9;
          return _context.finish(9);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6, 9, 11]]);
}

connectToDatabase();
var server = http.createServer(function (req, res) {
  // console.log(req.url, req.method);
  // lodash
  var _ = require('lodash');

  var num = _.random(0, 20);

  console.log(num);

  var greet = _.once(function () {
    console.log('hello');
  });

  greet();
  greet(); // Set Header Content Type

  res.setHeader('Content-Type', 'text/html'); // ROUTING

  var path = './views/';

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
      break;
    // Till Here
    // ERROR HANDLING

    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  }); // BASIC SERVER
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
server.listen(3000, 'localhost', function () {
  console.log('listening for requests on port 3000');
});