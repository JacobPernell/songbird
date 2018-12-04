'use strict';

const CONSTANTS = require(__dirname + '/constants');
const utils = require(__dirname + '/../lib/utils');

const initializeDatabase = directoryPath => {
    if (!utils.checkForDirectory(directoryPath)) {
        utils.createDirectory(directoryPath);
    }
};

initializeDatabase(CONSTANTS.MONGO_DATABASE_DIRECTORY);