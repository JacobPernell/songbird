'use strict';

const { ExpressServer } = require(__dirname + '/server/server');
const { PUBLIC_BUILD_PATH } = require(__dirname + '/server/constants');

const Server = new ExpressServer();

Server.setStaticDirectory(PUBLIC_BUILD_PATH);
Server.listen(process.env.PORT);