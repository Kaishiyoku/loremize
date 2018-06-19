import map from 'ramda/es/map';
import range from 'lodash/range';
import nAry from 'ramda/es/nAry';
import random from 'lodash/random';
import loremizeWords from './loremizeWords';

function loremizeSentences(numberOfSentences, lowerBound, upperBound, asArray = false) {
    if (numberOfSentences < 1) {
        return null;
    }

    const sentencePopulator = () => loremizeWords(random(lowerBound, upperBound));
    const sentences = map(nAry(0, sentencePopulator), range(numberOfSentences));

    if (asArray) {
        return sentences;
    }

    return `${sentences.join('. ')}.`;
}

export default loremizeSentences;
