// @flow
import loremizeIntegers from './loremizeIntegers';
import loremizeSentences from './loremizeSentences';
import loremizeWords from './loremizeWords';
import loremIpsums from './data/loremIpsums';
import greekDeities from './data/greekDeities';
import romanDeities from './data/romanDeities';
import germanicDeities from './data/germanicDieties';
import rollTheDiceFor from './rollTheDiceFor';

const loremizeIpsums: Function = loremizeWords(loremIpsums);
const loremizeGreekDeities: Function = loremizeWords(greekDeities, ', ');
const loremizerRomanDeities: Function = loremizeWords(romanDeities, ', ');
const loremizeGermanicDeities: Function = loremizeWords(germanicDeities, ', ');

const loremizeIpsumSentences: Function = loremizeSentences(loremIpsums);

const rollTheDice4: Function = rollTheDiceFor(4);
const rollTheDice6: Function = rollTheDiceFor(6);
const rollTheDice8: Function = rollTheDiceFor(8);
const rollTheDice10: Function = rollTheDiceFor(10);
const rollTheDice12: Function = rollTheDiceFor(12);
const rollTheDice20: Function = rollTheDiceFor(20);

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
