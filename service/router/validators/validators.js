'use strict';

const {
    acceptedCharactersValidator,
    fieldTypeValidator,
    lengthValidator
} = require(__dirname + '/utils');
const {
    EMAIL_REQUIREMENTS,
    PASSWORD_REQUIREMENTS,
    USERNAME_REQUIREMENTS
} = require(__dirname + '/constants');

const emailCharactersValidator = {
    handler: acceptedCharactersValidator,
    message: 'email is wrong',
    source: EMAIL_REQUIREMENTS.ACCEPTED_CHARACTER_REGEX
};

const emailTypeValidator = {
    handler: fieldTypeValidator,
    message: 'email is not a string',
    source: EMAIL_REQUIREMENTS.PRIMITIVE
};

const passwordCharactersValidator = {
    handler: acceptedCharactersValidator,
    message: 'password is wrong',
    source: PASSWORD_REQUIREMENTS.ACCEPTED_CHARACTER_REGEX
};

const passwordLengthValidator = {
    handler: lengthValidator,
    message: 'password is too long',
    source: PASSWORD_REQUIREMENTS.LENGTH
};

const passwordTypeValidator = {
    handler: fieldTypeValidator,
    message: 'password is not a string',
    source: PASSWORD_REQUIREMENTS.PRIMITIVE
};

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
    emailCharactersValidator,
    emailTypeValidator,
    passwordCharactersValidator,
    passwordLengthValidator,
    passwordTypeValidator,
    usernameCharactersValidator,
    usernameLengthValidator,
    usernameTypeValidator
};
