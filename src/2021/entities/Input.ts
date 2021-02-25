export interface Input {
    duration: number,
    intersectionsCount: number,
    streetsCount: number,
    carsCount: number,
    bonus: number,
    streets: Array<Street>,
    cars: Array<Car>
}

export interface Street {
    begin: number,
    end: number,
    name: string,
    length: number
}

export interface Car {
    pathLength: number,
    pathStreetNames: Array<string>
}
