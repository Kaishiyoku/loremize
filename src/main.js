import loremizeIntegers from './loremizeIntegers';
import loremizeSentences from './loremizeSentences';
import loremizeWords from './loremizeWords';
import loremIpsums from './data/loremIpsums';

const loremizeIpsum = loremizeWords(loremIpsums);

const loremizeIpsumSentences = loremizeSentences(loremIpsums);

export {
    loremizeIntegers,
    loremizeIpsumSentences,
    loremizeIpsum,
};
