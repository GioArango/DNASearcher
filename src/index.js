import { config } from "./config/index.js";
import { AppRoutes } from "./routers/index.js";
import { Server } from "./server.js";

(async () => {
    main();
})();

function main() {
    const app = new Server({
        port: config.PORT,
        routes: AppRoutes.routes
    });

    app.start()
}