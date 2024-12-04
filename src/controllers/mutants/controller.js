class MutantController {
    
    constructor(mutantServices) {
        this.mutantServices = mutantServices
    }

    searchMutant = (req, res) => {
        res.status(200).json({ "response": "ok"})
    }
}

export { MutantController }