import {loremizeWords} from '../src/index';
import isFunction from 'lodash/isFunction';

describe('index', () => {
    it('should load the main functions', () => {
        expect(isFunction(loremizeWords)).toBeTruthy();
    });
});
