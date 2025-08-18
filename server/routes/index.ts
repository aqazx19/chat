import express from 'express';
import fs from 'fs';
import path from 'path';

export function createRouter(): express.Router {
    const router = express.Router();
    const routesPath = __dirname;

    fs.readdirSync(routesPath).forEach((file) => {
        if (file === 'index.ts' || !file.endsWith('.ts')) return;
        const modulePath = path.join(routesPath, file);
        const routeModule = require(modulePath);
        const registerRoutes = routeModule.default;

        if (typeof registerRoutes === 'function') {
            const subRouter = express.Router();
            registerRoutes(subRouter);
            router.use('/', subRouter);
        }
    });

    return router;
}