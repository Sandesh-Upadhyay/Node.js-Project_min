const people = ['John', 'Sara', 'Tom'], age = [20, 23 , 23,24,25];
console.log(people); // Output the array
//
module.exports = {
    people, age
}                                    
console.log(global); // Output the global object
console.log(global.setTimeout); // Output the setTimeout function
console.log(global.setInterval); // Output the setInterval function
console.log(global.clearInterval); // Output the clearInterval function
console.log(global.clearTimeout); // Output the clearTimeout function
console.log(global.__dirname); // Output the directory name
console.log(global.__filename); // Output the file name
console.log(global.process); // Output the process object
console.log(global.process.pid); // Output the process id
console.log(global.process.versions.node); // Output the Node.js version
console.log(global.process.argv); // Output the command line arguments
console.log(global.process.argv[2]); // Output the command line argument at index 2
const [,,firstName, lastName] = global.process.argv; // Destructuring command line arguments
console.log(`Your name is ${firstName} ${lastName}`); // Output the name
console.log(global.process); // Output the process object


// const me = ["John", "Sara", "Tom","Jerry","Mickey"], age = [20, 23 , 23,24,25]; // Create an array

console.log(me, age); // Output the array

module.exports = {
    me, age // Export the array
}
// OS module
const os = require('os'); // Import the os module
console.log("Operating System",os.platform(), "home directory:",os.homedir()); // Output the platform
