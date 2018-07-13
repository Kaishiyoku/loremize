import greekDeities from '../../src/data/greekDeities';
import loremIpsums from '../../src/data/loremIpsums';
import {loremizeGreekDeities, loremizeIpsums, loremizeIpsumSentences, loremizerRomanDeities} from '../../src/main';
import romanDeities from '../../src/data/romanDeities';

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
];

export default loremizers;
