import { fileWriter } from '../../utils';
import { Submission } from '../entities';

export function log(submission: Submission, folder: string, score: number): void {
    const submissionFile = buildSubmissionFile(submission);
    writeFile(folder, score, submissionFile);
}

function buildSubmissionFile(submission: Submission) : string {
    let out = '';
    out += submission.deliveries.length;
    out += '\n';
    for (const delivery of submission.deliveries) {
        out += delivery.sizeOfTeam;
        out += ' ';
        out += delivery.pizzaIndexes.join(' ');
        out += '\n';
    }
    return out;
}

function writeFile(folder: string, score: number, data: string) : void{
    fileWriter.writeFile(`../pizza/outputs/${folder}/${score}.txt`, data);
}
