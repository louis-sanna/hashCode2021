import { v4 as uuid } from 'uuid';
import { fileWriter } from '../../utils';
import { Submission } from '../entities';

export function log(submission: Submission, folder: string): void {
    const submissionFile = buildSubmissionFile(submission);
    writeFile(folder, submissionFile);
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

function writeFile(folder: string, data: string) : void{
    fileWriter.writeFile(`../pizza/outputs/${folder}/${uuid()}.txt`, data);
}
