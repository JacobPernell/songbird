'use strict';

const fs = require('fs');
const { LOGGER_TYPES, MESSAGE_COLORS } = require(__dirname + '/constants');

const checkForDirectory = directoryName => fs.existsSync(directoryName);

const createDirectory = directoryPath => {
    try {
        fs.mkdirSync(directoryPath);
    }

    catch(err) {
        logger('Directory already exists.', LOGGER_TYPES.DEFAULT);
    }
};

const logger = (message = '', type = LOGGER_TYPES.DEFAULT) =>
    console.log(MESSAGE_COLORS[type], '\n' + message); // eslint-disable-line no-console

module.exports = {
    checkForDirectory,
    createDirectory,
    logger
};
