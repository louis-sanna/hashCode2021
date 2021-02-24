import { ImportsNotUsedAsValues } from 'typescript';
import { Input, Submission } from '../../entities';

export function solve(input: Input) : Submission {
    return {
        numberOfPizza: 1,
        deliveries: [{
            sizeOfTeam: 4,
            pizzaIndexes: [0,1,2,3]
        }]
    };
}
