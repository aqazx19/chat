"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatHeader;
const jsx_runtime_1 = require("react/jsx-runtime");
const IconButton_1 = __importDefault(require("../components/IconButton"));
function ChatHeader({ title = "채팅", onClose, onMinimize, }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600 transition-colors", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-8 h-8 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center", children: (0, jsx_runtime_1.jsx)("span", { className: "text-white text-sm font-semibold", children: "\uD83D\uDCAC" }) }), (0, jsx_runtime_1.jsx)("h1", { className: "text-lg font-semibold text-gray-800 dark:text-gray-100", children: title })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-1", children: [onMinimize && ((0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: onMinimize, title: "\uCD5C\uC18C\uD654", children: (0, jsx_runtime_1.jsx)("svg", { className: "w-4 h-4 text-gray-500 dark:text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20 12H4" }) }) })), onClose && ((0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: onClose, title: "\uB2EB\uAE30", children: (0, jsx_runtime_1.jsx)("svg", { className: "w-4 h-4 text-gray-500 dark:text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }))] })] }));
}
