import _ from 'underscore';
import { Input, IntersectionSchedule, Submission } from '../../entities';

export function solve(input: Input) : Submission {
    const weightedStreets = {};
    input.cars.forEach(car => {
        car.pathStreetNames.forEach(street => {
            weightedStreets[street] = weightedStreets[street] ?? 0;
            weightedStreets[street]++;
        });
    });

    let intersectionSchedules : Array<IntersectionSchedule> = Object.entries(input.intersectionsById).map(
        ([id, intersection]) => ({
            intersection: parseInt(id, 10),
            schedules: intersection.inputStreets.map(street => ({
                street: street,
                duration: weightedStreets[street] ?? 0
            }))
        })
    );

    intersectionSchedules.forEach(intersectionSchedule => {
        intersectionSchedule.schedules = intersectionSchedule.schedules.filter(schedule => schedule.duration !== 0);
    });
    intersectionSchedules = intersectionSchedules.filter(intersectionSchedule => intersectionSchedule.schedules.length !== 0);

    return {intersectionSchedules:intersectionSchedules};
}

// Python's `range` method
const range = n => Array.from(Array(n).keys());
