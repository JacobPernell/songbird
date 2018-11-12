'use strict';

const mongoose = require('mongoose');

const {
    DIST_RELATIVE_PATH,
    MONGO_DEV_URL
} = require(__dirname + '/server/constants');
const { ExpressServer } = require(__dirname + '/server/server');
const { ServiceClientRouter, SketchesRouter, UserRouter } = require(__dirname + '/router/index');

const Server = new ExpressServer();

mongoose.connect(MONGO_DEV_URL);

Server.setupRouter('/', ServiceClientRouter);
Server.setupRouter('/api/', SketchesRouter);
Server.setupRouter('/', UserRouter);
Server.setStaticRoot(DIST_RELATIVE_PATH);
Server.listen(process.env.PORT);