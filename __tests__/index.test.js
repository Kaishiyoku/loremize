import {loremizeIntegers, loremizeSentences, loremizeWords} from '../src/index';
import isFunction from 'lodash/isFunction';

describe('index', () => {
    it('should load the main functions', () => {
        expect(isFunction(loremizeWords)).toBeTruthy();
        expect(isFunction(loremizeIntegers)).toBeTruthy();
        expect(isFunction(loremizeSentences)).toBeTruthy();
    });
});
