import { config } from '../config/index.js';
import { buildMatrix } from './buildMatrix.js';

export function validateDNA(dna) {
    if (!dna || dna.length === 0) {
        throw new ValidationError("DNA data is empty");
    }

    if (!Array.isArray(dna)) {
        throw new ValidationError("DNA must be an array");
    }

    const validChars = /^[ATCG]+$/i;
    if (dna.some(sequence => !validChars.test(sequence))) {
        throw new ValidationError("Invalid DNA characters");
    }

    const matrix = buildMatrix(dna);

    if (matrix.some(row => row.length < config.SEQUENCE)) {
        throw new ValidationError("DNA sequence too short");
    }

    const allRowsHaveSameLength = matrix.every(row => row.length === matrix[0].length);
    if (!allRowsHaveSameLength) {
        throw new ValidationError("Inconsistent DNA sequence lengths");
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
        this.statusCode = 400;
    }
}