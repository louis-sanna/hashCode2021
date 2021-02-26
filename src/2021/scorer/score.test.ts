import { score } from './score';
import { expect } from 'chai';

describe('score', () => {

    it('should return 0 where there are no cars', () => {
        const input = {
            duration: 0,
            bonus: 0,
            streets: [{
                begin: 0,
                end: 1,
                name: 'name of street',
                length: 1
            }],
            cars: []
        };
        const submission = {
            intersectionSchedules: []
        };

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(0);
    });

    it.skip('should return 0 input there are no cars', () => {
        const input = {
            duration: 0,
            bonus: 0,
            streets: [{
                begin: 0,
                end: 1,
                name: 'name of street',
                length: 1
            }],
            cars: [{
                id: 0,
                pathLength: 1,
                pathStreetNames: ['name of street']
            }]
        };
        const submission = {
            intersectionSchedules: [{
                intersection: 1,
                schedules: [{
                    street: 'name of street',
                    duration: 0
                }]
            }]
        };

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(0);
    });
});
