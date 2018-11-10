'use strict';

const mongoose = require('mongoose');

const sketchesSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Number
    },
    sketches: {
        default: [],
        required: true,
        type: Array
    }
});

module.exports = mongoose.model('Sketches', sketchesSchema);