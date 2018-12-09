import {
    ERROR_TEXT_CLASS,
    FEEDBACK_BLOCK_SELECTOR,
    FEEDBACK_ELEMENT_CLASS,
    FEEDBACK_ELEMENT_SELECTOR,
    RESPONSE_ELEMENT_CLASS
} from './constants';

export const clearText = () => {
    const feedbackBlock = document.querySelector(FEEDBACK_BLOCK_SELECTOR);

    if (feedbackBlock.children.length) {
        const textElements = document.querySelector(FEEDBACK_ELEMENT_SELECTOR);

        feedbackBlock.removeChild(textElements);
    }
};

export const createErrorElement = errorText => {
    const errorTextElement = document.createElement('span');

    elementCreationHandler(errorTextElement, errorText, ERROR_TEXT_CLASS);
};

export const createResponseElement = responseText => {
    const responseTextElement = document.createElement('pre');

    elementCreationHandler(responseTextElement, responseText, RESPONSE_ELEMENT_CLASS);
};

const elementCreationHandler = (element, text, elementClass = '') => {
    element.classList.add(elementClass, FEEDBACK_ELEMENT_CLASS);
    element.textContent = text;

    document.querySelector(FEEDBACK_BLOCK_SELECTOR).appendChild(element);
};