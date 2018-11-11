'use strict';

const mongoose = require('mongoose');

const {
    DIST_RELATIVE_PATH,
    MONGO_DEV_URL,
    SERVICE_CLIENT_PATH,
    SERVICE_CLIENT_RELATIVE_PATH
} = require(__dirname + '/server/constants');
const { ExpressServer } = require(__dirname + '/server/server');
const { SketchesRouter, UserRouter } = require(__dirname + '/router/index');

const Server = new ExpressServer();

mongoose.connect(MONGO_DEV_URL);

Server.setupRouter('/api/', SketchesRouter);
Server.setupRouter('/', UserRouter);
Server.setStaticDirectory(SERVICE_CLIENT_PATH, SERVICE_CLIENT_RELATIVE_PATH);
Server.setStaticRoot(DIST_RELATIVE_PATH);
Server.listen(process.env.PORT);