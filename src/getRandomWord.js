import random from 'lodash/random';
import words from './words';

export default function getRandomWord() {
    return words[random(0, words.length - 1)];
}
