export interface CarPosition {
    street: string,
    car: number,
    distanceToEnd: number
}

export interface TrafficState {
    time: number,
    carPositions: Array<CarPosition>
}

export interface FullLightsSchedule {
    stateByTime: Array<LightsState>; //the index in this array is the time
}

export interface LightsState {
    lightsByIntersection: Array<string>; //the index in this array is the intersection index, and the string is the street currently green
}
