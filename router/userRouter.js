'use strict';

const express = require('express');
const Router = express.Router();

const { userEndpointFixtures } = require('./fixtures');

Router.get('/user', (req, res) => {
    res.send(userEndpointFixtures);
});

module.exports = Router;