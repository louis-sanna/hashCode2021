import { Delivery, Input, Submission } from '../../entities';

export function solve(input: Input) : Submission {
    const { numberOfTwoPersonTeams,
        numberOfThreePersonTeams,
        numberOfFourPersonTeams,
        pizzas } = input;

    const waiting4 = numberOfFourPersonTeams;
    const waiting3 = numberOfThreePersonTeams;
    const waiting2 = numberOfTwoPersonTeams;

    const pizzaStack = pizzas.map((pizza, index) => ({ pizza, index }));
    const deliveries : Array<Delivery> = [];
    while (waiting4 > 0 && pizzaStack.length >= 4) {
        deliveries.push({ 
            sizeOfTeam: 4,
            pizzaIndexes: [pizzaStack.pop().index, pizzaStack.pop().index, pizzaStack.pop().index, pizzaStack.pop().index]
        });
    }

    while (waiting3 > 0 && pizzaStack.length >= 3) {
        deliveries.push({ 
            sizeOfTeam: 3,
            pizzaIndexes: [pizzaStack.pop().index, pizzaStack.pop().index, pizzaStack.pop().index]
        });
    }


    while (waiting2 > 0 && pizzaStack.length >= 2) {
        deliveries.push({ 
            sizeOfTeam: 2,
            pizzaIndexes: [pizzaStack.pop().index, pizzaStack.pop().index]
        });
    }
        
    return {
        numberOfPizza: pizzas.length - pizzaStack.length,
        deliveries
    }; 
}
