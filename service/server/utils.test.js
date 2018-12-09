'use strict';

const { serverStartLogger } = require(__dirname + '/utils');

describe('serverStartLogger', () => {
    it('should return a log displaying the port the server is listening on', () => {
        const inputs = [3000, 21001];
        console.log = jest.fn(); // eslint-disable-line no-console

        inputs.forEach(input => {
            serverStartLogger(input);
            expect(console.log).toHaveBeenCalled(); // eslint-disable-line no-console
            expect(console.log).toHaveBeenCalledWith('\x1b[32m', '\n' + `Listening on ${input}`); // eslint-disable-line no-console
        });
    });
});
