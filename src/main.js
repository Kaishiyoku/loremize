import loremizeIntegers from './loremizeIntegers';
import loremizeSentences from './loremizeSentences';
import loremizeWords from './loremizeWords';
import loremIpsums from './data/loremIpsums';
import greekDeities from './data/greekDeities';
import romanDeities from './data/romanDeities';
import germanicDeities from './data/germanicDieties';

const loremizeIpsums = loremizeWords(loremIpsums);
const loremizeGreekDeities = loremizeWords(greekDeities, ', ');
const loremizerRomanDeities = loremizeWords(romanDeities, ', ');
const loremizeGermanicDeities = loremizeWords(germanicDeities, ', ');

const loremizeIpsumSentences = loremizeSentences(loremIpsums);

export {
    loremizeIntegers,

    loremizeIpsumSentences,
    loremizeIpsums,

    loremizeGreekDeities,

    loremizerRomanDeities,

    loremizeGermanicDeities,
};
