'use strict';

const { createInstancesWithFixtures } = require('./utils');

describe('createInstancesWithFixtures', () => {
    it('should return an array of instances when passed an array of props and a class', () => {
        const mockProps = [
            { couch: 'blue', id: 1, name: 'jim' },
            { couch: 'green', id: 2, name: 'chris' },
            { couch: 'organge', id: 3, name: 'french' }
        ];

        class MockObject {
            constructor({ couch, id, name }) {
                this.couch = couch;
                this.id = id;
                this.name = name;
            }
        }

        const expected = createInstancesWithFixtures(MockObject, mockProps);

        expected.forEach((instance, i) => {
            expect(instance).toEqual(mockProps[i]);
        });
    });
});