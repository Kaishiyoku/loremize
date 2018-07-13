// @flow
import range from 'lodash/range';
import random from 'lodash/random';
import map from 'ramda/es/map';
import nAry from 'ramda/es/nAry';

function loremizeIntegers(min: number, max: number, numberOfIntegers: number): Array<number> {
    const mapper: Function = () => random(min, max);

    return map(nAry(0, mapper), range(numberOfIntegers));
}

export default loremizeIntegers;
