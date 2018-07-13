import range from 'lodash/range';
import getRandomWord from './helpers/getRandomWord';
import reduce from 'ramda/es/reduce';
import map from 'ramda/es/map';
import trim from 'ramda/es/trim';
import compose from 'ramda/es/compose';
import nAry from 'ramda/es/nAry';

const loremizeWords = (items) => (numberOfWords, asArray = false) => {
    if (numberOfWords < 1) {
        return null;
    }

    const getRandomWordFromItems = getRandomWord(items);

    const arrayMapper = map(nAry(0, getRandomWordFromItems));
    const reducer = reduce((acc, value) => `${acc} ${getRandomWordFromItems()}`, '');
    const functor = asArray ? arrayMapper : compose(trim, reducer);

    return functor(range(numberOfWords));
};

export default loremizeWords;
