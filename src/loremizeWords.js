import range from 'lodash/range';
import getRandomWord from './helpers/getRandomWord';
import reduce from 'ramda/es/reduce';
import map from 'ramda/es/map';
import compose from 'ramda/es/compose';
import nAry from 'ramda/es/nAry';

const trimFirstDelimiter = (delimiter) => (str) => {
    return str.substring(delimiter.length);
};

const loremizeWords = (items, delimiter = ' ') => (numberOfWords, asArray = false) => {
    if (numberOfWords < 1) {
        return null;
    }

    const getRandomWordFromItems = getRandomWord(items);

    const arrayMapper = map(nAry(0, getRandomWordFromItems));
    const reducer = reduce((acc, value) => `${acc}${delimiter}${getRandomWordFromItems()}`, '');

    const functor = asArray ? arrayMapper : compose(trimFirstDelimiter(delimiter), reducer);

    return functor(range(numberOfWords));
};

export default loremizeWords;
