
export class PasswordGenerator {
    constructor() {
        this._uppercaseLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
        this._lowercaseLetters = 'qwertyuiopasdfghjklzxcvbnm';
        this._numbers = '1234567890';
        this._symbols = '!@#$%^&*()_+/*-|?.,';
    }

    getUppercaseLetter() {
        const random = this.generateRandomNumberForMaxLength(this._uppercaseLetters.length);
        return this._uppercaseLetters[random - 1];
    }

    getLowercaseLetter() {
        const random = this.generateRandomNumberForMaxLength(this._lowercaseLetters.length);
        return this._lowercaseLetters[random - 1];
    }

    getNumber() {
        const random = this.generateRandomNumberForMaxLength(this._numbers.length);
        return this._numbers[random - 1];
    }

    getSymbol() {
        const random = this.generateRandomNumberForMaxLength(this._symbols.length);
        return this._symbols[random - 1];
    }

    generateX(options) {
        const symbolsArray = [];

        if (options.includesUppercaseLetters) {
            symbolsArray.push(this.getUppercaseLetter());
        }

        if (options.includesLowercaseLetters) {
            symbolsArray.push(this.getLowercaseLetter());
        }

        if (options.includesNumbers) {
            symbolsArray.push(this.getNumber());
        }

        if (options.includesSymbols) {
            symbolsArray.push(this.getSymbol());
        }
        const random = this.generateRandomNumberForMaxLength(symbolsArray.length);

        return symbolsArray[random - 1];
    }


    generateRandomNumberForMaxLength(maxLength) {
        return Math.floor((Math.random() * maxLength) + 1);
    }

    generatePassword(options) {
        let result = '';
        for (let i = 0; i < options.lengthPassword; i++) {
            result += this.generateX(options) || '';
        }

        return result;
    }
}
