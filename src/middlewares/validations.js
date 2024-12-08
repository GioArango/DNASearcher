import { config } from "../config/index.js";
import { buildMatrix } from "../utils/buildMatrix.js";

const validations = (req, res, next) => {
    const handleError = () => {
        res.status(400).json({ msg: "The data are not correct" });
    };

    try {
        const { dna } = req.body;

        console.log (dna)

        if( !dna || dna.length === 0) {
            console.log("1")
            return handleError()
        }
        
        if (!Array.isArray(dna)) {
            console.log("2")
            return handleError()
        }
        
        const validChars = /^[ATCG]+$/i
        if (dna.some(sequence => !validChars.test(sequence))) {
            return handleError()
        }
        
        const matrix = buildMatrix(dna);
        if (matrix.some(row => row.length < config.SEQUENCE)) {
            console.log("4")
            return handleError()
        }

        const allRowsHaveSameLength = matrix.every(row => row.length === matrix[0].length);
        if (!allRowsHaveSameLength) {
            console.log("5")
            return handleError()
        }
        
        next()
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" })
    }
};

export { validations };
