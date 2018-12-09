'use strict';

const express = require('express');
const Router = express.Router();

const { STATIC_ROUTES: { SKETCHES }} = require(__dirname + '/constants');
const { sketchesEndpointFixtures } = require(__dirname + '/fixtures');

Router.get(SKETCHES, (req, res) => {
    res.send(sketchesEndpointFixtures);
});

module.exports = Router;
