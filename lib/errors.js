'use strict';

const {
    ERROR_RESPONSES: { SERVER_ERROR },
    LOGGER_TYPES: { ERROR }
} = require(__dirname + '/constants');
const { logger } = require(__dirname + '/utils');

const handleServerError = err => {
    logger(err, ERROR);

    return { message: SERVER_ERROR };
};

module.exports = {
    handleServerError
};
