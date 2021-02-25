import _ from 'underscore';
import { Input, IntersectionSchedule, Submission } from '../../entities';

export function solve(input: Input) : Submission {
    // remove unused output
    const usedStreets : Set<string> = new Set(_.flatten(input.cars.map(car => car.pathStreetNames)));
    for (const id in input.intersectionsById) {
        input.intersectionsById[id].inputStreets.filter(street => usedStreets.has(street));
    }


    const intersectionSchedules : Array<IntersectionSchedule> = Object.entries(input.intersectionsById).map(
        ([id, intersection]) => ({
            intersection: parseInt(id, 10),
            schedules: intersection.inputStreets.map(street => ({
                street: street,
                duration: 1
            }))
        })
    );

    return {intersectionSchedules:intersectionSchedules};
}

// Python's `range` method
const range = n => Array.from(Array(n).keys());
