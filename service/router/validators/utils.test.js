'use strict';

const {
    acceptedCharactersValidator,
    fieldTypeValidator,
    gatherValidationErrors,
    lengthValidator,
    validationErrorHandler
} = require(__dirname + '/utils');

describe('acceptedCharactersValidator', () => {
    it('should return true if the input field matches the input regex', () => {
        expect(acceptedCharactersValidator('string0_-', /^[a-zA-Z0-9-_]+$/)).toBe(true);
    });

    it('should return false if the input field does not match the input regex', () => {
        expect(acceptedCharactersValidator('string0_-!', /^[a-zA-Z0-9-_]+$/)).toBe(false);
    });

    it('should return true if the input field matches the input regex', () => {
        expect(acceptedCharactersValidator(
            '1234567890qwertyuiopasdfghjklzxcvbnm-_!?;:!@#$%^&*()',
            /^[a-zA-Z0-9-_!?;:!@#$%^&*()]+$/
        )).toBe(true);
    });

    it('should return false if the input field does not match the input regex', () => {
        expect(acceptedCharactersValidator(
            '1234567890qwertyuiopasdfghjklzxcvbnm-_!?;:!@#$%^&*()`',
            /^[a-zA-Z0-9-_!?;:!@#$%^&*()]+$/
        )).toBe(false);
    });
});

describe('fieldTypeValidator', () => {
    it('should return true if the input field matches the input type', () => {
        expect(fieldTypeValidator('string', 'string')).toBe(true);
    });

    it('should return false if the input field does not match the input type', () => {
        expect(fieldTypeValidator('string', 'number')).toBe(false);
    });
});

describe('lengthValidator', () => {
    it('should return false if the field is shorter than the input minimum', () => {
        expect(lengthValidator('test', { MAX: 10, MIN: 5 })).toBe(false);
    });

    it('should return false if the field is longer than the input maximum', () => {
        expect(lengthValidator('test is long', { MAX: 10, MIN: 5 })).toBe(false);
    });

    it('should return true if the input field does not fall short of the minimum ' +
        'or exceed the maxmimum', () => {
        expect(lengthValidator('test', { MAX: 5, MIN: 3 })).toBe(true);
    });
});

describe('gatherValidationErrors', () => {
    it('should return a list of fields that have errored', () => {
        expect(JSON.stringify(gatherValidationErrors(
            'name',
            { handler: () => false, validatorName: 'test 1' },
            { handler: () => true, validatorName: 'test 2' },
            { handler: () => false, validatorName: 'test 3' }
        ))).toEqual(JSON.stringify([
            {
                handler: () => false,
                validatorName: 'test 1'
            },
            {
                handler: () => false,
                validatorName: 'test 3'
            }
        ]));
    });
});

describe.skip('validationErrorHandler', () => {
    it('should return a string of all validation error messages that have accumulated', () => {
        expect(validationErrorHandler([
            { message: 'error message 1' },
            { message: 'error message 2' },
            { message: 'error message 3' }
        ])).toEqual('error message 1\nerror message 2\nerror message 3');
    });
});
