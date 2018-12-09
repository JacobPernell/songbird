import { handleValidationErrors, inputIsValidEndpoint } from './utils';
import * as domUtilsMock from './dom-utils';

jest.mock('./dom-utils', () => ({
    clearText: jest.fn(),
    createErrorElement: jest.fn()
}));

describe('handleValidationErrors', () => {
    afterEach(() => {
        domUtilsMock.clearText.mockReset();
        domUtilsMock.createErrorElement.mockReset();
    });

    it('should fire clearText when called', () => {
        const clearTextSpy = jest.spyOn(domUtilsMock, 'clearText');

        handleValidationErrors('test error');

        expect(clearTextSpy).toHaveBeenCalled();
    });

    it('should fire createErrorElement with an expected argument', () => {
        const createErrorElementSpy = jest.spyOn(domUtilsMock, 'createErrorElement');

        handleValidationErrors('test error');

        expect(createErrorElementSpy).toHaveBeenCalledWith('test error');
    });
});

describe('inputIsValidEndpoint', () => {
    it('should return true if the input matches a route', () => {
        ['users', 'api/sketches'].forEach(route => expect(inputIsValidEndpoint(route)).toBe(true));
    });

    it('should return false if the input does not match a route', () => {
        ['', 'sketches', null].forEach(route => expect(inputIsValidEndpoint(route)).toBe(false));
    });
});
