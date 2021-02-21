import { fileReader } from '../../utils';
import { Input } from '../entities';

const inputPathByProblem = {
    'A': 'a_example.in',
    'B': 'b_little_bit_of_everything.in',
    'C': 'c_many_ingredients.in',
    'D': 'd_many_pizzas.in',
    'E': 'e_many_teams.in'
};

export function parseInput(problem: string): Input {
    const lines = fileReader.readLines(`/pizza/inputs/${inputPathByProblem[problem]}`);

    const [, 
        numberOfTwoPersonTeams,
        numberOfThreePersonTeams,
        numberOfFourPersonTeams] = lines[0].split(' ').map(value => parseInt(value, 10));
    const pizzas = [];
    for (const line of lines.slice(1)) {
        pizzas.push({ ingredients: line.split(' ').slice(1) });
    }
    return {
        numberOfTwoPersonTeams,
        numberOfThreePersonTeams,
        numberOfFourPersonTeams,
        pizzas
    };
}
