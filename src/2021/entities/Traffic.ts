export interface CarPosition {
    street: string,
    car: number,
    distanceToEnd: number
}

export interface TrafficState {
    time: number,
    carPositions: Array<CarPosition>
}
