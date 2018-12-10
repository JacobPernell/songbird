'use strict';

const {
    usernameCharactersValidator,
    usernameLengthValidator,
    usernameTypeValidator
} = require(__dirname + '/validators');

describe('usernameCharactersValidator', () => {
    it('should have a handler property', () => {
        expect(usernameCharactersValidator.handler).toBeTruthy();
    });

    it('should have a have a handler property of type "function"', () => {
        expect(typeof usernameCharactersValidator.handler).toBe('function');
    });

    it('should have a message property', () => {
        expect(usernameCharactersValidator.message).toBeTruthy();
    });

    it('should have a message property of type "string"', () => {
        expect(typeof usernameCharactersValidator.message).toBe('string');
    });

    it('should have a source property', () => {
        expect(usernameCharactersValidator.source).toBeTruthy();
    });

    it('should have a source property of type "object"', () => {
        expect(typeof usernameCharactersValidator.source).toBe('object');
    });
});

describe.skip('usernameLengthValidator', () => {
    it('should have a handler property', () => {
        expect(usernameLengthValidator.handler).toBeTruthy();
    });

    it('should have a have a handler property of type "function"', () => {
        expect(typeof usernameLengthValidator.handler).toBe('function');
    });

    it('should have a message property', () => {
        expect(usernameLengthValidator.message).toBeTruthy();
    });

    it('should have a message property of type "string"', () => {
        expect(typeof usernameLengthValidator.message).toBe('string');
    });

    it('should have a source property', () => {
        expect(usernameLengthValidator.source).toBeTruthy();
    });

    it('should have a source property of type "object"', () => {
        expect(typeof usernameLengthValidator.source).toBe('object');
    });
});

describe.skip('usernameTypeValidator', () => {
    it('should have a handler property', () => {
        expect(usernameTypeValidator.handler).toBeTruthy();
    });

    it('should have a have a handler property of type "function"', () => {
        expect(typeof usernameTypeValidator.handler).toBe('function');
    });

    it('should have a message property', () => {
        expect(usernameTypeValidator.message).toBeTruthy();
    });

    it('should have a message property of type "string"', () => {
        expect(typeof usernameTypeValidator.message).toBe('string');
    });

    it('should have a source property', () => {
        expect(usernameTypeValidator.source).toBeTruthy();
    });

    it('should have a source property of type "object"', () => {
        expect(typeof usernameTypeValidator.source).toBe('object');
    });
});
