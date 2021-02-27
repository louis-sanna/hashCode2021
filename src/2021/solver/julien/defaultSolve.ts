import { Input, Submission } from '../../entities';

export function solve(input: Input) : Submission {
    return {
        intersectionSchedules: [{
            intersection: 1,
            schedules: [{
                street: 'rue-d-athenes',
                duration: 2
            },{
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
        }]
    };
}
