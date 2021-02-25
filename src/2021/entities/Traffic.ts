export interface CarPosition {
    street: string,
    distanceToEnd: number
}

export interface TrafficState {
    time: number,
    carPositions: Array<CarPosition>,
    carsArrived: Array<number>
}

export interface FullLightsSchedule {
    greenStreetByTimeAndIntersection: Array<Array<string>>; //the first index is the time, the second index is the intersection, the value (string) is the currently green street
}
