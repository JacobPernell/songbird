'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const {
    formatUser,
    gatherValidationErrors,
    validationErrorHandler
} = require(__dirname + '/utils');
const { handleServerError } = require(__dirname + '/../lib/errors');
const { logger } = require(__dirname + '/../lib/utils');
const { LOGGER_TYPES } = require(__dirname + '/../lib/constants');
const {
    RESPONSE_MESSAGES: {
        USER_CREATED
    },
    STATIC_ROUTES: { USERS }
} = require(__dirname + '/constants');
const Router = express.Router();
const User = require(__dirname + '/../models/user');
const {
    usernameCharactersValidator,
    usernameLengthValidator,
    usernameTypeValidator
} = require(__dirname + '/validators/validators');

Router.get(USERS, (req, res) => {
    User.find({}, (err, data) => {
        if (err) {
            return handleServerError(err);
        }

        res.json(data);
    });
});

Router.post(USERS, bodyParser.json(), ({ body }, res) => {
    const usernameErrors = gatherValidationErrors(
        body.username,
        usernameCharactersValidator,
        usernameLengthValidator,
        usernameTypeValidator
    );

    if (usernameErrors.length) {
        const message = validationErrorHandler(usernameErrors);

        logger(message, LOGGER_TYPES.ERROR);

        res.json({
            message,
            success: false
        });
    }

    else {
        const user = new User(formatUser(body));

        user.save(err => {
            if (err) {
                return handleServerError(err);
            }

            res.json({
                success: true,
                message: USER_CREATED
            });
        });
    }
});

module.exports = Router;
