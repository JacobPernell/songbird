'use strict';

const { LISTENING } = require(__dirname + '/constants');

const serverStartLogger = port => console.log(`${LISTENING} ${port}`); // eslint-disable-line no-console

module.exports = {
    serverStartLogger
};