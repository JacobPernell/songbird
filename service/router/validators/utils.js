'use strict';

const { logger } = require(__dirname + '/../../lib/utils');
const { LOGGER_TYPES } = require(__dirname + '/../../lib/constants');

const acceptedCharactersValidator = (field, regex) => regex.test(field);

const fieldTypeValidator = (field, type) => typeof field === type;

const gatherValidationErrors = (field, ...validators) => {
    try {
        return validators.filter(validator =>
            !validator.handler(field, validator.source)
        );
    }

    catch(error) {
        logger(error, LOGGER_TYPES.ERROR);
    }
};

const lengthValidator = (field, { MIN, MAX }) =>
    field.length >= MIN && field.length <= MAX;

const validationErrorHandler = (errors = []) =>
    errors.reduce((errorMessage, { message }) => errorMessage + '\n' + message, '');

module.exports = {
    acceptedCharactersValidator,
    gatherValidationErrors,
    fieldTypeValidator,
    lengthValidator,
    validationErrorHandler
};
