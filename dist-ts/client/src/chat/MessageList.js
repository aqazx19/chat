"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MessageList;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const MessageItem_1 = __importDefault(require("./MessageItem"));
const EmptyState_1 = __importDefault(require("./EmptyState"));
const useAutoScroll = (dependency) => {
    const messagesEndRef = (0, react_1.useRef)(null);
    const scrollToBottom = (0, react_1.useCallback)(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);
    (0, react_1.useEffect)(() => {
        scrollToBottom();
    }, dependency);
    return messagesEndRef;
};
function MessageList({ messages, isLoading, }) {
    const messagesEndRef = useAutoScroll([messages]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: messages.length === 0 ? ((0, jsx_runtime_1.jsx)(EmptyState_1.default, {})) : (messages.map((message, idx) => ((0, jsx_runtime_1.jsx)(MessageItem_1.default, { message: message, isLoading: isLoading &&
                message.role === 'assistant' &&
                messages.length - 1 === idx }, message.id)))) }));
}
