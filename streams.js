const fs = require('fs');

const readStream  = fs.createReadStream('./docs/blog.txt', { encoding: 'utf8' });
// const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', (chunk) => {
    console.log('----NEW CHUNK----');
    console.log(chunk);
    // writeStream.write('\nNEW CHUNK\n');
    // writeStream.write(chunk);  // Write the chunk to the writeStream
});

// piping
readStream.pipe(writeStream); // This will read the data from the readStream and write it to the writeStream
const writeStream = fs.createWriteStream('./docs/blog2.txt');
writeStream.write('Hello, world!\n');
writeStream.write('Hello, again!\n');
writeStream.write('Hello, Sandesh\n');
readStream.pipe(writeStream); // This will read the data from the readStream and write it to the writeStream

writeStream.end(); // This will close the writeStream

writeStream.on('finish', () => {
    console.log('WriteStream finished');
});
console.log(global); // Output the global object
