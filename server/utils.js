'use strict';

const { LISTENING } = require(__dirname + '/constants');

const serverStartLogger = port => console.log(`${LISTENING} ${port}.`);

module.exports = {
    serverStartLogger
};