'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const {
    formatUser,
    validationErrorHandler
} = require(__dirname + '/utils');
const { gatherValidationErrors } = require(__dirname + '/validators/utils');
const { handleServerError } = require(__dirname + '/../lib/errors');
const { logger } = require(__dirname + '/../lib/utils');
const { LOGGER_TYPES } = require(__dirname + '/../lib/constants');
const {
    emailCharactersValidator,
    emailTypeValidator,
    passwordCharactersValidator,
    passwordLengthValidator,
    passwordTypeValidator,
    usernameCharactersValidator,
    usernameLengthValidator,
    usernameTypeValidator
} = require(__dirname + '/validators/validators');
const {
    RESPONSE_MESSAGES: {
        USER_CREATED
    },
    STATIC_ROUTES: { USERS }
} = require(__dirname + '/constants');
const Router = express.Router();
const User = require(__dirname + '/../models/user');

Router.get(USERS, (req, res) => {
    User.find({}, (err, data) => {
        if (err) {
            return handleServerError(err);
        }

        res.json(data);
    });
});

Router.post(USERS, bodyParser.json(), ({ body }, res) => {
    const emailErrors = gatherValidationErrors(
        body.email,
        emailCharactersValidator,
        emailTypeValidator
    );

    const usernameErrors = gatherValidationErrors(
        body.username,
        usernameCharactersValidator,
        usernameLengthValidator,
        usernameTypeValidator
    );

    const passwordErrors = gatherValidationErrors(
        body.password,
        passwordCharactersValidator,
        passwordLengthValidator,
        passwordTypeValidator
    );

    if (usernameErrors.length || passwordErrors.length || emailErrors.length) {
        const message = validationErrorHandler([
            ...usernameErrors,
            ...emailErrors,
            ...passwordErrors
        ]);

        logger(message, LOGGER_TYPES.ERROR);

        res.json({
            message,
            status: 400,
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
            logger(USER_CREATED, LOGGER_TYPES.SUCCESS);
        });
    }
});

module.exports = Router;
