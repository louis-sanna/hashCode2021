import { Input, Submission } from '../../entities';

export function solve(input: Input) : Submission {
    return {
        numberOfPizza: 1,
        deliveries: [{
            pizzaIndexes: [0,1,2,3]
        }]
    };
}
