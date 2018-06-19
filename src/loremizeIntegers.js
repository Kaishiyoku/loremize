import range from 'lodash/range';
import random from 'lodash/random';

function loremizeIntegers(min, max, numberOfIntegers) {
    return range(numberOfIntegers).map((value) => random(min, max));
}

export default loremizeIntegers;
