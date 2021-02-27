import { parseInput } from '../../parser';
import { score2 } from '../../scorer';
import { log } from '../../logger';
import { Input, Submission } from '../../entities';
import { solve } from './solve';
// import { solve } from './defaultSolve';

const score = score2;

console.log('Start solving HASH CODE 2021!');

const problem = 'F';

const parsedInput : Input = parseInput(problem);
let bestScore  = 0;

// eslint-disable-next-line no-constant-condition
while(true){
    const submission : Submission = solve(parsedInput);
    const totalScore : number = score(submission, JSON.parse(JSON.stringify(parsedInput)));

    if(totalScore > bestScore){
        console.log(`For problem ${problem}, we found a solution scored: ${totalScore}`);

        log(submission, problem, totalScore);
        bestScore = totalScore;
    }
}
