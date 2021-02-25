import { Input, Submission } from '../entities';
import { score } from './score';
import { expect } from 'chai';

describe('score', () => {
    it('should return 0 input is empty', () => {
        const input = <Input>{};
        const submission = <Submission>{};

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(0);
    });

    it('should return 0 input there are no cars', () => {
        const input = {
            duration: 0,
            intersectionsCount: 0,
            streetsCount: 0,
            carsCount: 0,
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
            }],
            // custom
            intersectionsById: {
                '0':
                {
                    id: 0,
                    inputStreets: [],
                    outputStreets: ['name of street']
                },
                '1':
                {
                    id: 1,
                    inputStreets: ['name of street'],
                    outputStreets: []
                }

            },
            streetsByName: {'name of street':
            {
                begin: 0,
                end: 1,
                name: 'name of street',
                length: 1
            }}
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
