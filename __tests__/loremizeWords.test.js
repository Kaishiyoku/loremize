import isArray from 'lodash/isArray';
import loremizers from './config/loremizers';

describe('loremizeWords', () => {
    it('should return the given number of words', () => {
        loremizers.forEach((loremizer) => {
            expect(loremizer.data.includes(loremizer.wordsFn(1))).toBeTruthy();

            loremizer.wordsFn(10).split(' ').forEach((value) => {
                expect(loremizer.data.includes(value)).toBeTruthy();
            });

            expect(loremizer.wordsFn(0)).toBeNull();
        });
    });

    it('should return an array if wanted', () => {
        loremizers.forEach((loremizer) => {
            const loremizerAsArray = loremizer.wordsFn(1, true);

            expect(isArray(loremizerAsArray)).toBeTruthy();

            loremizerAsArray.forEach((word) => {
                expect(loremizer.data.includes(word)).toBeTruthy();
            });

            loremizer.wordsFn(10, true).forEach((value) => {
                expect(loremizer.data.includes(value)).toBeTruthy();
            });
        });
    });
});
