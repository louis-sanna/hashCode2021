import { parseInput } from '../../parser';
import { score } from '../../scorer';
import { log } from '../../logger';
import { Input, Submission } from '../../entities';
import { solve } from './solve';

console.log('Start solving HASH CODE 2021!');

const problem = 'E';

const parsedInput : Input = parseInput(problem);
let bestScore  = 0;

// eslint-disable-next-line no-constant-condition
while(true){
    const submission : Submission = solve(parsedInput);
    const totalScore : number = score(submission, parsedInput);

    if(totalScore > bestScore){
        console.log(`For problem ${problem}, we found a solution scored: ${totalScore}`);

        log(submission, problem, totalScore);
        bestScore = totalScore;
    }
}

