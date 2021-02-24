import { solve } from './solve';
import { expect } from 'chai';

describe('solve', () => {
    it('should return empty submission if there are no pizza', () => {
        const input = {
            numberOfTwoPersonTeams: 2,
            numberOfThreePersonTeams: 1,
            numberOfFourPersonTeams: 1,
            pizzas: []
        };

        const bestSubmission = solve(input);

        expect(bestSubmission).to.deep.equal({
            numberOfPizza: 0,
            deliveries: []
        });
    });
    it('should return empty submission if there are no teams', () => {
        const input = {
            numberOfTwoPersonTeams: 0,
            numberOfThreePersonTeams: 0,
            numberOfFourPersonTeams: 0,
            pizzas: [
                { ingredients: ['onion', 'tomatoes'] },
                { ingredients: ['onion', 'tomatoes'] },
                { ingredients: ['onion', 'cheese'] },
                { ingredients: ['mushroom'] }]
        };

        const bestSubmission = solve(input);

        expect(bestSubmission).to.deep.equal({
            numberOfPizza: 0,
            deliveries: []
        });
    });
    it('should return empty submission if there are not enough pizza for a team', () => {
        const input = {
            numberOfTwoPersonTeams: 0,
            numberOfThreePersonTeams: 0,
            numberOfFourPersonTeams: 1,
            pizzas: [
                { ingredients: ['onion', 'tomatoes'] },
                { ingredients: ['onion', 'tomatoes'] },
                { ingredients: ['onion', 'cheese'] }
            ]
        };

        const bestSubmission = solve(input);

        expect(bestSubmission).to.deep.equal({
            numberOfPizza: 0,
            deliveries: []
        });
    });
    it('should return deliver pizzas to a team if possible', () => {
        const input = {
            numberOfTwoPersonTeams: 0,
            numberOfThreePersonTeams: 0,
            numberOfFourPersonTeams: 1,
            pizzas: [
                { ingredients: ['onion', 'tomatoes'] },
                { ingredients: ['onion', 'tomatoes'] },
                { ingredients: ['onion', 'cheese'] },
                { ingredients: ['onion', 'cheese'] }
            ]
        };

        const bestSubmission = solve(input);

        expect(bestSubmission).to.deep.equal({
            numberOfPizza: 4,
            deliveries: [{ pizzaIndexes: [3, 2, 1, 0] }]
        });
    });
    it('should return deliver pizzas to a team if possible', () => {
        const input = {
            numberOfTwoPersonTeams: 0,
            numberOfThreePersonTeams: 3,
            numberOfFourPersonTeams: 0,
            pizzas: [
                { ingredients: ['onion', 'tomatoes'] },
                { ingredients: ['onion', 'tomatoes'] },
                { ingredients: ['onion', 'cheese'] }
            ]
        };

        const bestSubmission = solve(input);

        expect(bestSubmission).to.deep.equal({
            numberOfPizza: 3,
            deliveries: [{ pizzaIndexes: [2, 1, 0] }]
        });
    });
    it('should return deliver pizzas to a team if possible', () => {
        const input = {
            numberOfTwoPersonTeams: 1,
            numberOfThreePersonTeams: 0,
            numberOfFourPersonTeams: 0,
            pizzas: [
                { ingredients: ['onion', 'tomatoes'] },
                { ingredients: ['onion', 'tomatoes'] }
            ]
        };

        const bestSubmission = solve(input);

        expect(bestSubmission).to.deep.equal({
            numberOfPizza: 2,
            deliveries: [{ pizzaIndexes: [1, 0] }]
        });
    });
});
