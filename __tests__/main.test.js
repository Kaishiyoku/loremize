import {loremizeGreekDeities, loremizeIntegers, loremizeIpsums, loremizeIpsumSentences, loremizerRomanDeities, loremizeGermanicDeities, rollTheDice4, rollTheDice6, rollTheDice8, rollTheDice10, rollTheDice12, rollTheDice20} from '../src/main';
import isFunction from 'lodash/isFunction';

describe('main', () => {
    it('should load the main functions', () => {
        expect(isFunction(loremizeIntegers)).toBeTruthy();

        expect(isFunction(loremizeIpsums)).toBeTruthy();
        expect(isFunction(loremizeIpsumSentences)).toBeTruthy();

        expect(isFunction(loremizeGreekDeities)).toBeTruthy();

        expect(isFunction(loremizerRomanDeities)).toBeTruthy();

        expect(isFunction(loremizeGermanicDeities)).toBeTruthy();

        expect(isFunction(rollTheDice4)).toBeTruthy();
        expect(isFunction(rollTheDice6)).toBeTruthy();
        expect(isFunction(rollTheDice8)).toBeTruthy();
        expect(isFunction(rollTheDice10)).toBeTruthy();
        expect(isFunction(rollTheDice12)).toBeTruthy();
        expect(isFunction(rollTheDice20)).toBeTruthy();
    });
});
