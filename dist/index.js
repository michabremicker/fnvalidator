"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Method: Returns boolean isValid for FN Number.
 * @Param {string}
 * @Return {boolean}
 */
function isValidFnNumber(value) {
    var commercialRegisterNumberKeys = new Map([
        [0, 'A'],
        [1, 'B'],
        [2, 'D'],
        [3, 'F'],
        [4, 'G'],
        [5, 'H'],
        [6, 'I'],
        [7, 'K'],
        [8, 'M'],
        [9, 'P'],
        [10, 'S'],
        [11, 'T'],
        [12, 'V'],
        [13, 'W'],
        [14, 'X'],
        [15, 'Y'],
        [16, 'Z']
    ]);
    var weight = [6, 4, 14, 15, 10, 1];
    var validate = value.charAt(value.length - 1);
    var registerNumbers = Array.from(value.substr(0, value.length - 1)
        .replace(/\s/g, '')
        .replace('FN', ''));
    if (registerNumbers.length < 6) {
        registerNumbers.unshift('0');
    }
    var sum = 0;
    for (var i = 0; i < registerNumbers.length; i++) {
        sum += weight[i] * +registerNumbers[i];
    }
    return commercialRegisterNumberKeys.get(sum % 17) === validate;
}
exports.isValidFnNumber = isValidFnNumber;
