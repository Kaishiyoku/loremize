import range from 'lodash/range';
import getRandomWord from '../src/getRandomWord';
import loremIpsums from '../src/data/loremIpsums';

describe('getRandomWord', () => {
    it('should return a random word', () => {
        const numberOfRuns = 1000;

        const getRandomIpsum = getRandomWord(loremIpsums);

        range(numberOfRuns).forEach(() => {
            expect(loremIpsums.includes(getRandomIpsum())).toBeTruthy();
        });
    });
});

