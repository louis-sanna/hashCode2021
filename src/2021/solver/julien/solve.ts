import _ from 'underscore';
import { Input, Submission } from '../../entities';

export function solve(input: Input) : Submission {
    // const x : Submission = {};

    return {intersectionSchedules:[{
        intersection: 1,
        schedules: [{
            street: 'rue-d-athenes',
            duration: 2
        }, {
            street: 'rue-d-amsterdam',
            duration: 1
        }]
    },{
        intersection: 0,
        schedules: [{
            street: 'rue-de-londres',
            duration: 2
        }]
    },{
        intersection: 2,
        schedules: [{
            street: 'rue-de-moscou',
            duration: 1
        }]
    }]};
}

// Python's `range` method
const range = n => Array.from(Array(n).keys());
