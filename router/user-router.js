'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const Router = express.Router();
const User = require(__dirname + '/../models/user');

Router.get('/users', (req, res) => {
    User.find({}, (err, data) => {
        if (err) {
            // replace with error handler
            console.log('Handle error'); // eslint-disable-line no-console
        }

        res.json(data);
    });
});

Router.post('/users', bodyParser.json(), (req, res) => {
    const user = new User(req.body);

    user.save((err, data) => {
        if (err) {
            // replace with error handler
            console.log('Handle error'); // eslint-disable-line no-console
            return;
        }

        console.log(data); // eslint-disable-line no-console
        res.json({
            success: true,
            message: 'Success'
        });
    });
});

module.exports = Router;
