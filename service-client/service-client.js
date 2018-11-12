'use strict';

const ENDPOINT_INPUT_SELECTOR = '#endpoint-input';
const ERROR_TEXT_CLASS = 'error-text';
const FEEDBACK_BLOCK_SELECTOR = '#feedback';
const FEEDBACK_ELEMENT_CLASS = 'feedback';
const FEEDBACK_ELEMENT_SELECTOR = `.${FEEDBACK_ELEMENT_CLASS}`;
const INVALID_ENDPOINT = 'Endpoint is invalid.';
const REQUEST_URL = 'http://localhost:3000/';
const RESPONSE_ELEMENT_CLASS = 'response';
const SELECT_SELECTOR = 'select';
const SEND_REQUEST_BUTTON_SELECTOR = '#send-request';
const SUCCESSFUL_RESPONSE = 'Request was successful.  Check the network tab for response details.';
const VALID_ENDPOINTS = ['api/sketches', 'user'];

const clearText = () => {
    const feedbackBlock = document.querySelector(FEEDBACK_BLOCK_SELECTOR);

    if (feedbackBlock.children.length) {
        const textElements = document.querySelector(FEEDBACK_ELEMENT_SELECTOR);

        feedbackBlock.removeChild(textElements);
    }
};

const createErrorElement = errorText => {
    const errorTextElement = document.createElement('span');

    elementCreationHandler(errorTextElement, errorText, ERROR_TEXT_CLASS);
};

const createResponseElement = responseText => {
    const responseTextElement = document.createElement('pre');

    elementCreationHandler(responseTextElement, responseText, RESPONSE_ELEMENT_CLASS);
};

const elementCreationHandler = (element, text, elementClass = '') => {
    element.classList.add(elementClass, FEEDBACK_ELEMENT_CLASS);
    element.textContent = text;

    document.querySelector(FEEDBACK_BLOCK_SELECTOR).appendChild(element);
};

const handleClick = e => {
    e.preventDefault();

    const method = document.querySelector(SELECT_SELECTOR).value;
    const endpoint = document.querySelector(ENDPOINT_INPUT_SELECTOR).value;

    if (inputIsValidEndpoint(endpoint)) {
        const url = REQUEST_URL + endpoint;

        clearText();
        REQUEST_MAP[method](url)
            .then(res => res.json())
            .then(createResponseElement(SUCCESSFUL_RESPONSE))
            .catch(handleValidationErrors);
    }

    else {
        handleValidationErrors(INVALID_ENDPOINT);
    }
};

const handleGET = url => {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        }
    });
};

const handlePOST = (url, body = '{}') => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(JSON.parse(body))
    });
};

const REQUEST_MAP = {
    GET: handleGET,
    POST: handlePOST
};

const handleValidationErrors = error => {
    clearText();
    createErrorElement(error);
};

const inputIsValidEndpoint = input => VALID_ENDPOINTS.includes(input);

const button = document.querySelector(SEND_REQUEST_BUTTON_SELECTOR);

button.addEventListener('click', handleClick, false);