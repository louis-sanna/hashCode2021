import { log } from './log';

describe('log', () => {
    it('should write the submission in a file', () => {
        const submission = {};

        log(submission, 'tests');
    });
});
