export class MutantServices {

    searchHorizontal(matrix, sequenceLength) {
        let countSequences = 0;
    
        for (let row = 0; row < matrix.length; row++) {
            let consecutive = 1;
            for (let col = 1; col < matrix[0].length; col++) {
                if (matrix[row][col] === matrix[row][col - 1]) {
                    consecutive++;
                    if (consecutive === sequenceLength) {
                        countSequences++;
                        break;
                    }
                } else {
                    consecutive = 1;
                }
            }
        }
    
        return countSequences;
    }    

    searchVertical(matrix, sequenceLength) {
        let countSequences = 0;
    
        for (let col = 0; col < matrix[0].length; col++) {
            let consecutive = 1;
            for (let row = 1; row < matrix.length; row++) {
                if (matrix[row][col] === matrix[row - 1][col]) {
                    consecutive++;
                    if (consecutive === sequenceLength) {
                        countSequences++;
                        break;
                    }
                } else {
                    consecutive = 1;
                }
            }
        }
    
        return countSequences;
    }  

    searchMainDiagonals(matrix, sequenceLength) {
        let countSequences = 0;
    
        for (let row = 0; row <= matrix.length - sequenceLength; row++) {
            for (let col = 0; col <= matrix[0].length - sequenceLength; col++) {
                let consecutiveMain = 1;
                for (let step = 1; step < sequenceLength; step++) {
                    if (matrix[row + step][col + step] === matrix[row + step - 1][col + step - 1]) {
                        consecutiveMain++;
                    } else {
                        break;
                    }
                }
                if (consecutiveMain === sequenceLength) countSequences++;
            }
        }
    
        return countSequences;
    }
    
    searchInvertedDiagonals(matrix, sequenceLength) {
        let countSequences = 0;
    
        for (let row = 0; row <= matrix.length - sequenceLength; row++) {
            for (let col = sequenceLength - 1; col < matrix[0].length; col++) {
                let consecutive = 1;
                for (let step = 1; step < sequenceLength; step++) {
                    if (matrix[row + step][col - step] === matrix[row + step - 1][col - step + 1]) {
                        consecutive++;
                    } else {
                        break;
                    }
                }
                if (consecutive === sequenceLength) countSequences++;
            }
        }
    
        return countSequences;
    }    

    searchInvertedDiagonals(matrix, sequenceLength) {
        let countSequences = 0;
    
        for (let row = 0; row <= matrix.length - sequenceLength; row++) {
            for (let col = sequenceLength - 1; col < matrix[0].length; col++) {
                let consecutive = 1;
                for (let step = 1; step < sequenceLength; step++) {
                    if (matrix[row + step][col - step] === matrix[row + step - 1][col - step + 1]) {
                        consecutive++;
                    } else {
                        break;
                    }
                }
                if (consecutive === sequenceLength) countSequences++;
            }
        }
    
        return countSequences;
    }
}