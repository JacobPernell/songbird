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
});