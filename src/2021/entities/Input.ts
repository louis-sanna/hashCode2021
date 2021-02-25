export interface Input {
    duration: number,
    intersectionsCount: number,
    streetsCount: number,
    carsCount: number,
    bonus: number,
    streets: Array<Street>,
    cars: Array<Car>,
    // custom
    intersectionsById: {[id: number]: Intersection},
    streetsByName: {[name: string]: Street}
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

export interface Intersection {
    id: number
    inputStreets: Array<string>,
    outputStreets: Array<string>
}
