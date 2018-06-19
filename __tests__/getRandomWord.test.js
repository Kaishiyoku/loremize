import range from 'lodash/range';
import getRandomWord from '../src/getRandomWord';
import words from '../src/words';

describe('getRandomWord', () => {
    it('should return a random word', () => {
        const numberOfRuns = 1000;

        range(numberOfRuns).forEach(() => {
            expect(words.includes(getRandomWord())).toBeTruthy();
        });
    });
});

