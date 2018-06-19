import range from 'lodash/range';
import getRandomWord from './getRandomWord';
import trim from 'ramda/es/trim';

function loremize(numberOfWords) {
    return trim(range(numberOfWords).reduce((acc, value) => `${acc} ${getRandomWord()}`, ''));
}

export default loremize;
