"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const AssistantMessage_1 = __importDefault(require("./AssistantMessage"));
const UserMessage_1 = __importDefault(require("./UserMessage"));
function MessageItem({ message, isLoading }) {
    if (message.role === 'assistant') {
        return (0, jsx_runtime_1.jsx)(AssistantMessage_1.default, { message: message, isLoading: isLoading });
    }
    return (0, jsx_runtime_1.jsx)(UserMessage_1.default, { message: message });
}
exports.default = react_1.default.memo(MessageItem);
