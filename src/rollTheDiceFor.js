// @flow
import random from 'lodash/random';

const rollTheDiceFor: Function = (numberOfFaces: number) => () => {
    return random(1, numberOfFaces);
};

export default rollTheDiceFor;
