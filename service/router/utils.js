'use strict';

const createInstancesWithFixtures = (constructor, fixtures) =>
    fixtures.map(fixture => new constructor({ ...fixture }));

const formatUser = ({ email, password, username }) => ({
    authentication: {
        basic: {
            password,
            username
        }
    },
    email,
    username
});

module.exports = {
    createInstancesWithFixtures,
    formatUser
};
