const express = require('express');
const Router = express.Router();

Router.get('/music', (req, res) => {
    res.send('/music');
});

module.exports = Router;