// @flow
import map from 'ramda/es/map';
import range from 'lodash/range';
import nAry from 'ramda/es/nAry';
import random from 'lodash/random';
import loremizeWords from './loremizeWords';

const loremizeSentences: Function = (items: Array<string>): Function => (numberOfSentences: number, lowerBound: number, upperBound: number, asArray: boolean = false) => {
    if (numberOfSentences < 1) {
        return null;
    }

    const loremizer: Function = loremizeWords(items);

    const sentencePopulator: Function = (): Function => loremizer(random(lowerBound, upperBound));
    const sentences: Function = map(nAry(0, sentencePopulator), range(numberOfSentences));

    if (asArray) {
        return sentences;
    }

    return `${sentences.join('. ')}.`;
};

export default loremizeSentences;
