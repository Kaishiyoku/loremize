import greekDeities from '../../src/data/greekDeities';
import loremIpsums from '../../src/data/loremIpsums';
import {loremizeGreekDeities, loremizeGreekDeitySentences, loremizeIpsums, loremizeIpsumSentences} from '../../src/main';

const loremizers = [
    {
        data: loremIpsums,
        sentencesFn: loremizeIpsumSentences,
        wordsFn: loremizeIpsums,
    },
    {
        data: greekDeities,
        sentencesFn: loremizeGreekDeitySentences,
        wordsFn: loremizeGreekDeities,
    },
];

export default loremizers;
