import loremize from '../src/loremize';
import words from '../src/words';

describe('loremize', () => {
    it('should return the given number of words', () => {
        console.log('--->'+ loremize(1) + '<--');

        expect(words.includes(loremize(1))).toBeTruthy();
    });
});
