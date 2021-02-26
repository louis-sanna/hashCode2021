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
    return 0;
}
