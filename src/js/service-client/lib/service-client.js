import {
    ENDPOINT_INPUT_SELECTOR,
    INVALID_ENDPOINT,
    REQUEST_MAP,
    REQUEST_URL,
    SELECT_SELECTOR,
    SUCCESSFUL_RESPONSE
} from './constants';
import { clearText, createResponseElement } from './dom-utils';
import { handleValidationErrors, inputIsValidEndpoint } from './utils';

export const handleClick = e => {
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