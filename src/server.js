import express from 'express';
import cors from 'cors';

class Server {
    constructor(options) {
        const { port, routes } = options
        this.app = express()
        this.port = port
        this.routes = routes
    }

    async start() {

        // middlewares
        this.app.use(cors())
        this.app.use(express.json())

        // routes
        this.app.use(this.routes)

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        });
    }
}

export { Server };
