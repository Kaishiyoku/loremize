import range from 'lodash/range';
import getRandomWord from './getRandomWord';

function loremize(numberOfWords) {
    return range(numberOfWords).reduce((acc, value) => `${acc} ${getRandomWord()}`);
}

export default loremize;
