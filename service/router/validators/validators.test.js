'use strict';

const {
    emailCharactersValidator,
    emailTypeValidator,
    passwordCharactersValidator,
    passwordLengthValidator,
    passwordTypeValidator,
    usernameCharactersValidator,
    usernameLengthValidator,
    usernameTypeValidator
} = require(__dirname + '/validators');

describe('emailCharactersValidator', () => {
    it('should have a handler property', () => {
        expect(emailCharactersValidator.handler).toBeTruthy();
    });

    it('should have a have a handler property of type "function"', () => {
        expect(typeof emailCharactersValidator.handler).toBe('function');
    });

    it('should have a message property', () => {
        expect(emailCharactersValidator.message).toBeTruthy();
    });

    it('should have a message property of type "string"', () => {
        expect(typeof emailCharactersValidator.message).toBe('string');
    });

    it('should have a source property', () => {
        expect(emailCharactersValidator.source).toBeTruthy();
    });

    it('should have a source property of type "object"', () => {
        expect(typeof emailCharactersValidator.source).toBe('object');
    });
});

describe('emailTypeValidator', () => {
    it('should have a handler property', () => {
        expect(emailTypeValidator.handler).toBeTruthy();
    });

    it('should have a have a handler property of type "function"', () => {
        expect(typeof emailTypeValidator.handler).toBe('function');
    });

    it('should have a message property', () => {
        expect(emailTypeValidator.message).toBeTruthy();
    });

    it('should have a message property of type "string"', () => {
        expect(typeof emailTypeValidator.message).toBe('string');
    });

    it('should have a source property', () => {
        expect(emailTypeValidator.source).toBeTruthy();
    });

    it('should have a source property of type "string"', () => {
        expect(typeof emailTypeValidator.source).toBe('string');
    });
});

describe('passwordCharactersValidator', () => {
    it('should have a handler property', () => {
        expect(passwordCharactersValidator.handler).toBeTruthy();
    });

    it('should have a have a handler property of type "function"', () => {
        expect(typeof passwordCharactersValidator.handler).toBe('function');
    });

    it('should have a message property', () => {
        expect(passwordCharactersValidator.message).toBeTruthy();
    });

    it('should have a message property of type "string"', () => {
        expect(typeof passwordCharactersValidator.message).toBe('string');
    });

    it('should have a source property', () => {
        expect(passwordCharactersValidator.source).toBeTruthy();
    });

    it('should have a source property of type "object"', () => {
        expect(typeof passwordCharactersValidator.source).toBe('object');
    });
});

describe('passwordLengthValidator', () => {
    it('should have a handler property', () => {
        expect(passwordLengthValidator.handler).toBeTruthy();
    });

    it('should have a have a handler property of type "function"', () => {
        expect(typeof passwordLengthValidator.handler).toBe('function');
    });

    it('should have a message property', () => {
        expect(passwordLengthValidator.message).toBeTruthy();
    });

    it('should have a message property of type "string"', () => {
        expect(typeof passwordLengthValidator.message).toBe('string');
    });

    it('should have a source property', () => {
        expect(passwordLengthValidator.source).toBeTruthy();
    });

    it('should have a source property of type "object"', () => {
        expect(typeof passwordLengthValidator.source).toBe('object');
    });
});

describe('passwordTypeValidator', () => {
    it('should have a handler property', () => {
        expect(passwordTypeValidator.handler).toBeTruthy();
    });

    it('should have a have a handler property of type "function"', () => {
        expect(typeof passwordTypeValidator.handler).toBe('function');
    });

    it('should have a message property', () => {
        expect(passwordTypeValidator.message).toBeTruthy();
    });

    it('should have a message property of type "string"', () => {
        expect(typeof passwordTypeValidator.message).toBe('string');
    });

    it('should have a source property', () => {
        expect(passwordTypeValidator.source).toBeTruthy();
    });

    it('should have a source property of type "string"', () => {
        expect(typeof passwordTypeValidator.source).toBe('string');
    });
});

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

describe('usernameLengthValidator', () => {
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

describe('usernameTypeValidator', () => {
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
        expect(typeof usernameTypeValidator.source).toBe('string');
    });
});
