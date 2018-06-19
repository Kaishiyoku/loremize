import range from 'lodash/range';
import getRandomWord from './getRandomWord';
import reduce from 'ramda/es/reduce';
import trim from 'ramda/es/trim';

function loremize(numberOfWords) {
    if (numberOfWords < 1) {
        return null;
    }

    const reducer = reduce((acc, value) => `${acc} ${getRandomWord()}`, '');

    return trim(reducer(range(numberOfWords)));
}

export default loremize;
