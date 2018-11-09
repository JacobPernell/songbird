'use strict';

const express = require('express');
const Router = express.Router();

const { musicEndpointFixtures } = require('./fixtures');

Router.get('/music', (req, res) => {
    res.send(musicEndpointFixtures);
});

module.exports = Router;