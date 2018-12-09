'use strict';

const CONSOLE_COLORS = {
    CYAN: '\x1b[36m',
    GREEN: '\x1b[32m',
    MAGENTA: '\x1b[35m',
    RED: '\x1b[31m'
};

const ERROR_RESPONSES = {
    SERVER_ERROR: 'Server Error'
};

const LOGGER_TYPES = {
    CAUTION: 'caution',
    DEFAULT: 'default',
    ERROR: 'error',
    SUCCESS: 'succes'
};

const MESSAGE_COLORS = {
    [LOGGER_TYPES.CAUTION]: CONSOLE_COLORS.MAGENTA,
    [LOGGER_TYPES.DEFAULT]: CONSOLE_COLORS.CYAN,
    [LOGGER_TYPES.ERROR]: CONSOLE_COLORS.RED,
    [LOGGER_TYPES.SUCCESS]: CONSOLE_COLORS.GREEN
};

module.exports = {
    ERROR_RESPONSES,
    LOGGER_TYPES,
    MESSAGE_COLORS
};
