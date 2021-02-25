import { fileWriter } from '../../utils';
import { Submission } from '../entities';

export function log(submission: Submission, folder: string, score: number): void {
    const submissionFile = buildSubmissionFile(submission);
    writeFile(folder, score, submissionFile);
}

function buildSubmissionFile(submission: Submission) : string {
    let out = '';
    out += submission.intersectionSchedules.length;
    out += '\n';
    for (const intersectionSchedule of submission.intersectionSchedules) {
        out += intersectionSchedule.intersection;
        out += '\n';
        out += intersectionSchedule.schedules.length;
        out += '\n';
        intersectionSchedule.schedules.forEach(schedule => {
            out += schedule.street + ' ' + schedule.duration + '\n';
        });
    }
    return out;
}

function writeFile(folder: string, score: number, data: string) : void{
    fileWriter.writeFile(`2021/outputs/${folder}/${score}.txt`, data);
}
