import { score } from './score';
import { expect } from 'chai';
import { parseInput } from './../parser';


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

    it('should return 0 if no green lights', () => {
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
                pathStreetNames: ['name of street']
            }]
        };
        const submission = {
            intersectionSchedules: []
        };

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(0);
    });

    it('should return bonus if light is already green', () => {
        const input = {
            duration: 0,
            bonus: 1000,
            streets: [{
                begin: 0,
                end: 1,
                name: 'name of street',
                length: 1
            }],
            cars: [{
                pathStreetNames: ['name of street']
            }]
        };
        const submission = {
            intersectionSchedules: [{
                intersection: 1,
                schedules: [{
                    street: 'name of street',
                    duration: 10
                }]
            }]
        };

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(1000);
    });

    it('should return bonus if light is already green', () => {
        const input = {
            duration: 1,
            bonus: 1000,
            streets: [{
                begin: 0,
                end: 1,
                name: 'name of street',
                length: 1
            }, {
                begin: 1,
                end: 2,
                name: 'name of street 2',
                length: 1
            }],
            cars: [{
                pathStreetNames: ['name of street', 'name of street 2']
            }]
        };
        const submission = {
            intersectionSchedules: [{
                intersection: 1,
                schedules: [{
                    street: 'name of street',
                    duration: 10
                }]
            }]
        };

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(1000);
    });

    it('should return bonus if light is already green with points for duration', () => {
        const input = {
            duration: 2,
            bonus: 1000,
            streets: [{
                begin: 0,
                end: 1,
                name: 'name of street',
                length: 1
            }, {
                begin: 1,
                end: 2,
                name: 'name of street 2',
                length: 1
            }],
            cars: [{
                pathStreetNames: ['name of street', 'name of street 2']
            }]
        };
        const submission = {
            intersectionSchedules: [{
                intersection: 1,
                schedules: [{
                    street: 'name of street',
                    duration: 10
                }]
            }]
        };

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(1001);
    });

    it('should sore like google', () => {
        const input = parseInput('A');
        const submission = {
            intersectionSchedules: [{
                intersection: 0,
                schedules: [{
                    street: 'rue-de-londres',
                    duration: 1
                }]
            }, {
                intersection: 1,
                schedules: [{
                    street: 'rue-d-athenes',
                    duration: 1
                }, {
                    street: 'rue-d-amsterdam',
                    duration: 1
                }]
            }, {
                intersection: 2,
                schedules: [{
                    street: 'rue-de-moscou',
                    duration: 1
                }]
            }, {
                intersection: 3,
                schedules: [{
                    street: 'rue-de-rome',
                    duration: 1
                }]
            }]
        };

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(2002);
    });
});
