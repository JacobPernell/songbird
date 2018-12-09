'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const { handleServerError } = require(__dirname + '/../lib/errors');
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

Router.post(USERS, bodyParser.json(), (req, res) => {
    const user = new User(req.body);

    user.save(err => {
        if (err) {
            return handleServerError(err);
        }

        res.json({
            success: true,
            message: USER_CREATED
        });
    });
});

module.exports = Router;
