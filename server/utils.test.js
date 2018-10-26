'use strict';

const { serverStartLogger } = require(__dirname + '/utils');

describe('serverStartLogger', () => {
    it('should return a log displaying the port the server is listening on', () => {
        const inputs = [3000, 21001];
        const logs = [];
        const storeConsoleLogOutput = input => logs.push(input);
        console.log = jest.fn(storeConsoleLogOutput); // eslint-disable-line no-console

        inputs.forEach((input, i) => {
            serverStartLogger(input);
            expect(logs[i]).toBe(`Listening on ${input}`);
        });
    });
});