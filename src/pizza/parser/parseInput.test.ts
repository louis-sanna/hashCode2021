import { parseInput } from './parseInput';
import { expect } from 'chai';

describe('parseInput', () => {
    it('should return the parsed input', () => {
        const parsedInput = parseInput('A');

        expect(parsedInput).to.deep.equal({
            numberOfTwoPersonTeams: 1,
            numberOfThreePersonTeams: 2,
            numberOfFourPersonTeams: 1,
            pizzas: [
                { ingredients: ['onion', 'pepper', 'olive'] },
                { ingredients: ['mushroom', 'tomato', 'basil'] },
                { ingredients: ['chicken', 'mushroom', 'pepper'] },
                { ingredients: ['tomato', 'mushroom', 'basil'] },
                { ingredients: ['chicken', 'basil'] },
            ]
        });
    });
});
