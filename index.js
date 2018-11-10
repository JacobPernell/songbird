'use strict';

const mongoose = require('mongoose');

const { DIST_DIRECTORY, MONGO_DEV_URL } = require(__dirname + '/server/constants');
const { ExpressServer } = require(__dirname + '/server/server');
const { MusicRouter, UserRouter } = require(__dirname + '/router/index');

const Server = new ExpressServer();

mongoose.connect(MONGO_DEV_URL);

Server.setupRouter('/api/', MusicRouter);
Server.setupRouter('/', UserRouter);
Server.setStaticDirectory(__dirname + '/' + DIST_DIRECTORY);
Server.listen(process.env.PORT);