import _ from 'underscore';
import { Input, Submission } from '../../entities';

export function solve(input: Input) : Submission {
    const pizzas = input.pizzas;
    // const pizzasLeftIndexes = _.shuffle(range(pizzas.length));
    const pizzasLeftIndexes = _.sortBy(
        range(pizzas.length),
        pizzaIndex => pizzas[pizzaIndex].ingredients.length
    ).reverse();
    let {numberOfTwoPersonTeams, numberOfThreePersonTeams, numberOfFourPersonTeams} = input;
    const submission: Submission =  { deliveries: [] };

    while(pizzasLeftIndexes.length >= 2
        && (numberOfTwoPersonTeams !== 0
             || numberOfThreePersonTeams !== 0
             || numberOfFourPersonTeams !== 0)){

        const strategy = _.sample([2,3,4]);

        switch (strategy) {
        case 2:
            if(pizzasLeftIndexes.length >= 2 && numberOfTwoPersonTeams !== 0){
                submission.deliveries.push({pizzaIndexes: pizzasLeftIndexes.splice(0,2)});
                numberOfTwoPersonTeams--;
            }
            continue;
        case 3:
            if(pizzasLeftIndexes.length >= 3 && numberOfThreePersonTeams !== 0){
                submission.deliveries.push({pizzaIndexes: pizzasLeftIndexes.splice(0,3)});
                numberOfThreePersonTeams--;
            }
            continue;
        case 4:
            if(pizzasLeftIndexes.length >= 4 && numberOfFourPersonTeams !== 0){
                submission.deliveries.push({pizzaIndexes: pizzasLeftIndexes.splice(0,4)});
                numberOfFourPersonTeams--;
            }
            continue;
        }
    }

    return submission;
}

// Python's `range` method
const range = n => Array.from(Array(n).keys());
