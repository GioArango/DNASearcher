import { config } from "../../config/index.js"
import { buildMatrix } from "../../utils/buildMatrix.js"

class MutantController {
    
    constructor(mutantServices) {
        this.mutantServices = mutantServices
    }

    searchMutant = (req, res) => {
        try {
            const { dna } = req.body
            
            const matrix = buildMatrix(dna)
            const sequenceLength = config.SEQUENCE
    
            const totalSequence =
            this.mutantServices.searchHorizontal(matrix, sequenceLength) + 
            this.mutantServices.searchVertical(matrix, sequenceLength) + 
            this.mutantServices.searchMainDiagonals(matrix, sequenceLength) +
            this.mutantServices.searchInvertedDiagonals(matrix, sequenceLength)
    
            const isMutant = totalSequence > 1;
    
            if(!isMutant) {
                res.status(403).send()
            }
            
            res.status(200).send()            
        } catch (error) {
            res.status(500).json({ msg: `Internal server error: ${error.message}` })
        }
    }
}

export { MutantController }