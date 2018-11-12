import { VALID_ENDPOINTS } from './constants';
import { clearText, createErrorElement } from './dom-utils';

export const handleValidationErrors = error => {
    clearText();
    createErrorElement(error);
};

export const inputIsValidEndpoint = input => VALID_ENDPOINTS.includes(input);