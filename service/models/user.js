'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    authentication: {
        basic: {
            username: {
                required: true,
                type: String
            },
            password: {
                required: true,
                type: String
            }
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

module.exports = mongoose.model('User', userSchema);
