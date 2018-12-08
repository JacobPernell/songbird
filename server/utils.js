// @flow
const { LISTENING } = require(__dirname + '/constants');

const serverStartLogger = (port: number) => console.log(`${LISTENING} ${port}`); // eslint-disable-line no-console

module.exports = {
    serverStartLogger
};
