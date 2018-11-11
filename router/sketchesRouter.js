'use strict';

const express = require('express');
const Router = express.Router();

const { sketchesEndpointFixtures } = require('./fixtures');

Router.get('/sketches', (req, res) => {
    res.send(sketchesEndpointFixtures);
});

module.exports = Router;