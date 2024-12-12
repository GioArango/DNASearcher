import { MutantController } from '../controllers/mutants/controller.js';
import { MutantServices } from '../services/mutants/services.js';

export const handler = async (event) => {
    try {
        console.log("EVENT", event, typeof event)

        const mutantService = new MutantServices();
        const mutantController = new MutantController(mutantService);

        const body = JSON.parse(event.body);
        const { dna } = body;

        const result = await mutantController.searchMutant(dna);

        return {
            statusCode: result ? 200 : 403
        }
    } catch (error) {
        return {
            statusCode: error.statusCode || 500
        }
    }
};