// Description: This file contains the code to demonstrate the global object in Node.js.
// Date: 19th March, 2025

// console.log(global);

// global.setTimeout(() => {   
//     console.log("Hello World");
//     clearInterval(int);
// }, 3000);

// const int = setInterval(() => {
//     console.log("Hello World");
// }, 1000);


console.log(__dirname);
console.log(__filename);
console.log(process); // Process is a global object in Node.js
console.log(process.pid);
console.log(process.versions.node);     // Node.js version
console.log(process.argv);              // Command line arguments 
console.log(process.argv[2]);           // Command line argument at index 2
const [,,firstName, lastName] = process.argv;   // Destructuring command line arguments
console.log(`Your name is ${firstName} ${lastName}`); // Output the name    
console.log                             // Output the name

