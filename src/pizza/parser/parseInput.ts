import { fileReader } from '../../utils';
import { Input } from '../entities';

export function parseInput(path: string): Input {
    const lines = fileReader.readLines(path);

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
