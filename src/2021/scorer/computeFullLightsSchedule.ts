import { FullLightsSchedule, Submission, IntersectionSchedule, StreetSchedule, Input } from '../entities';

export function computeFullLightsSchedule(input: Input, submission: Submission) : FullLightsSchedule {
    console.log(submission);
    const fullLightsSchedule = <FullLightsSchedule>{
        greenStreetByTimeAndIntersection: new Array(input.duration)
    };
    for (let i = 0; i < input.duration; ++i) {
        fullLightsSchedule.greenStreetByTimeAndIntersection[i] = new Array(input.intersectionsCount);
    }
    submission.intersectionSchedules.forEach(intersectionSchedule => {
        const streetCycle = [];
        intersectionSchedule.schedules.forEach(streetSchedule => {
            for (let i = 0; i < streetSchedule.duration; ++i) {
                streetCycle.push(streetSchedule.street);
            }
        });
        for (let i = 0; i < input.duration; ++i) {
            fullLightsSchedule.greenStreetByTimeAndIntersection[i][intersectionSchedule.intersection] = streetCycle[i % streetCycle.length];
        }
    });
    return fullLightsSchedule;
}
