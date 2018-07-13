import {loremizeGreekDeities, loremizeIntegers, loremizeIpsums, loremizeIpsumSentences, loremizerRomanDeities, loremizeGermanicDeities} from '../src/main';
import isFunction from 'lodash/isFunction';

describe('main', () => {
    it('should load the main functions', () => {
        expect(isFunction(loremizeIntegers)).toBeTruthy();

        expect(isFunction(loremizeIpsums)).toBeTruthy();
        expect(isFunction(loremizeIpsumSentences)).toBeTruthy();

        expect(isFunction(loremizeGreekDeities)).toBeTruthy();

        expect(isFunction(loremizerRomanDeities)).toBeTruthy();

        expect(isFunction(loremizeGermanicDeities)).toBeTruthy();
    });
});
