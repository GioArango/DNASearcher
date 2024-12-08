import { config } from "../config/index.js";
import { buildMatrix } from "../utils/buildMatrix.js";

const validations = (req, res, next) => {
    const handleError = () => {
        res.status(400).json({ msg: "The data are not correct" });
    };

    try {
        const { dna } = req.body;

        if( !dna || dna.length === 0) {
            return handleError()
        }
        
        if (!Array.isArray(dna)) {
            return handleError()
        }
        
        const validChars = /^[ATCG]+$/i
        if (dna.some(sequence => !validChars.test(sequence))) {
            return handleError()
        }
        
        const matrix = buildMatrix(dna);
        if (matrix.some(row => row.length < config.SEQUENCE)) {
            return handleError()
        }

        const allRowsHaveSameLength = matrix.every(row => row.length === matrix[0].length);
        if (!allRowsHaveSameLength) {
            return handleError()
        }
        
        next()
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" })
    }
};

export { validations };
