
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

        const udpatedTrafficState = updateTrafficState(trafficState, fullLightsSchedule);

        expect(udpatedTrafficState).to.deep.equal({
            time: 1,
            carPositions: []
        });
    });
});


// const trafficState = {
//     time: 0,
//     carPositions: [{
//         street: 'a',
//         car: number,
//         distanceToEnd: 1
//     }]
// };
