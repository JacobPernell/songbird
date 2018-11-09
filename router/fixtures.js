'use strict';

const PropTypes = require('prop-types');

const { musicFixtures, userFixtures } = require('./constants');
const { createInstancesWithFixtures } = require('./utils');

class Music {
    constructor(id, sketches) {
        this.id = id;
        this.sketches = sketches;
    }
}

Music.propTypes = {
    id: PropTypes.number.isRequired,
    sketches: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        notes: PropTypes.arrayOf(PropTypes.shape({
            length: PropTypes.number.isRequired,
            octave: PropTypes.number.isRequired,
            pitch: PropTypes.string.isRequired
        }))
    }))
};

class User {
    constructor({ email, id, username }) {
        this.email = email;
        this.id = id;
        this.username = username;
    }
}

User.propTypes = {
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    username: PropTypes.string
};

const musicEndpointFixtures = createInstancesWithFixtures(Music, musicFixtures);

const userEndpointFixtures = createInstancesWithFixtures(User, userFixtures);

module.exports = {
    musicEndpointFixtures,
    userEndpointFixtures
};