import greekDeities from '../../src/data/greekDeities';
import loremIpsums from '../../src/data/loremIpsums';
import {loremizeGermanicDeities, loremizeGreekDeities, loremizeIpsums, loremizeIpsumSentences, loremizerRomanDeities} from '../../src/main';
import romanDeities from '../../src/data/romanDeities';
import germanicDeities from '../../src/data/germanicDieties';

const loremizers = [
    {
        data: loremIpsums,
        delimiter: ' ',
        sentencesFn: loremizeIpsumSentences,
        wordsFn: loremizeIpsums,
    },
    {
        data: greekDeities,
        delimiter: ', ',
        wordsFn: loremizeGreekDeities,
    },
    {
        data: romanDeities,
        delimiter: ', ',
        wordsFn: loremizerRomanDeities,
    },
    {
        data: germanicDeities,
        delimiter: ', ',
        wordsFn: loremizeGermanicDeities,
    },
];

export default loremizers;
