import loremizeWords from '../src/loremizeWords';
import words from '../src/words';
import isArray from 'lodash/isArray';

describe('loremizeWords', () => {
    it('should return the given number of words', () => {
        expect(words.includes(loremizeWords(1))).toBeTruthy();

        loremizeWords(10).split(' ').forEach((value) => {
            expect(words.includes(value)).toBeTruthy();
        });

        expect(loremizeWords(0)).toBeNull();
    });

    it('should return an array if wanted', () => {
        const loremWords = loremizeWords(1, true);

        expect(isArray(loremWords)).toBeTruthy();

        loremWords.forEach((word) => {
            expect(words.includes(word)).toBeTruthy();
        });

        loremizeWords(10, true).forEach((value) => {
            expect(words.includes(value)).toBeTruthy();
        });
    });
});
