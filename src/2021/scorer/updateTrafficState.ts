import { CarPosition, FullLightsSchedule, TrafficState, Input } from '../entities';

export function updateTrafficState(trafficState: TrafficState, fullLightsSchedule: FullLightsSchedule, input: Input) : TrafficState {
    trafficState.carPositions.forEach(updateCarPosition);
    trafficState.time++;
    return trafficState;

    function updateCarPosition(position: CarPosition, idOfCar: number) : void {
        const pathStreetNames = input.cars[idOfCar].pathStreetNames;
        const indexCurrentStreet = pathStreetNames.indexOf(position.street);
        console.log('position.distanceToEnd', position.distanceToEnd);
        if (position.distanceToEnd > 0) {
            position.distanceToEnd--;
            return;
        }
        if (indexCurrentStreet === pathStreetNames.length - 1) { // end of path
            trafficState.carsArrived.push(idOfCar);
            return;
        }
        // at the end of path
        const currentStreet = position.street;
        const nextStreet = pathStreetNames[indexCurrentStreet + 1];
        const intersectionIndex = input.streetsByName[currentStreet].end;
        const greenStreet = fullLightsSchedule.greenStreetByTimeAndIntersection[trafficState.time][intersectionIndex];
        if (greenStreet === currentStreet) { // green
            position.street = nextStreet;
            position.distanceToEnd = input.streetsByName[nextStreet].length - 1;
            return;
        }
    }
}
