'use strict';

const sketchesFixtures = [
    {
        id: 162,
        sketches: [
            {
                id: 1,
                name: 'sketch 1',
                notes: [
                    {
                        length: 1,
                        octave: 2,
                        pitch: 'a'
                    },
                    {
                        length: 1,
                        octave: 2,
                        pitch: 'b'
                    },
                    {
                        length: 2,
                        octave: 2,
                        pitch: 'c'
                    }
                ]
            },
            {
                id: 2,
                name: 'sketch 2',
                notes: [
                    {
                        length: 3,
                        octave: 2,
                        pitch: 'e'
                    },
                    {
                        length: 1,
                        octave: 2,
                        pitch: 'b'
                    },
                    {
                        length: 4,
                        octave: 2,
                        pitch: 'd#'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        sketches: []
    }
];

const userFixtures = [
    {
        email: 'jordan@jordanmusic.com',
        id: 162,
        username: 'jordan@jordanmusic.com' // default to email if username is undefined
    },
    {
        email: 'jacob@jacobpernell.music.com',
        id: 2,
        username: 'coolguy2003'
    }
];

module.exports = {
    sketchesFixtures,
    userFixtures
};