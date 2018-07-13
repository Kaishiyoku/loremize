import loremizeIntegers from './loremizeIntegers';
import loremizeSentences from './loremizeSentences';
import loremizeWords from './loremizeWords';
import loremIpsums from './data/loremIpsums';
import greekDeities from './data/greekDeities';
import romanDeities from './data/romanDeities';
import germanicDeities from './data/germanicDieties';
import rollTheDiceFor from './rollTheDiceFor';

const loremizeIpsums = loremizeWords(loremIpsums);
const loremizeGreekDeities = loremizeWords(greekDeities, ', ');
const loremizerRomanDeities = loremizeWords(romanDeities, ', ');
const loremizeGermanicDeities = loremizeWords(germanicDeities, ', ');

const loremizeIpsumSentences = loremizeSentences(loremIpsums);

const rollTheDice4 = rollTheDiceFor(4);
const rollTheDice6 = rollTheDiceFor(6);
const rollTheDice8 = rollTheDiceFor(8);
const rollTheDice10 = rollTheDiceFor(10);
const rollTheDice12 = rollTheDiceFor(12);
const rollTheDice20 = rollTheDiceFor(20);

export {
    loremizeIntegers,

    loremizeIpsumSentences,
    loremizeIpsums,

    loremizeGreekDeities,

    loremizerRomanDeities,

    loremizeGermanicDeities,

    rollTheDice4,
    rollTheDice6,
    rollTheDice8,
    rollTheDice10,
    rollTheDice12,
    rollTheDice20,
};
