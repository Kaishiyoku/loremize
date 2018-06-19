import range from 'lodash/range';
import getRandomWord from './getRandomWord';
import reduce from 'ramda/es/reduce';
import map from 'ramda/es/map';
import trim from 'ramda/es/trim';
import compose from 'ramda/es/compose';
import nAry from 'ramda/es/nAry';

function loremizeWords(numberOfWords, asArray = false) {
    if (numberOfWords < 1) {
        return null;
    }

    const arrayMapper = map(nAry(0, getRandomWord));
    const reducer = reduce((acc, value) => `${acc} ${getRandomWord()}`, '');
    const functor = asArray ? arrayMapper : compose(trim, reducer);

    return functor(range(numberOfWords));
}

export default loremizeWords;
