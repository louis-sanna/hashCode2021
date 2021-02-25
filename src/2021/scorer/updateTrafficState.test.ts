
// import { FullLightsSchedule, Input, Submission, TrafficState } from '../entities';
// import { updateTrafficState } from './updateTrafficState';
// import { expect } from 'chai';
// import { parseInput } from './../parser';

// describe('score', () => {
//     it('should return advance time by 1', () => {
//         const trafficState = {
//             time: 0,
//             carPositions: []
//         };
//         const fullLightsSchedule = <FullLightsSchedule>{};

//         const updatedTrafficState = updateTrafficState(trafficState, fullLightsSchedule);

//         expect(updatedTrafficState).to.deep.equal({
//             time: 1,
//             carPositions: []
//         });
//     });

//     it('should return advance car by 1 if possible', () => {
//         const trafficState = {
//             time: 0,
//             carPositions: [{
//                 street: 'a',
//                 car: 3,
//                 distanceToEnd: 2
//             }]
//         };

//         const fullLightsSchedule = <FullLightsSchedule>{};

//         const updatedTrafficState = updateTrafficState(trafficState, fullLightsSchedule);

//         expect(updatedTrafficState).to.deep.equal({
//             time: 1,
//             carPositions: [{
//                 street: 'a',
//                 car: 3,
//                 distanceToEnd: 1
//             }]
//         });
//     });

//     it('should not move cars if lights are red', () => {
//         const parsedInput = parseInput('A');
//         console.log('parsedInput', parsedInput);

//         const trafficState = {
//             time: 0,
//             carPositions: parsedInput.cars.map((car) => {
//                 return {
//                     street: car.pathStreetNames[0],
//                     car: car.id,
//                     distanceToEnd: 0
//                 };
//             })
//         };

//         console.log('trafficState', trafficState);

//         const fullLightsSchedule = [['fake-road', 'fake-road', 'fake-road', 'fake-road']]);

//         const updatedTrafficState = updateTrafficState(trafficState, lightsSchedule);

//         expect(updatedTrafficState).to.deep.equal({
//             time: 0,
//             carPositions: [
//                 { street: 'rue-de-londres', car: 0, distanceToEnd: 0 },
//                 { street: 'rue-d-athenes', car: 1, distanceToEnd: 0 }
//             ]
//         });
//     });
// });
