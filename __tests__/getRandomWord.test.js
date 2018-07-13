import range from 'lodash/range';
import getRandomWord from '../src/helpers/getRandomWord';
import loremizers from './config/loremizers';

describe('getRandomWord', () => {
    it('should return a random word', () => {
        const numberOfRuns = 1000;

        loremizers.forEach((loremizer) => {
            range(numberOfRuns).forEach(() => {
                const getRandomWordForCurrentLoremizer = getRandomWord(loremizer.data);

                expect(loremizer.data.includes(getRandomWordForCurrentLoremizer())).toBeTruthy();
            });
        });
    });
});
