import { Input, Submission } from '../entities';
import { score } from './score';
import { expect } from 'chai';

describe('score', () => {
    it('should return 0 input is empty', () => {
        const input = <Input>{};
        const submission = <Submission>{};

        const totalScore = score(submission, input);

        expect(totalScore).to.equal(0);
    });
});
