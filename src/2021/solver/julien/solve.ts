import _ from 'underscore';
import { Input, IntersectionSchedule, Submission } from '../../entities';

export function solve(input: Input) : Submission {
    const intersectionSchedules : Array<IntersectionSchedule> = Object.entries(input.intersectionsById).map(
        ([id, intersection]) => ({
            intersection: parseInt(id, 10),
            schedules: [{
                duration: 1,
                street: intersection.inputStreets[0]
            }]
        })
    );
    // const x : Submission = {};

    return {intersectionSchedules:intersectionSchedules};
}

// Python's `range` method
const range = n => Array.from(Array(n).keys());
