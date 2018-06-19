import loremizeIntegers from '../src/loremizeIntegers';
import isInteger from 'lodash/isInteger';

describe('loremizeIntegers', () => {
    it('should return random integers', () => {
        const min = 9;
        const max = 51;
        const numberOfIntegers = 100;

        loremizeIntegers(min, max, numberOfIntegers).forEach((value) => {
            expect(isInteger(value)).toBeTruthy();
            expect(value >= min).toBeTruthy();
            expect(value <= max).toBeTruthy();
        });
    });
});
