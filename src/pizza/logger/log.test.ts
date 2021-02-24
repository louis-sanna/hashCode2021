import { log } from './log';

describe.skip('log', () => {
    it('should write the submission in a file', () => {
        const submission = {
            numberOfPizza: 0,
            deliveries: []
        };

        log(submission, 'tests', 0);
    });

    it('should write the submission in a file with the correct structure', () => {
        const submission = {
            numberOfPizza: 2,
            deliveries: [
                { pizzaIndexes: [1, 4]},
                { pizzaIndexes: [0, 2, 3]}
            ]
        };

        log(submission, 'tests', 0);
    });
});
