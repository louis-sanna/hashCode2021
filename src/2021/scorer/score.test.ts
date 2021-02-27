import { score, simulateTraffic } from './score';
import { expect } from 'chai';
import { parseInput } from './../parser';


describe('google example - first Car', () => {
    it('should first car at T zero crosses immediately intersection 0, as the traffic light there is always green', () => {
        const input = parseInput('A');
        input.cars = [input.cars[0]];
        input.duration = 0;
        const submission = {
            intersectionSchedules: [{
                intersection: 0,
                schedules: [{
                    street: 'rue-de-londres',
                    duration: 2
                }]
            }, {
                intersection: 1,
                schedules: [{
                    street: 'rue-d-athenes',
                    duration: 2
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
            }]
        };

        const cars = simulateTraffic(submission, input);

        expect(cars).to.deep.equal([
            {
                pathStreetNames: [ 'rue-d-amsterdam', 'rue-de-moscou', 'rue-de-rome' ],
                timeRemainingOnStreet: 1
            }
        ]);
    });
    it('one second later, it has gone through rue-d-amsterdam. However, the traffic light is red', () => {
        const input = parseInput('A');
        input.cars = [input.cars[0]];
        input.duration = 1;
        const submission = {
            intersectionSchedules: [{
                intersection: 0,
                schedules: [{
                    street: 'rue-de-londres',
                    duration: 2
                }]
            }, {
                intersection: 1,
                schedules: [{
                    street: 'rue-d-athenes',
                    duration: 2
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
            }]
        };

        const cars = simulateTraffic(submission, input);

        expect(cars).to.deep.equal([
            {
                pathStreetNames: [ 'rue-d-amsterdam', 'rue-de-moscou', 'rue-de-rome' ],
                timeRemainingOnStreet: 0
            }
        ]);
    });
    it('the car now crosses the intersection and continues to rue-de-moscou', () => {
        const input = parseInput('A');
        input.cars = [input.cars[0]];
        input.duration = 2;
        const submission = {
            intersectionSchedules: [{
                intersection: 0,
                schedules: [{
                    street: 'rue-de-londres',
                    duration: 2
                }]
            }, {
                intersection: 1,
                schedules: [{
                    street: 'rue-d-athenes',
                    duration: 2
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
            }]
        };

        const cars = simulateTraffic(submission, input);

        expect(cars).to.deep.equal([
            {
                pathStreetNames: ['rue-de-moscou', 'rue-de-rome' ],
                timeRemainingOnStreet: 3
            }
        ]);
    });
    it('the car now crosses the intersection and continues to rue-de-moscou', () => {
        const input = parseInput('A');
        input.cars = [input.cars[0]];
        input.duration = 2;
        const submission = {
            intersectionSchedules: [{
                intersection: 0,
                schedules: [{
                    street: 'rue-de-londres',
                    duration: 2
                }]
            }, {
                intersection: 1,
                schedules: [{
                    street: 'rue-d-athenes',
                    duration: 2
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
            }]
        };

        const cars = simulateTraffic(submission, input);

        expect(cars).to.deep.equal([
            {
                pathStreetNames: ['rue-de-moscou', 'rue-de-rome' ],
                timeRemainingOnStreet: 3
            }
        ]);
    });
    it('the car now crosses the intersection and continues to rue-de-moscou', () => {
        const input = parseInput('A');
        input.cars = [input.cars[0]];
        input.duration = 5;
        const submission = {
            intersectionSchedules: [{
                intersection: 0,
                schedules: [{
                    street: 'rue-de-londres',
                    duration: 2
                }]
            }, {
                intersection: 1,
                schedules: [{
                    street: 'rue-d-athenes',
                    duration: 2
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
            }]
        };

        const cars = simulateTraffic(submission, input);

        expect(cars).to.deep.equal([
            {
                pathStreetNames: ['rue-de-rome' ],
                timeRemainingOnStreet: 2
            }
        ]);
    });
    it('the car now crosses the intersection and continues to rue-de-moscou', () => {
        const input = parseInput('A');
        input.cars = [input.cars[0]];
        input.duration = 7;
        const submission = {
            intersectionSchedules: [{
                intersection: 0,
                schedules: [{
                    street: 'rue-de-londres',
                    duration: 2
                }]
            }, {
                intersection: 1,
                schedules: [{
                    street: 'rue-d-athenes',
                    duration: 2
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
            }]
        };

        const cars = simulateTraffic(submission, input);

        expect(cars).to.deep.equal([
            {
                pathStreetNames: ['rue-de-rome' ],
                timeRemainingOnStreet: 0,
                arrived: 7
            }
        ]);
    });
});


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

    it('should return nothing if last street is too long', () => {
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
                length: 2
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

        expect(totalScore).to.equal(0);
    });

    it('should let pass if first street is green', () => {
        const input = {
            duration: 1,
            bonus: 1000,
            streets: [{
                begin: 0,
                end: 1,
                name: 'name of street',
                length: 1
            },{
                begin: 0,
                end: 1,
                name: 'name of street bis',
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
                    duration: 1
                }, {
                    street: 'name of street bis',
                    duration: 2
                }]
            }]
        };

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(1000);
    });

    it('should not let pass if first is red', () => {
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
            },
            {
                begin: 0,
                end: 1,
                name: 'name of street bis',
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
                    street: 'name of street bis',
                    duration: 2
                },{
                    street: 'name of street',
                    duration: 1
                }]
            }]
        };

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(0);
    });

    it('should return nothing if second to last street is always red', () => {
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
            }, {
                begin: 2,
                end: 3,
                name: 'name of street 2',
                length: 1
            }],
            cars: [{
                pathStreetNames: ['name of street', 'name of street 2', 'name of street 3']
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

        expect(totalScore).to.equal(0);
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

    it('should score like google', () => {
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

    it('should score like google', () => {
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

    it('should score like google', () => {
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
                    street: 'rue-d-amsterdam',
                    duration: 1
                }, {
                    street: 'rue-d-athenes',
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

        expect(totalScore).to.equal(1001);
    });

    it('should score like google', () => {
        const input = parseInput('A');
        const submission = {
            'intersectionSchedules': [
                {
                    'intersection': 0,
                    'schedules': [
                        {
                            'street': 'rue-de-londres',
                            'duration': 1
                        }
                    ]
                },
                {
                    'intersection': 3,
                    'schedules': [
                        {
                            'street': 'rue-de-rome',
                            'duration': 1
                        }
                    ]
                }
            ]
        };

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(0);
    });


    it('should sore like google', () => {
        const input = parseInput('A');
        const submission = {
            intersectionSchedules: [{
                intersection: 0,
                schedules: [{
                    street: 'rue-de-londres',
                    duration: 2
                }]
            }, {
                intersection: 1,
                schedules: [{
                    street: 'rue-d-athenes',
                    duration: 2
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
            }]
        };

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(1002);
    });
});
