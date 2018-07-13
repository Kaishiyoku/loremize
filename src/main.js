import loremizeWords from './loremizeWords';
import loremizeIntegers from './loremizeIntegers';
import loremizeSentences from './loremizeSentences';
import loremIpsums from './loremIpsums';

const loremizeIpsum = loremizeWords(loremIpsums);

export {
    loremizeIntegers,
    loremizeSentences,
    loremizeIpsum,
};
