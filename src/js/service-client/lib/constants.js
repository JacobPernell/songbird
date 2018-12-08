import { handleGET, handlePOST } from './fetch-utils';

export const CREATE_USER_BUTTON_SELECTOR = '#create-user';
export const ENDPOINT_INPUT_SELECTOR = '#endpoint-input';
export const ERROR_TEXT_CLASS = 'error-text';
export const FEEDBACK_BLOCK_SELECTOR = '#feedback';
export const FEEDBACK_ELEMENT_CLASS = 'feedback';
export const FEEDBACK_ELEMENT_SELECTOR = `.${FEEDBACK_ELEMENT_CLASS}`;
export const INVALID_ENDPOINT = 'Endpoint is invalid.';
export const REQUEST_MAP = {
    GET: handleGET,
    POST: handlePOST
};
export const REQUEST_URL = 'http://localhost:3000/';
export const RESPONSE_ELEMENT_CLASS = 'response';
export const SELECT_SELECTOR = 'select';
export const SEND_REQUEST_BUTTON_SELECTOR = '#send-request';
export const SUCCESSFUL_RESPONSE = 'Request was successful.  ' +
    'Check the network tab for response details.';
export const TEXT_AREA_SELECTOR = '.service-client__form-textarea';
export const VALID_ENDPOINTS = ['api/sketches', 'users'];
