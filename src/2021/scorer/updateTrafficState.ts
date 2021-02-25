import { FullLightsSchedule, TrafficState } from '../entities';

export function updateTrafficState(trafficState: TrafficState, fullLightsSchedule: FullLightsSchedule) : TrafficState {
    trafficState.time++;
    return trafficState;
}
