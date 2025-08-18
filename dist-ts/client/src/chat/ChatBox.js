"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatBox;
const jsx_runtime_1 = require("react/jsx-runtime");
const ChatHeader_1 = __importDefault(require("./ChatHeader"));
const MessageList_1 = __importDefault(require("./MessageList"));
const ChatInput_1 = __importDefault(require("./ChatInput"));
function ChatBox({ title, onClose, onMinimize, messages, sendMessage, isLoading, clearMessages, }) {
    const handleClose = () => {
        onClose?.();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col h-full bg-white dark:bg-[#1b1c1d] rounded-lg overflow-hidden transition-colors", children: [(0, jsx_runtime_1.jsx)(ChatHeader_1.default, { title: title, onClose: handleClose, onMinimize: onMinimize }), (0, jsx_runtime_1.jsx)(MessageList_1.default, { messages: messages, isLoading: isLoading }), (0, jsx_runtime_1.jsx)(ChatInput_1.default, { onSendMessage: sendMessage, isLoading: isLoading })] }));
}
