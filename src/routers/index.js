import { Router } from "express";
import { MutantsRoutes } from "./mutants/routes.js";

class AppRoutes {
    static get routes() {
        const router = Router();
        router.use('/api/v1/dna', MutantsRoutes.routes);
        return router;
    }
}

export { AppRoutes };
