/**
 * @Method: Returns boolean isValid for FN Number.
 * @Param {string}
 * @Return {boolean}
 */
export function isValidFnNumber(value: string): boolean {
    const commercialRegisterNumberKeys: Map<number, string> = new Map([
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

    const weight = [6, 4, 14, 15, 10, 1];
    const validate = value.charAt(value.length - 1);
    const registerNumbers = Array.from(value.substr(0, value.length - 1)
        .replace(/\s/g, '')
        .replace('FN', ''));

    if (registerNumbers.length < 7) {
        registerNumbers.unshift('0');
    }

    let sum = 0;
    for (let i = 0; i < registerNumbers.length; i++) {
        sum += weight[i] * +registerNumbers[i];
    }
    return commercialRegisterNumberKeys.get(sum % 17) === validate;
}
