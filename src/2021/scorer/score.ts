import { Street, Submission } from '../entities';

interface InputAdapter {
    duration: number,
    bonus: number,
    streets: Street[],
    cars: carAdapter[]
}

interface carAdapter {
    pathStreetNames: string[]
}

export function score(submission: Submission, input: InputAdapter): number {
    const isGreenByTimeByStreet = buildIsGreenByTimeByStreet(submission, input);
    const cars = buildCars(input);
    console.log('isGreenByTimeByStreet', isGreenByTimeByStreet);
    console.log('cars', cars);
    let time = 0;
    cars.forEach(car => updateCarAtIntersection(car, time, isGreenByTimeByStreet, input));
    while (time <= input.duration) {
        cars.forEach(car => moveCarsAlongStreets(car));
        time++;
        cars.forEach(car => updateCarAtIntersection(car, time, isGreenByTimeByStreet, input));
    }
    console.log('cars', cars);
    return scoreCars(cars, input);
}

function scoreCars(cars, input) {
    let totalScore = 0;
    for (const car of cars) {
        if (typeof car.arrived !== 'undefined') {
            totalScore += input.bonus;
            totalScore += input.duration - car.arrived;
        }
    }
    return totalScore;
}

function moveCarsAlongStreets(car) {
    if (typeof car.arrived !== 'undefined') {
        return;
    }
    if (car.timeRemainingOnStreet > 0) {
        car.timeRemainingOnStreet--;
    }
}

function updateCarAtIntersection(car, time, isGreenByTimeByStreet, input) {
    if (typeof car.arrived !== 'undefined') {
        return;
    }
    if (car.timeRemainingOnStreet === 0) {
        if (car.pathStreetNames.length === 1) {
            car.arrived = time;
            return;
        }
        if (isGreenByTimeByStreet[time][car.pathStreetNames[0]]) {
            car.pathStreetNames.shift();
            car.timeRemainingOnStreet = getStreetLength(car.pathStreetNames[0], input);
        }
    }
}

function getStreetLength(streetName, input) {
    const currentStreet = input.streets.find(street => street.name === streetName);
    return currentStreet.length;
}

function buildCars(input) {
    return input.cars.map(inputCar => ({
        pathStreetNames: inputCar.pathStreetNames,
        timeRemainingOnStreet: 0
    }));
}

function buildIsGreenByTimeByStreet(submission, input) {
    const isGreenByTimeByStreet = [];
    for (let virtualTime = 0; virtualTime <= input.duration; virtualTime++) {
        isGreenByTimeByStreet[virtualTime] = [];
        for (const street of input.streets) {
            isGreenByTimeByStreet[virtualTime][street.name] = false;
        }
    }
    for (const intersectionSchedule of submission.intersectionSchedules) {
        const streetCycle : string[] = [];
        intersectionSchedule.schedules.forEach(streetSchedule => {
            for (let i = 0; i <= streetSchedule.duration; i++) {
                streetCycle.push(streetSchedule.street);
            }
            for (let virtualTime = 0; virtualTime <= input.duration; virtualTime++) {
                const currentGreenStreet = streetCycle[virtualTime % streetCycle.length];
                isGreenByTimeByStreet[virtualTime][currentGreenStreet] = true;
            }
        });
    }
    return isGreenByTimeByStreet;
}
