import loremizeSentences from '../src/loremizeSentences';
import words from '../src/words';
import isArray from 'lodash/isArray';

describe('loremizeSentences', () => {
    it('should return some sentences', () => {
        const filterSentenceArr = (arr) => arr.filter((value) => value !== '');

        const numberOfSentences = 3;
        const lowerBound = 5;
        const upperBound = 9;

        const loremSentences = loremizeSentences(numberOfSentences, lowerBound, upperBound);
        const loremSentenceArr = filterSentenceArr(loremSentences.split(/\. |\./));
        const loremWords = filterSentenceArr(loremSentences.replace(/\. |\./g, ' ').split(' '));

        expect(loremSentenceArr.length).toEqual(numberOfSentences);
        loremSentenceArr.forEach((sentence) => {
            const sentenceLength = sentence.split(' ').length;

            expect(sentenceLength >= lowerBound).toBeTruthy();
            expect(sentenceLength <= upperBound).toBeTruthy();
        });

        loremWords.forEach((word) => {
            expect(words.includes(word)).toBeTruthy();
        });

        expect(loremizeSentences(0)).toBeNull();
    });

    it('should return an array if wanted', () => {
        const loremSentences = loremizeSentences(5, 2, 12, true);

        expect(isArray(loremSentences)).toBeTruthy();

        const loremWords = loremSentences.join(' ').split(' ').filter((value) => value !== '');

        loremWords.forEach((word) => {
            expect(words.includes(word)).toBeTruthy();
        });
    });
});
