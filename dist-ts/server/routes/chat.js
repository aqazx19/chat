"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const openai_1 = __importDefault(require("openai"));
const chat_1 = require("../controllers/chat");
let openai;
function default_1(router) {
    const { BASE_URL = '', API_KEY } = process.env;
    openai = new openai_1.default({
        baseURL: BASE_URL,
        apiKey: API_KEY,
    });
    router.post('/chat/messages', (0, chat_1.chatMessagesHandler)(openai));
}
