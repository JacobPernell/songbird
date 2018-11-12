import { SEND_REQUEST_BUTTON_SELECTOR } from './lib/constants';
import { handleClick } from './lib/service-client';

const button = document.querySelector(SEND_REQUEST_BUTTON_SELECTOR);

button.addEventListener('click', handleClick, false);