import {
    ENDPOINT_INPUT_SELECTOR,
    INVALID_ENDPOINT,
    REQUEST_MAP,
    REQUEST_URL,
    SELECT_SELECTOR,
    SUCCESSFUL_RESPONSE,
    TEXT_AREA_SELECTOR
} from './constants';
import { clearText, createResponseElement } from './dom-utils';
import { handleValidationErrors, inputIsValidEndpoint } from './utils';

export const handleClick = e => {
    e.preventDefault();

    const method = document.querySelector(SELECT_SELECTOR).value;
    const endpoint = document.querySelector(ENDPOINT_INPUT_SELECTOR).value;
    const body = document.querySelector(TEXT_AREA_SELECTOR).value;

    if (inputIsValidEndpoint(endpoint)) {
        const url = REQUEST_URL + endpoint;
        const params = method === 'POST'
            ? { url, body }
            : { url };

        clearText();
        REQUEST_MAP[method](params)
            .then(res => res.json())
            .then(createResponseElement(SUCCESSFUL_RESPONSE))
            .catch(handleValidationErrors);
    }

    else {
        handleValidationErrors(INVALID_ENDPOINT);
    }
};
