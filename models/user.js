'use strict';

const { Schema } = require('mongoose').Schema;

const userSchema = new Schema({
    authentication: {
        basic: {
            username: String,
            password: String
        }
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    username: {
        required: true,
        type: String,
        unique: true
    }
});

module.exports = userSchema;