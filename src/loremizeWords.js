// @flow
import range from 'lodash/range';
import getRandomWord from './helpers/getRandomWord';
import reduce from 'ramda/src/reduce';
import map from 'ramda/src/map';
import compose from 'ramda/src/compose';
import nAry from 'ramda/src/nAry';

const trimFirstDelimiter: Function = (delimiter: string) => (str: string) => {
    return str.substring(delimiter.length);
};

const loremizeWords: Function = (items: Array<string>, delimiter: string = ' ') => (numberOfWords: number, asArray: boolean = false) => {
    if (numberOfWords < 1) {
        return null;
    }

    const getRandomWordFromItems: Function = getRandomWord(items);

    const arrayMapper: Function = map(nAry(0, getRandomWordFromItems));
    const reducer: Function = reduce((acc: string, value: string) => `${acc}${delimiter}${getRandomWordFromItems()}`, '');

    const functor: Function = asArray ? arrayMapper : compose(trimFirstDelimiter(delimiter), reducer);

    return functor(range(numberOfWords));
};

export default loremizeWords;
