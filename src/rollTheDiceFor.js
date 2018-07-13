import random from 'lodash/random';

const rollTheDiceFor = (numberOfFaces) => () => {
    // 4
    // 6
    // 8
    // 10
    // 12
    // 20

    return random(1, numberOfFaces);
};

export default rollTheDiceFor;
