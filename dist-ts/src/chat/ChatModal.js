"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const Modal_1 = __importDefault(require("../components/Modal"));
const ChatBox_1 = __importDefault(require("./ChatBox"));
const useChat_1 = require("../hooks/useChat");
function ChatModal({ open, onClose, }) {
    const { messages, sendMessage, isLoading, clearMessages } = (0, useChat_1.useChat)();
    const onCloseModal = () => {
        clearMessages();
        onClose();
    };
    const onMinimizeModal = () => {
        onClose();
    };
    return ((0, jsx_runtime_1.jsx)(Modal_1.default, { open: open, onClose: onCloseModal, showCloseIcon: false, children: (0, jsx_runtime_1.jsx)(ChatBox_1.default, { onMinimize: onMinimizeModal, onClose: onCloseModal, messages: messages, sendMessage: sendMessage, isLoading: isLoading, clearMessages: clearMessages }) }));
}
