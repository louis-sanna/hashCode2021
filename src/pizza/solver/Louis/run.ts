import { parseInput } from './../../parser';
import { score } from './../../scorer';
import { solve } from './solve';
import { log } from './../../logger';
import { Input, Submission } from './../../entities';

console.log('Start solving HASH CODE 2021!');

const problem = 'D';

const parsedInput : Input = parseInput(problem);
const submission : Submission = solve(parsedInput);
const totalScore : number = score(submission, parsedInput);

console.log(`For problem ${problem}, we found a solution scored: ${totalScore}`);

log(submission, problem, totalScore);
