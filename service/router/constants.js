'use strict';

const RESPONSE_MESSAGES = {
    USER_CREATED: 'User created'
};

const STATIC_PATHS = {
    SERVICE_CLIENT: '/../../dist/service-client.html'
};

const STATIC_ROUTES = {
    SERVICE_CLIENT: '/service-client',
    SKETCHES: '/sketches',
    USERS: '/users'
};

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

module.exports = {
    RESPONSE_MESSAGES,
    STATIC_PATHS,
    STATIC_ROUTES,
    sketchesFixtures
};
