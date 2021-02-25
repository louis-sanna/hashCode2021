
import { FullLightsSchedule, Input, Submission, TrafficState } from '../entities';
import { updateTrafficState } from './updateTrafficState';
import { expect } from 'chai';

describe('score', () => {
    it('should return advance time by 1', () => {
        const trafficState = {
            time: 0,
            carPositions: []
        };
        const fullLightsSchedule = <FullLightsSchedule>{};

        const updatedTrafficState = updateTrafficState(trafficState, fullLightsSchedule);

        expect(updatedTrafficState).to.deep.equal({
            time: 1,
            carPositions: []
        });
    });

    it('should return advance car by 1 if possible', () => {
        const trafficState = {
            time: 0,
            carPositions: [{
                street: 'a',
                car: 3,
                distanceToEnd: 2
            }]
        };

        const lightsSchedule = [];

        const updatedTrafficState = updateTrafficState(trafficState, lightsSchedule);

        expect(updatedTrafficState).to.deep.equal({
            time: 1,
            carPositions: [{
                street: 'a',
                car: 3,
                distanceToEnd: 1
            }]
        });
    });
});
