'use strict';

const PropTypes = require('prop-types');

const { sketchesFixtures } = require('./constants');
const { createInstancesWithFixtures } = require('./utils');

class Sketches {
    constructor(id, sketches) {
        this.id = id;
        this.sketches = sketches;
    }
}

Sketches.propTypes = {
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

const sketchesEndpointFixtures = createInstancesWithFixtures(Sketches, sketchesFixtures);

module.exports = {
    sketchesEndpointFixtures
};
