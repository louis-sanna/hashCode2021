import { Delivery, Input, Submission } from '../../entities';

export function solve(input: Input) : Submission {
    const { numberOfTwoPersonTeams,
        numberOfThreePersonTeams,
        numberOfFourPersonTeams,
        pizzas } = input;

    let waiting4 = numberOfFourPersonTeams;
    let waiting3 = numberOfThreePersonTeams;
    let waiting2 = numberOfTwoPersonTeams;

    const pizzaStack = pizzas.map((pizza, index) => ({ pizza, index }));
    const deliveries : Array<Delivery> = [];
    while (waiting4 > 0 && pizzaStack.length >= 4) {
        waiting4--;
        deliveries.push({
            pizzaIndexes: [pizzaStack.pop().index, pizzaStack.pop().index, pizzaStack.pop().index, pizzaStack.pop().index]
        });
    }

    while (waiting3 > 0 && pizzaStack.length >= 3) {
        waiting3--;
        deliveries.push({
            pizzaIndexes: [pizzaStack.pop().index, pizzaStack.pop().index, pizzaStack.pop().index]
        });
    }


    while (waiting2 > 0 && pizzaStack.length >= 2) {
        waiting2--;
        deliveries.push({
            pizzaIndexes: [pizzaStack.pop().index, pizzaStack.pop().index]
        });
    }

    return {
        numberOfPizza: pizzas.length - pizzaStack.length,
        deliveries
    };
}
