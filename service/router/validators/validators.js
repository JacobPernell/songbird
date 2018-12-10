'use strict';

const {
    acceptedCharactersValidator,
    fieldTypeValidator,
    lengthValidator
} = require(__dirname + '/utils');
const { USERNAME_REQUIREMENTS } = require(__dirname + '/constants');

const usernameCharactersValidator = {
    handler: acceptedCharactersValidator,
    message: 'username should only be letters, numbers, and "-" + "_"',
    source: USERNAME_REQUIREMENTS.ACCEPTED_CHARACTER_REGEX
};

const usernameLengthValidator = {
    handler: lengthValidator,
    message: 'username is too long',
    source: USERNAME_REQUIREMENTS.LENGTH
};

const usernameTypeValidator = {
    handler: fieldTypeValidator,
    message: 'username is not a string',
    source: USERNAME_REQUIREMENTS.PRIMITIVE
};

module.exports = {
    usernameCharactersValidator,
    usernameLengthValidator,
    usernameTypeValidator
};
