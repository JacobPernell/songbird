'use strict';

const { DIST_DIRECTORY } = require(__dirname + '/server/constants');
const { ExpressServer } = require(__dirname + '/server/server');
const { MusicRouter, UserRouter } = require(__dirname + '/router/index');

const Server = new ExpressServer();

Server.setupRouter('/api/', MusicRouter);
Server.setupRouter('/', UserRouter);
Server.setStaticDirectory(__dirname + '/' + DIST_DIRECTORY);
Server.listen(process.env.PORT);