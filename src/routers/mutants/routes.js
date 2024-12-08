import { Router } from "express";
import { MutantController } from "../../controllers/mutants/controller.js";
import { MutantServices } from "../../services/mutants/services.js";
import { validations } from "../../middlewares/validations.js";

class MutantsRoutes {

    static get routes() {
        const router = Router()

        const mutantServices = new MutantServices()
        const mutantController = new MutantController(mutantServices) 

        router.post("/mutant", validations, mutantController.searchMutant)

        return router
    }
}

export { MutantsRoutes }