"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = Number(process.env.PORT || 4000);
app.use(express_1.default.json());
const clientDistDir = path_1.default.resolve(process.cwd(), 'client/dist');
app.use('/api', (0, routes_1.createRouter)());
app.get('/health', (_req, res) => {
    res.json({ ok: true });
});
app.use(express_1.default.static(clientDistDir));
app.get('*', (_req, res) => {
    res.sendFile(path_1.default.join(clientDistDir, 'index.html'));
});
mongoose_1.default
    .connect(process.env.MONGO_URI || '')
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
})
    .catch((err) => console.error(err));
