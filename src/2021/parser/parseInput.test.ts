import { parseInput } from './parseInput';
import { expect } from 'chai';

describe('parseInput', () => {
    it('should return the parsed input', () => {
        const parsedInput = parseInput('A');

        expect(parsedInput).to.deep.equal({});
    });
});
