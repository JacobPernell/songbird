'use strict';

const {
    ERROR_RESPONSES: {
        SERVER_ERROR
    }
} = require(__dirname + '/constants');

const handleServerError = err => {
    console.log(err); // eslint-disable-line no-console

    return { message: SERVER_ERROR };
};

module.exports = {
    handleServerError
};
