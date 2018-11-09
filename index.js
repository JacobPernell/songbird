'use strict';

const mongoose = require('mongoose');

const { DIST_DIRECTORY } = require(__dirname + '/server/constants');
const { ExpressServer } = require(__dirname + '/server/server');
const { MusicRouter, UserRouter } = require(__dirname + '/router/index');

const Server = new ExpressServer();

mongoose.connect('mongod://localhost/midi_web_app_db');

Server.setupRouter('/api/', MusicRouter);
Server.setupRouter('/', UserRouter);
Server.setStaticDirectory(__dirname + '/' + DIST_DIRECTORY);
Server.listen(process.env.PORT);