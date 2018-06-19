import loremizeWords from '../src/loremizeWords';
import words from '../src/words';

describe('loremizeWords', () => {
    it('should return the given number of words', () => {
        expect(words.includes(loremizeWords(1))).toBeTruthy();

        loremizeWords(10).split(' ').forEach((value) => {
            expect(words.includes(value)).toBeTruthy();
        });

        expect(loremizeWords(0)).toBeNull();
    });
});
