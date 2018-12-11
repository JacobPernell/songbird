'use strict';


const EMAIL_REQUIREMENTS = {
    ACCEPTED_CHARACTER_REGEX: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, // eslint-disable-line max-len
    PRIMITIVE: 'string'
};

const PASSWORD_REQUIREMENTS = {
    ACCEPTED_CHARACTER_REGEX: /^[a-zA-Z0-9-_!?;:!@#$%^&*()]+$/,
    LENGTH: {
        MAX: 128,
        MIN: 8
    },
    PRIMITIVE: 'string'
};

const USERNAME_REQUIREMENTS = {
    ACCEPTED_CHARACTER_REGEX: /^[a-zA-Z0-9-_]+$/,
    LENGTH: {
        MAX: 20,
        MIN: 3
    },
    PRIMITIVE: 'string'
};

module.exports = {
    EMAIL_REQUIREMENTS,
    PASSWORD_REQUIREMENTS,
    USERNAME_REQUIREMENTS
};
