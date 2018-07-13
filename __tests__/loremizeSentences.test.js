import loremizeSentences from '../src/loremizeSentences';
import isArray from 'lodash/isArray';
import loremizers from './config/loremizers';

describe('loremizeSentences', () => {
    it('should return some sentences', () => {
        const filterSentenceArr = (arr) => arr.filter((value) => value !== '');

        const numberOfSentences = 3;
        const lowerBound = 5;
        const upperBound = 9;

        loremizers.forEach((loremizer) => {
            const loremSentences = loremizer.sentencesFn(numberOfSentences, lowerBound, upperBound);
            const loremSentenceArr = filterSentenceArr(loremSentences.split(/\. |\./));
            const loremWords = filterSentenceArr(loremSentences.replace(/\. |\./g, ' ').split(' '));

            expect(loremSentenceArr.length).toEqual(numberOfSentences);
            loremSentenceArr.forEach((sentence) => {
                const sentenceLength = sentence.split(' ').length;

                expect(sentenceLength >= lowerBound).toBeTruthy();
                expect(sentenceLength <= upperBound).toBeTruthy();
            });

            loremWords.forEach((word) => {
                expect(loremizer.data.includes(word)).toBeTruthy();
            });

            expect(loremizer.sentencesFn(0)).toBeNull();
        });
    });

    it('should return an array if wanted', () => {
        loremizers.forEach((loremizer) => {
            const loremSentences = loremizer.sentencesFn(5, 2, 12, true);

            expect(isArray(loremSentences)).toBeTruthy();

            const loremWords = loremSentences.join(' ').split(' ').filter((value) => value !== '');

            loremWords.forEach((word) => {
                expect(loremizer.data.includes(word)).toBeTruthy();
            });
        });
    });
});
