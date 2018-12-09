const { LOGGER_TYPES: { SUCCESS }} = require(__dirname + '/../lib/constants');
const { LISTENING } = require(__dirname + '/constants');
const { logger } = require(__dirname + '/../lib/utils');

const serverStartLogger = port => logger(`${LISTENING} ${port}`, SUCCESS);

module.exports = {
    serverStartLogger
};
