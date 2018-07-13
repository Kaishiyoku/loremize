import range from 'lodash/range';
import {rollTheDice10, rollTheDice12, rollTheDice20, rollTheDice4, rollTheDice6, rollTheDice8} from '../src/main';
import rollTheDiceFor from '../src/rollTheDiceFor';

describe('rollTheDice', () => {
    it('should roll the dice accordingly', () => {
        const numberOfRolls = 1000;

        const rollTheDice3 = rollTheDiceFor(3);

        range(numberOfRolls).forEach(() => {
            expect(rollTheDice3()).toBeGreaterThanOrEqual(1);
            expect(rollTheDice3()).toBeLessThanOrEqual(3);

            expect(rollTheDice4()).toBeGreaterThanOrEqual(1);
            expect(rollTheDice4()).toBeLessThanOrEqual(4);

            expect(rollTheDice6()).toBeGreaterThanOrEqual(1);
            expect(rollTheDice6()).toBeLessThanOrEqual(6);

            expect(rollTheDice8()).toBeGreaterThanOrEqual(1);
            expect(rollTheDice8()).toBeLessThanOrEqual(8);

            expect(rollTheDice10()).toBeGreaterThanOrEqual(1);
            expect(rollTheDice10()).toBeLessThanOrEqual(10);

            expect(rollTheDice12()).toBeGreaterThanOrEqual(1);
            expect(rollTheDice12()).toBeLessThanOrEqual(12);

            expect(rollTheDice20()).toBeGreaterThanOrEqual(1);
            expect(rollTheDice20()).toBeLessThanOrEqual(20);
        });
    });
});
