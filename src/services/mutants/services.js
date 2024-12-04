export class MutantServices {

    searchHorizontal(matrix, size, sequenceLength) {
        let countSequences = 0;

        for (let row = 0; row < size; row++) {
            let consecutive = 1;
            for (let col = 1; col < size; col++) {
                if (matrix[row][col] === matrix[row][col - 1]) {
                    consecutive++;
                    if (consecutive === sequenceLength) {
                        countSequences++;
                        break; // Parar en esta fila si encontramos una secuencia
                    }
                } else {
                    consecutive = 1;
                }
            }
        }

        return countSequences;
    }

    searchVertical(matrix, size, sequenceLength) {
        let countSequences = 0;
    
        for (let col = 0; col < size; col++) {
            let consecutive = 1;
            for (let row = 1; row < size; row++) {
                if (matrix[row][col] === matrix[row - 1][col]) {
                    consecutive++;
                    if (consecutive === sequenceLength) {
                        countSequences++;
                        break; // Parar en esta columna si encontramos una secuencia
                    }
                } else {
                    consecutive = 1;
                }
            }
        }
    
        return countSequences;
    }

    searchDiagonals(matrix, size, sequenceLength) {
        let countSequences = 0;
    
        for (let row = 0; row <= size - sequenceLength; row++) {
            for (let col = 0; col <= size - sequenceLength; col++) {
                // Diagonal principal
                let consecutiveMain = 1;
                // Diagonal secundaria
                let consecutiveSecondary = 1;
    
                for (let step = 1; step < sequenceLength; step++) {
                    // Verificar diagonal principal
                    if (matrix[row + step][col + step] === matrix[row + step - 1][col + step - 1]) {
                        consecutiveMain++;
                    }
                    // Verificar diagonal secundaria
                    if (matrix[row + step][col + sequenceLength - step - 1] === matrix[row + step - 1][col + sequenceLength - step]) {
                        consecutiveSecondary++;
                    }
                }
    
                if (consecutiveMain === sequenceLength) countSequences++;
                if (consecutiveSecondary === sequenceLength) countSequences++;
            }
        }
    
        return countSequences;
    }
}