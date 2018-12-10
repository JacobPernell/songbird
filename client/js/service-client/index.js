import {
    CREATE_USER_BUTTON_SELECTOR,
    SEND_REQUEST_BUTTON_SELECTOR
} from './lib/constants';
import { createUser, generateRequestFromUI } from './lib/service-client';

const createUserButton = document.querySelector(CREATE_USER_BUTTON_SELECTOR);
const sendRequestButton = document.querySelector(SEND_REQUEST_BUTTON_SELECTOR);

createUserButton.addEventListener('click', createUser, false);
sendRequestButton.addEventListener('click', generateRequestFromUI, false);
