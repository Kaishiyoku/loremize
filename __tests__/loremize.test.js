import loremize from '../src/loremize';
import words from '../src/words';

describe('loremize', () => {
    it('should return the given number of words', () => {
        expect(words.includes(loremize(1))).toBeTruthy();

        loremize(10).split(' ').forEach((value) => {
            expect(words.includes(value)).toBeTruthy();
        });

        expect(loremize(0)).toBeNull();
    });
});
