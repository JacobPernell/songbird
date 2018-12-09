import { clearText, createErrorElement } from './dom-utils';
import { VALID_ENDPOINTS } from './constants';

export const generateNumber = () => new Date().getTime();

export const handleValidationErrors = error => {
    clearText();
    createErrorElement(error);
};

export const inputIsValidEndpoint = input => VALID_ENDPOINTS.includes(input);

export const randomName = names => names[Math.floor(Math.random() * names.length)];
