import { Delivery, Input, Submission } from '../entities';

export function score(submission: Submission, input: Input): number {
    let totalScore = 0;
    for (const delivery of submission.deliveries) {
        totalScore += scoreDelivery(delivery, input);
    }
    return totalScore;
}

function scoreDelivery(delivery: Delivery, input: Input) {
    const usedIngredients = new Map<string, boolean>(); 
    for (const pizzaIndex of delivery.pizzaIndexes) {
        for (const ingredient of input.pizzas[pizzaIndex].ingredients) {
            if (usedIngredients.has(ingredient)) { continue; }
            usedIngredients.set(ingredient, true);
        }
    }
    return usedIngredients.size * usedIngredients.size;
}
