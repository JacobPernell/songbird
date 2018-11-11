'use strict';

const ENDPOINT_INPUT_SELECTOR = '#endpoint-input';
const ERROR_TEXT_CLASS = 'error-text';
const ERROR_TEXT_SELECTOR = `.${ERROR_TEXT_CLASS}`;
const INVALID_ENDPOINT = 'Endpoint is invalid.';
const REQUEST_URL = 'http://localhost:3000/';
const SELECT_SELECTOR = 'select';
const SEND_REQUEST_BUTTON_SELECTOR = '#send-request';
const VALID_ENDPOINTS = ['user'];
const VALIDATION_ERRORS_BLOCK_SELECTOR = '#validation-errors';

const clearErrorText = () => {
    const validationErrorsBlock = document.querySelector(VALIDATION_ERRORS_BLOCK_SELECTOR);

    if (validationErrorsBlock.children.length) {
        const errorText = document.querySelector(ERROR_TEXT_SELECTOR);

        validationErrorsBlock.removeChild(errorText);
    }
};

const createErrorElement = errorText => {
    const errorTextElement = document.createElement('span');

    errorTextElement.classList.add(ERROR_TEXT_CLASS);
    errorTextElement.textContent = errorText;

    document.querySelector(VALIDATION_ERRORS_BLOCK_SELECTOR).appendChild(errorTextElement);
};

const handleSend = e => {
    e.preventDefault();

    const method = document.querySelector(SELECT_SELECTOR).value;
    const endpoint = document.querySelector(ENDPOINT_INPUT_SELECTOR).value;

    if (inputIsValidEndpoint(endpoint)) {
        const url = REQUEST_URL + endpoint;

        clearErrorText();

        fetch(url, {
            method,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .catch(handleValidationErrors);
    }

    else {
        handleValidationErrors(INVALID_ENDPOINT);
    }
};

const handleValidationErrors = error => {
    clearErrorText();
    createErrorElement(error);
};

const inputIsValidEndpoint = input => {
    return VALID_ENDPOINTS.includes(input);
};

const button = document.querySelector(SEND_REQUEST_BUTTON_SELECTOR);

button.addEventListener('click', handleSend, false);