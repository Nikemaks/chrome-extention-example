import { PasswordGenerator } from './password-ganerator.js';

document.addEventListener('DOMContentLoaded', () => {

    const generatePasswordBtn = document.querySelector('.generate-password-btn');
    const passwordGeneratorInput = document.querySelector('.password-generator');

    const passwordLengthInput = document.querySelector('.password-length');
    const includesUppercaseLettersCheckbox = document.querySelector('.includesUppercaseLetters');
    const includesLowercaseLettersCheckbox = document.querySelector('.includesLowercaseLetters');
    const includesNumbersCheckbox = document.querySelector('.includesNumbers');
    const includesSymbolsCheckbox = document.querySelector('.includesSymbols');


    generatePasswordBtn.addEventListener('click', e => {
        const options = getPasswordOption();
        const passwordGenerator = new PasswordGenerator();
        const password = passwordGenerator.generatePassword(options);

        printPassword(password);

    });

    function printPassword(value) {
        passwordGeneratorInput.value = value;
    }

    function getPasswordOption() {
        return {
            lengthPassword: +passwordLengthInput.value,
            includesUppercaseLetters: includesUppercaseLettersCheckbox.checked,
            includesLowercaseLetters: includesLowercaseLettersCheckbox.checked,
            includesNumbers: includesNumbersCheckbox.checked,
            includesSymbols: includesSymbolsCheckbox.checked
        }
    }
});
