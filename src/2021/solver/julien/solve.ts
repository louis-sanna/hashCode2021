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

    for (const street in weightedStreets) {
        weightedStreets[street] = Math.floor(weightedStreets[street] / 10) + 1;
    }

    let intersectionSchedules : Array<IntersectionSchedule> = Object.entries(input.intersectionsById).map(
        ([id, intersection]) => ({
            intersection: parseInt(id, 10),
            schedules:
            // _.shuffle(
                intersection.inputStreets
                // )
                    .map(street => ({
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


