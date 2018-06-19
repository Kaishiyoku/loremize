import loremize from '../src/index';
import isFunction from 'lodash/isFunction';

describe('index', () => {
    it('should load the main function', () => {
        expect(isFunction(loremize)).toBeTruthy();
    });
});
