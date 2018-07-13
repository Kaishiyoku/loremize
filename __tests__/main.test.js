import {loremizeIntegers, loremizeIpsumSentences, loremizeIpsum} from '../src/main';
import isFunction from 'lodash/isFunction';

describe('main', () => {
    it('should load the main functions', () => {
        expect(isFunction(loremizeIpsum)).toBeTruthy();
        expect(isFunction(loremizeIntegers)).toBeTruthy();
        expect(isFunction(loremizeIpsumSentences)).toBeTruthy();
    });
});
