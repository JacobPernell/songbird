'use strict';

const fs = require('fs');

const checkForDirectory = directoryName => fs.existsSync(directoryName);

const createDirectory = directoryPath => fs.mkdirSync(directoryPath);

module.exports = {
    checkForDirectory,
    createDirectory
};