import { Input, Submission, TrafficState } from '../entities';
import {computeFullLightsSchedule} from './computeFullLightsSchedule';
import {updateTrafficState} from './updateTrafficState';

export function score(submission: Submission, input: Input): number {
    const fullLightsSchedule = computeFullLightsSchedule(input, submission);
    let totalScore = 0;
    const finalTime = input.duration;
    const trafficState = generateTrafficState(input);
    console.log(JSON.stringify(input, null, 2));
    while (trafficState.time < finalTime) {
        updateTrafficState(trafficState, fullLightsSchedule, input);
        console.log('trafficState', trafficState);
        const currentTime = trafficState.time;
        console.log(trafficState.time, finalTime);
        trafficState.carsArrived.forEach(() => {
            totalScore += input.bonus;
            totalScore += finalTime - trafficState.time;
        });
        trafficState.carsArrived = [];
    }
    return totalScore;
}

function generateTrafficState(input: Input) : TrafficState {
    return {
        time: 0,
        carPositions: input.cars.map(({ id, pathStreetNames }) => ({
            street: pathStreetNames[0],
            car: id,
            distanceToEnd: 0
        })),
        carsArrived: []
    };
}
