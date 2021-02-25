export interface Submission {
    intersectionSchedules: Array<IntersectionSchedule>
}

export interface IntersectionSchedule {
    intersection: number,
    schedules: Array<StreetSchedule>
}

export interface StreetSchedule {
    street: string,
    duration: number
}

