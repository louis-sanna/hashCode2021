export interface CarPosition {
    street: string,
    car: number,
    distanceToEnd: number
}

export interface TrafficState {
    carPositions: Array<CarPosition>
}
