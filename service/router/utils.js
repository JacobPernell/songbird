'use strict';

const createInstancesWithFixtures = (constructor, fixtures) =>
    fixtures.map(fixture => new constructor({ ...fixture }));

module.exports = {
    createInstancesWithFixtures
};
