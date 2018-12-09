'use strict';

const User = require('./user');

describe('User model', () => {
    it('should invalidate if email is undefined', () => {
        const u = new User({
            authentication: {
                basic: {
                    username: 'a',
                    password: 'a'
                }
            },
            username: 'a'
        });

        u.validate(error => {
            expect(error.errors.email).toBeTruthy();
        });
    });

    it('should invalidate if email is not a string', () => {
        [null, {}].forEach(email => {
            const u = new User({
                authentication: {
                    basic: {
                        username: 'a',
                        password: 'a'
                    }
                },
                email,
                username: 'a'
            });

            u.validate(error => {
                expect(error.errors.email).toBeTruthy();
            });
        });
    });

    it('should invalidate if username is undefined', () => {
        const u = new User({
            authentication: {
                basic: {
                    username: 'a',
                    password: 'a'
                }
            },
            email: 'a@a.com'
        });

        u.validate(error => {
            expect(error.errors.username).toBeTruthy();
        });
    });

    it('should invalidate if username is not a string', () => {
        [null, {}].forEach(username => {
            const u = new User({
                authentication: {
                    basic: {
                        username: 'a',
                        password: 'a'
                    }
                },
                email: 'a@a.com',
                username
            });

            u.validate(error => {
                expect(error.errors.username).toBeTruthy();
            });
        });
    });

    it('should validate if username and email are strings', () => {
        const u = new User({
            authentication: {
                basic: {
                    username: 'a',
                    password: 'a'
                }
            },
            email: 'a@a.com',
            username: 'a'
        });

        u.validate(error => expect(error).toBeNull());
    });

    it('should validate if username, email, and auth properties are strings', () => {
        const u = new User({
            authentication: {
                basic: {
                    username: 'a',
                    password: 'a'
                }
            },
            email: 'a@a.com',
            username: 'a'
        });

        u.validate(error => expect(error).toBeNull());
    });

    it('should invalidate if basic auth password is not a string', () => {
        [null, {}].forEach(password => {
            const u = new User({
                authentication: {
                    basic: {
                        username: 'a',
                        password
                    }
                },
                email: 'a@a.com',
                username: 'a'
            });

            u.validate(error => {
                expect(error.errors['authentication.basic.password']).toBeTruthy();
            });
        });
    });

    it('should invalidate if basic auth username is not a string', () => {
        [null, {}].forEach(username => {
            const u = new User({
                authentication: {
                    basic: {
                        username,
                        password: 'a'
                    }
                },
                email: 'a@a.com',
                username: 'a'
            });

            u.validate(error => {
                expect(error.errors['authentication.basic.username']).toBeTruthy();
            });
        });
    });
});