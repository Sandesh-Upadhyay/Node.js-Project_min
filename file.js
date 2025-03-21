// // FILE SYSTEM MODULE
// // The File System module has methods for creating new files, updating files, deleting files, renaming files, and more.
// //
// // To use the File System module, include the fs module using require():

// const e = require('express');
const fs = require('fs'); 
// // Common use for the File System module:

// // read files
fs.readFile('./docs/blog.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());

});


// write files

fs.writeFile('./docs/blog.txt', 'Hello, world', () => {
    console.log('file was written');
}); // This will create a file called blog.txt in the docs folder with the content Hello, world.

fs.writeFile('./docs/blog2.txt', 'Hello, world', () => {
    console.log('file was written');
});



fs.writeFile('./docs/blog3 .txt', 'Hello, world', () => {
    console.log('file was written');
});

// directories
// create files

if (fs.existsSync('./assets')) {
    console.log('folder already exists');
    fs.rmdir('./assets',(err)=>{
        if (err){
            console.log(err)
        }
    });
} else {   
    fs.mkdir('./assets',(err)=>{
        if (err) {
            console.log(err);
        }                               
    });
    console.log('folder created');  
}
    


// delete files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
} else {
    console.log('file does not exist');
}   


