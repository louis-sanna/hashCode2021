import { score } from './score';
import { expect } from 'chai';

describe('score', () => {
    it('should return 0 if no delivery is made', () => {
        const input = {
            numberOfTwoPersonTeams: 1,
            numberOfThreePersonTeams: 1,
            numberOfFourPersonTeams: 1,
            pizzas: [
                { ingredients: ['onion', 'tomatoes'] },
                { ingredients: ['onion', 'cheese'] },
                { ingredients: ['mushroom'] }
            ]
        };
        const submission = {
            numberOfPizza: 0,
            deliveries: []
        };

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(0);
    });
    it('should return 4 (2 squared) if two distinct ingredients are delivered to a team', () => {
        const input = {
            numberOfTwoPersonTeams: 1,
            numberOfThreePersonTeams: 1,
            numberOfFourPersonTeams: 1,
            pizzas: [
                { ingredients: ['onion', 'tomatoes'] },
                { ingredients: ['onion', 'tomatoes'] },
                { ingredients: ['onion', 'cheese'] },
                { ingredients: ['mushroom'] }

            ]
        };
        const submission = {
            numberOfPizza: 0,
            deliveries: [{ pizzaIndexes: [0, 1] }]
        };

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(2*2);
    });
    it('should add the score of two deliveries', () => {
        const input = {
            numberOfTwoPersonTeams: 2,
            numberOfThreePersonTeams: 1,
            numberOfFourPersonTeams: 1,
            pizzas: [
                { ingredients: ['onion', 'tomatoes'] },
                { ingredients: ['onion', 'tomatoes'] },
                { ingredients: ['onion', 'tomatoes'] },
                { ingredients: ['onion', 'tomatoes'] },

            ]
        };
        const submission = {
            numberOfPizza: 0,
            deliveries: [
                { pizzaIndexes: [0, 1] },
                { pizzaIndexes: [2, 3] }
            ]
        };

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(2*2 + 2*2);
    });
    it('should not count the same ingredient twice', () => {
        const input = {
            numberOfTwoPersonTeams: 2,
            numberOfThreePersonTeams: 1,
            numberOfFourPersonTeams: 1,
            pizzas: [
                { ingredients: ['tomatoes', 'tomatoes'] },
                { ingredients: ['tomatoes', 'tomatoes'] },
                { ingredients: ['tomatoes', 'tomatoes'] },
                { ingredients: ['tomatoes', 'tomatoes'] },

            ]
        };
        const submission = {
            numberOfPizza: 0,
            deliveries: [
                { pizzaIndexes: [0, 1] },
                { pizzaIndexes: [2, 3] }
            ]
        };

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(1*1 + 1*1);
    });
});
