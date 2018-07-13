import loremizeWords from '../src/loremizeWords';
import loremIpsums from '../src/data/loremIpsums';
import isArray from 'lodash/isArray';

describe('loremizeWords', () => {
    const loremizeIpsums = loremizeWords(loremIpsums);

    it('should return the given number of words', () => {
        expect(loremIpsums.includes(loremizeIpsums(1))).toBeTruthy();

        loremizeIpsums(10).split(' ').forEach((value) => {
            expect(loremIpsums.includes(value)).toBeTruthy();
        });

        expect(loremizeIpsums(0)).toBeNull();
    });

    it('should return an array if wanted', () => {
        const loremWords = loremizeIpsums(1, true);

        expect(isArray(loremWords)).toBeTruthy();

        loremWords.forEach((word) => {
            expect(loremIpsums.includes(word)).toBeTruthy();
        });

        loremizeIpsums(10, true).forEach((value) => {
            expect(loremIpsums.includes(value)).toBeTruthy();
        });
    });
});
