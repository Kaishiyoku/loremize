// @flow
import random from 'lodash/random';

const getRandomWord: Function = (items: Array<string>): Function => (): string => {
    return items[random(0, items.length - 1)];
};

export default getRandomWord;
