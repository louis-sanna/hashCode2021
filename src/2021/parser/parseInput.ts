import { fileReader } from '../../utils';
import { Car, Input, Intersection, Street } from '../entities';

const inputPathByProblem = {
    'A': 'a.txt',
    'B': 'b.txt',
    'C': 'c.txt',
    'D': 'd.txt',
    'E': 'e.txt',
    'F': 'f.txt'
};

export function parseInput(problem: string): Input {
    // basic parsing
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
    let id = 0;
    for (const line of lines.slice(1+s, 1+s+v)) {
        const [p, ...names] = line.split(' ');
        cars.push({
            id: id,
            pathLength: parseInt(p, 10),
            pathStreetNames: names
        });
        id++;
    }

    // build intersectionsById
    const intersectionsById : {[id: number]: Intersection} = {};
    streets.forEach(street => {
        intersectionsById[street.begin] = intersectionsById[street.begin] ??
            {
                id: street.begin,
                inputStreets: [],
                outputStreets: []
            };
        intersectionsById[street.end] = intersectionsById[street.end] ??
            {
                id: street.end,
                inputStreets: [],
                outputStreets: []
            };

        intersectionsById[street.begin].outputStreets.push(street.name);
        intersectionsById[street.end].inputStreets.push(street.name);
    });

    // build streetsByName
    const streetsByName : {[name: string]: Street} = {};
    streets.forEach(street => {
        streetsByName[street.name] = street;
    });

    // return
    return {
        duration: d,
        intersectionsCount: i,
        streetsCount: s,
        carsCount: v,
        bonus: f,
        streets: streets,
        cars: cars,
        intersectionsById: intersectionsById,
        streetsByName: streetsByName
    };
}
