"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouter = createRouter;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function createRouter() {
    const router = express_1.default.Router();
    const routesPath = __dirname;
    fs_1.default.readdirSync(routesPath).forEach((file) => {
        if (file === 'index.ts' || !file.endsWith('.ts'))
            return;
        const modulePath = path_1.default.join(routesPath, file);
        const routeModule = require(modulePath);
        const registerRoutes = routeModule.default;
        if (typeof registerRoutes === 'function') {
            const subRouter = express_1.default.Router();
            registerRoutes(subRouter);
            router.use('/', subRouter);
        }
    });
    return router;
}
