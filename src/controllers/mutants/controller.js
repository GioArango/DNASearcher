import { config } from "../../config/index.js"
import { buildMatrix } from "../../utils/buildMatrix.js"
import { validateDNA } from "../../utils/validateDNA.js"

class MutantController {

    constructor(mutantServices) {
        this.mutantServices = mutantServices
    }

    async searchMutant(dna) {
        validateDNA(dna)

        const matrix = buildMatrix(dna)

        const sequenceLength = config.SEQUENCE

        const totalSequence =
            this.mutantServices.searchHorizontal(matrix, sequenceLength) +
            this.mutantServices.searchVertical(matrix, sequenceLength) +
            this.mutantServices.searchMainDiagonals(matrix, sequenceLength) +
            this.mutantServices.searchInvertedDiagonals(matrix, sequenceLength)

        return totalSequence > 1;
    }
}

export { MutantController }