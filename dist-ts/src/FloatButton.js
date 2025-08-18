"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FloatButton;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ChatModal_1 = __importDefault(require("./chat/ChatModal"));
function FloatButton() {
    const [open, setOpen] = (0, react_1.useState)(false);
    const onOpenModal = () => setOpen(true);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "fixed bottom-4 right-4", children: [(0, jsx_runtime_1.jsx)("button", { onClick: onOpenModal, "aria-label": "Open chat", className: "h-12 w-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500 transition-colors", children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "size-6", children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z", clipRule: "evenodd" }) }) }), (0, jsx_runtime_1.jsx)(ChatModal_1.default, { open: open, onClose: () => setOpen(false) })] }));
}
