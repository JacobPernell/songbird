// @flow
const DEFAULT_PORT = 3000;
const DIST_DIRECTORY = 'dist';
const DIST_RELATIVE_PATH = `./${DIST_DIRECTORY}`;
const LISTENING = 'Listening on';
const DB_ENDPOINT = 'songbird_db';
const MONGO_DEV_URL = 'mongodb://localhost:27017/';
const MONGO_ENDPOINT = MONGO_DEV_URL + DB_ENDPOINT;

module.exports = {
    DB_ENDPOINT,
    DEFAULT_PORT,
    DIST_RELATIVE_PATH,
    LISTENING,
    MONGO_DEV_URL,
    MONGO_ENDPOINT
};
