import {
    ENDPOINT_INPUT_SELECTOR,
    INVALID_ENDPOINT,
    REQUEST_MAP,
    REQUEST_URL,
    SELECT_SELECTOR,
    SUCCESSFUL_RESPONSE,
    TEXT_AREA_SELECTOR
} from './constants';
import { FIRST_NAMES } from './first-names';
import { clearText, createResponseElement } from './dom-utils';
import {
    generateNumber,
    handleValidationErrors,
    inputIsValidEndpoint,
    randomName
} from './utils';

export const createUser = e => {
    e.preventDefault();

    const body = formatUserData();
    const url = REQUEST_URL + 'users';

    sendGenericRequest('POST', { url, body });
};

const formatUserData = () => {
    const username = (randomName(FIRST_NAMES) + generateNumber()).substring(0, 19);
    const email = `${username}@email.com`;
    const password = 'hunter22';

    return {
        email,
        password,
        username
    };
};

export const generateRequestFromUI = e => {
    e.preventDefault();

    const method = document.querySelector(SELECT_SELECTOR).value;
    const endpoint = document.querySelector(ENDPOINT_INPUT_SELECTOR).value;
    const body = document.querySelector(TEXT_AREA_SELECTOR).value;

    if (inputIsValidEndpoint(endpoint)) {
        clearText();

        const url = REQUEST_URL + endpoint;
        const params = method === 'POST'
            ? { url, body }
            : { url };

        sendGenericRequest(method, params);
    }

    else {
        handleValidationErrors(INVALID_ENDPOINT);
    }
};

const sendGenericRequest = (method, params) => {
    REQUEST_MAP[method](params)
        .then(res => res.json())
        .then(createResponseElement(SUCCESSFUL_RESPONSE))
        .catch(handleValidationErrors);
};
