'use strict';

const mongoose = require('mongoose');

const sketchSchema = new mongoose.Schema({
    length: {
        required: true,
        type: Number
    },
    octave: {
        required: true,
        type: Number
    },
    pitch: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Sketch', sketchSchema);