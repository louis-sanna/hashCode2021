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
    let time = 0;
    console.log('isGreenByTimeByStreet', isGreenByTimeByStreet);
    console.log('cars', cars);
    console.log('streets', input.streets);
    cars.forEach(car => updateCarAtIntersection(car, time, isGreenByTimeByStreet, input));
    while (time < input.duration) {
        console.log('time', time);
        console.log('cars', cars);
        time++;
        cars.forEach(car => updateCarAtIntersection(car, time, isGreenByTimeByStreet, input));
        cars.forEach(car => moveCarsAlongStreets(car));
        cars.forEach(car => updateCarAtIntersection(car, time, isGreenByTimeByStreet, input));
    }
    console.log('time', time);
    console.log('cars', cars);
    // console.log('bonus', input.bonus);
    // console.log('duration', input.duration);
    // console.log('cars', cars);
    return scoreCars(cars, input);
}

function scoreCars(cars, input) {
    let totalScore = 0;
    for (const car of cars) {
        if (typeof car.arrived !== 'undefined') {
            totalScore += input.bonus;
            totalScore += Math.max(input.duration - car.arrived, 0);
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
    if (car.timeRemainingOnStreet !== 0) { return; }
    if (car.pathStreetNames.length === 1) {
        car.arrived = time;
        return;
    }
    if (isGreenByTimeByStreet[time][car.pathStreetNames[0]] || isGreenByTimeByStreet[time + 1][car.pathStreetNames[0]]) {
        car.pathStreetNames = car.pathStreetNames.slice(1, car.pathStreetNames.length);
        car.timeRemainingOnStreet = getStreetLength(car.pathStreetNames[0], input);
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
    for (let virtualTime = 0; virtualTime <= input.duration + 1; virtualTime++) {
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
        });
        for (let virtualTime = 0; virtualTime <= input.duration + 1; virtualTime++) {
            const currentGreenStreet = streetCycle[virtualTime % streetCycle.length];
            isGreenByTimeByStreet[virtualTime][currentGreenStreet] = true;
        }
    }
    return isGreenByTimeByStreet;
}
