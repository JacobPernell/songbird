'use strict';

const { ExpressServer } = require(__dirname + '/server/server');
const { DIST_DIRECTORY } = require(__dirname + '/server/constants');

const Server = new ExpressServer();

Server.setStaticDirectory(__dirname + '/' + DIST_DIRECTORY);
Server.listen(process.env.PORT);