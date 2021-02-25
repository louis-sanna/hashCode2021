import { fileReader } from '../../utils';
import { Car, Input, Street } from '../entities';

const inputPathByProblem = {
    'A': 'a.txt',
    'B': 'b.txt',
    'C': 'c.txt',
    'D': 'd.txt',
    'E': 'e.txt'
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function parseInput(problem: string): Input {
    const lines = fileReader.readLines(`2021/inputs/${inputPathByProblem[problem]}`);

    const [d, i, s, v, f] = lines[0].split(' ').map(value => parseInt(value, 10));
    const streets: Array<Street> = [];
    for (const line of lines.slice(1, 1+s)) {
        const [b, e, name, l] = line.split(' ');
        streets.push({
            begin: parseInt(b, 10),
            end: parseInt(e, 10),
            name: name,
            length: parseInt(l, 10)
        });
    }
    const cars: Array<Car> = [];
    for (const line of lines.slice(1+s, 1+s+v)) {
        const [p, ...names] = line.split(' ');
        cars.push({
            pathLength: parseInt(p, 10),
            pathStreetNames: names
        });
    }
    return {
        duration: d,
        intersectionsCount: i,
        streetsCount: s,
        carsCount: v,
        bonus: f,
        streets: streets,
        cars: cars,
        intersectionsById: {},
        streetsByName: {}
    };
}
