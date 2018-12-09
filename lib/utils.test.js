'use strict';

const fs = require('fs');

const utils = require(__dirname + '/utils');

describe('checkForDirectory', () => {
    it('should return false if a directory does not exist', () => {
        expect(utils.checkForDirectory('test')).toBe(false);
    });

    it('should return true if a directory does already exist', () => {
        expect(utils.checkForDirectory('mongo-utils')).toBe(true);
    });
});

describe('createDirectory', () => {
    it('should create a directory if it does not already exist', () => {
        const mkdirSyncSpy = jest.spyOn(fs, 'mkdirSync');
        const testDbPath = 'test-db';

        utils.createDirectory(testDbPath);

        expect(mkdirSyncSpy).toHaveBeenCalledWith(testDbPath);
        expect(utils.checkForDirectory(testDbPath)).toBe(true);

        mkdirSyncSpy.mockRestore();

        fs.rmdirSync(testDbPath);
    });

    it.skip('should emit a message if the directory already exists', () => {

    });
});

describe.skip('logger', () => {
    it('', () => {
        const inputs = [
            { color: '\x1b[36m', message: 'message 1' },
            { color: '\x1b[32m', message: 'message 2' },
            { color: '\x1b[35m', message: 'message 3' },
            { color: '\x1b[31m', message: 'message 4' }
        ];
        console.log = jest.fn(); // eslint-disable-line no-console

        inputs.forEach(({ color, message }) => {
            utils.logger(message, color);

            expect(console.log).toHaveBeenCalled(); // eslint-disable-line no-console
            expect(console.log).toHaveBeenCalledWith(color, '\n' + message); // eslint-disable-line no-console
        });
    });
});
