'use strict';
const expect = require('chai').expect;
const index = require('../dist/index.js');

describe('isValidFnTest', () => {
    it('should validate valid FN-Numbers', () => {
        expect(index.isValidFnNumber('92754D')).to.equal(true);
        expect(index.isValidFnNumber('FN 92754 D')).to.equal(true);
        expect(index.isValidFnNumber('FN 092754 D')).to.equal(true);
        expect(index.isValidFnNumber('12345F')).to.equal(true);
        expect(index.isValidFnNumber('FN 12345 F')).to.equal(true);
        expect(index.isValidFnNumber('FN 012345 F')).to.equal(true);
    });
    it('should invalidate invalid FN-Numbers', () => {
        expect(index.isValidFnNumber('12345D')).to.equal(false);
        expect(index.isValidFnNumber('92754 C')).to.equal(false);
    });
});
