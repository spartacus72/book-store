var assert = require('assert');
var calculateBookCost = require('./calculateBookCost.js');

describe('Books', function() {
    describe('#cost', function() {
        it('should return 0 for empty array', function() {
            assert.equal(calculateBookCost(), 0);           
        });
        
        it('should return 0 when there are no books present', function() {         
            assert.equal(calculateBookCost([]), 0);
        });

        it('1 book should cost 8', function () {
            assert.equal(calculateBookCost([1]), 8);
        });

        it('2 of the same book costs 16', function() {
            const expectedResult =  2 * 8;
            assert.equal(calculateBookCost([1, 1]), expectedResult);
        });
        
        it('2 different books should give a 5% discount', function() {
            const expectedResult =  2 * 8 * (1 - 0.05);
            assert.equal(calculateBookCost([1, 2]), expectedResult);
        });

        it('3 different books should give a 10% discount', function() {
            const expectedResult =  3 * 8 * (1 - 0.10);
            assert.equal(calculateBookCost([1, 2, 3]), expectedResult);
        });

        it('4 different books should give a 20% discount', function() {
            const expectedResult =  4 * 8 * (1 - 0.20);
            assert.equal(calculateBookCost([1, 2, 3, 4]), expectedResult);
        });

        it('4 books, 3 of which are different titles should give 10% discount for 3 of the 4 books', function() {
            const expectedResult =  (3 * 8 * 0.9) + 8;
            assert.equal(calculateBookCost([1, 2, 3, 1]), expectedResult);
        });
        
        it('5 different books should give a 25% discount', function() {
            const expectedResult =  5 * 8 * (1 - 0.25);
            assert.equal(calculateBookCost([1, 2, 3, 4, 5]), expectedResult);
        });

        it('bundle of 8 books should cost 51.60', function() {
            const expectedResult =  5 * 8 * (1 - 0.25) + 3 * 8 * (1 - 0.10);
            assert.equal(calculateBookCost([1, 1, 2, 2, 3, 3, 4, 5]), expectedResult)
        });
    })
})