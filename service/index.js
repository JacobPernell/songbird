'use strict';

const mongoose = require('mongoose');

const {
    DIST_RELATIVE_PATH,
    MONGO_ENDPOINT
} = require(__dirname + '/server/constants');
const { ExpressServer } = require(__dirname + '/server/server');
const {
    ServiceClientRouter,
    SketchesRouter,
    UserRouter
} = require(__dirname + '/router/index');

const Server = new ExpressServer();

mongoose.connect(MONGO_ENDPOINT, { useNewUrlParser: true });

Server.setupRouter('/dev/', ServiceClientRouter);
Server.setupRouter('/api/', SketchesRouter);
Server.setupRouter('/', UserRouter);
Server.setStaticRoot(DIST_RELATIVE_PATH);
Server.listen(process.env.PORT);
