import { CarPosition, FullLightsSchedule, TrafficState } from '../entities';

export function updateTrafficState(trafficState: TrafficState, lightsSchedule: Array<number>) : TrafficState {
    trafficState.time++;
    trafficState.carPositions.forEach(updateCarPosition);
    return trafficState;
}

function updateCarPosition(position: CarPosition) : void {
    if (position.distanceToEnd >= 0) {
        position.distanceToEnd--;
    }
}
