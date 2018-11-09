'use strict';

const { Schema } = require('mongoose').Schema;

const sketchSchema = new Schema({
    length: {
        required: true,
        type: Number
    },
    octave: {
        required: true,
        type: String
    },
    pitch: {
        required: true,
        type: String
    }
});

module.exports = sketchSchema;