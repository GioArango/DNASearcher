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
            const size = matrix.length
            const sequenceLength = config.SEQUENCE
    
            const totalSequence =
            this.mutantServices.searchHorizontal(matrix, size, sequenceLength) + 
            this.mutantServices.searchVertical(matrix, size, sequenceLength) + 
            this.mutantServices.searchDiagonals(matrix, size, sequenceLength)
    
            const isMutant = totalSequence > 1;
    
            if(!isMutant) {
                res.status(403).send()
            }
            
            res.status(200).send()            
        } catch (error) {
            res.status(500).json({ msg: "Internal server error" })
        }
    }
}

export { MutantController }