'use strict';

const express = require('express');
const path = require('path');
const Router = express.Router();
const { STATIC_PATHS, STATIC_ROUTES } = require(__dirname + '/constants');

Router.get(STATIC_ROUTES.SERVICE_CLIENT, (req, res) => {
    res.sendFile(path.join(__dirname + STATIC_PATHS.SERVICE_CLIENT));
});

module.exports = Router;
