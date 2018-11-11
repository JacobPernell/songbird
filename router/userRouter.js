'use strict';

const express = require('express');
const Router = express.Router();

const { userEndpointFixtures } = require('./fixtures');

Router.get('/user', (req, res) => {
    res.send(userEndpointFixtures);
});

Router.post('/user', (req, res) => {
    res.send('you made a post');
});

module.exports = Router;