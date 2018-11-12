'use strict';

const express = require('express');
const path = require('path');
const Router = express.Router();

Router.get('/service-client', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/service-client.html'));
});

module.exports = Router;