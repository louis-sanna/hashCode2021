// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Input {
    duration: number,
    intersectionsCount: number,
    streetsCount: number,
    carsCount: number,
    bonus: number,
    streets: Array<Street>,
    cars: Array<Car>
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Street {
    begin: number,
    end: number,
    name: string,
    length: number
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Car {
    pathLength: number,
    pathStreetNames: Array<string>
}
