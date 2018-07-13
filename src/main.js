import loremizeIntegers from './loremizeIntegers';
import loremizeSentences from './loremizeSentences';
import loremizeWords from './loremizeWords';
import loremIpsums from './data/loremIpsums';
import greekDeities from './data/greekDeities';

const loremizeIpsums = loremizeWords(loremIpsums);
const loremizeGreekDeities = loremizeWords(greekDeities);

const loremizeIpsumSentences = loremizeSentences(loremIpsums);
const loremizeGreekDeitySentences = loremizeSentences(greekDeities);

export {
    loremizeIntegers,
    loremizeIpsumSentences,
    loremizeIpsums,
    loremizeGreekDeities,
    loremizeGreekDeitySentences,
};
