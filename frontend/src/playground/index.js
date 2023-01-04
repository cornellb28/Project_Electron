// const fse = require('fs-extra')

// const activeFolder = '../imageFolder';

// if(activeFolder){
//    return; 
// }

// fse.ensureDir('../imageFolder');

const fs = require('fs')
const path = require('path')

// new folder absolute path
const dirPath = path.join(__dirname, '/../../views');
console.log(dirPath)

// create directory
fs.mkdirSync(dirPath)




