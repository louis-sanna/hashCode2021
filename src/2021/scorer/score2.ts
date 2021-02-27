import _ from 'underscore';
import { Car, Input, Submission } from '../entities';

export function score2(submission: Submission, input: Input): number {
    let score = 0;
    let intersectionStates : Record<number, Record<string, Array<Car & {timeLeft:number}>>> = {};

    input.cars.forEach(car => {
        const street = car.pathStreetNames.shift();
        const intersection = input.streetsByName[street].end;
        intersectionStates[intersection] = intersectionStates[intersection] ?? {};
        intersectionStates[intersection][street] = intersectionStates[intersection][street] ?? [];
        intersectionStates[intersection][street].push({...car, timeLeft: 0});
    });


    for (let time = 0; time < input.duration; time++) {
        const newIntersectionStates : Record<number, Record<string, Array<Car & {timeLeft:number}>>> = {};

        // decrease timeLeft for all cars
        for (const intersection in intersectionStates) {
            for (const street in intersectionStates[intersection]) {
                intersectionStates[intersection][street].forEach(car => {
                    car.timeLeft = Math.max(car.timeLeft - 1, 0); // can't go below 0
                });
            }
        }

        // score finished cars
        for (const intersection in intersectionStates) {
            for (const street in intersectionStates[intersection]) {
                intersectionStates[intersection][street].forEach(car => {
                    if(car.timeLeft === 0 && car.pathStreetNames.length === 0){
                        score += input.duration - time + input.bonus;
                        intersectionStates[intersection][street] = _.reject(intersectionStates[intersection][street], x => x.id === car.id);
                    }
                });
            }
        }

        // move cars
        for (const intersection in intersectionStates) {
            const intersectionAsNumber = parseInt(intersection, 10); // for some reason the key is a string even if types number
            const intersectionSchedule = submission
                .intersectionSchedules
                .find(intersectionSchedule => intersectionSchedule.intersection === intersectionAsNumber);
            const totalScheduleDuration = intersectionSchedule
                .schedules
                .reduce((prev, curr) => prev + curr.duration, 0);
            const greenStreet = intersectionSchedule
                .schedules
                .reduce(
                    (prev, curr) => ({ time: prev.time + curr.duration, street: prev.street ?? (time % totalScheduleDuration < prev.time + curr.duration ? curr.street : null) }),
                    { time: 0, street: null }
                )
                .street;

            // calculate behavior for each incoming street of the intersection
            for (const street in intersectionStates[intersection]) {
                if(intersectionStates[intersection][street].length === 0){continue;}

                if(street === greenStreet
                    && intersectionStates[intersection][street].filter(car => car.timeLeft === 0).length > 0){
                    const movingCar = intersectionStates[intersection][street].filter(car => car.timeLeft === 0)[0];
                    const carsLeftPending =  _.reject(intersectionStates[intersection][street], car => car.id === movingCar.id);

                    // update waiting list
                    if(carsLeftPending.length > 0){
                        newIntersectionStates[intersection] = newIntersectionStates[intersection] ?? {};
                        newIntersectionStates[intersection][street] = carsLeftPending;
                    }

                    // move car
                    const nextStreet = input.streetsByName[movingCar.pathStreetNames.shift()];
                    newIntersectionStates[nextStreet.end] = newIntersectionStates[nextStreet.end] ?? {};
                    newIntersectionStates[nextStreet.end][nextStreet.name] = newIntersectionStates[nextStreet.end][nextStreet.name] ?? [];
                    newIntersectionStates[nextStreet.end][nextStreet.name].push({...movingCar, timeLeft: nextStreet.length});
                    continue;
                }
                newIntersectionStates[intersection] = newIntersectionStates[intersection] ?? {};
                newIntersectionStates[intersection][street] = newIntersectionStates[intersection][street] ?? [];
                newIntersectionStates[intersection][street].push(...intersectionStates[intersection][street]);
            }
        }

        intersectionStates = newIntersectionStates;
    }

    return score;
}
