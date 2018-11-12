'use strict';

const DEFAULT_PORT = 3000;
const DIST_DIRECTORY = 'dist';
const DIST_RELATIVE_PATH = `./${DIST_DIRECTORY}`;
const LISTENING = 'Listening on';
const MONGO_DEV_URL = 'mongod://localhost/midi_web_app_db';

module.exports = {
    DEFAULT_PORT,
    DIST_RELATIVE_PATH,
    LISTENING,
    MONGO_DEV_URL
};