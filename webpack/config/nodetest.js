const path = require('path');
const fs = require('fs');

const PATHS = {
    src: path.join(__dirname, '../../src'),
    dist: path.join(__dirname, ('../../public')),
    webpack: path.join(__dirname, '../../webpack'),
    assets: 'assets/',
};

const PAGES_DIR = `${PATHS.src}/pages/pug/includes/pages`;

let filesArr = [];


let a = [];


console.log(fs.readdir(
    PAGES_DIR, (err, files) => {
        if (err) throw err
        return files.length
    }
))
