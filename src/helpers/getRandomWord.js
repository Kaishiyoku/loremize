import random from 'lodash/random';

const getRandomWord = (items) => () => {
    return items[random(0, items.length - 1)];
};

export default getRandomWord;
