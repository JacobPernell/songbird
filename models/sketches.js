'use strict';

const { Schema } = require('mongoose').Schema;

const sketchesSchema = new Schema({
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

module.exports = sketchesSchema;