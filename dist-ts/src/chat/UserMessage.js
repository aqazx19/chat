"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../utils");
function UserMessage({ message }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-end mb-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-[80%] px-4 py-2 rounded-lg bg-blue-500 dark:bg-[#333537] text-white rounded-br-none", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm md:text-base", children: message.content }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs opacity-70 mt-1 text-right", children: (0, utils_1.formatTime)(message.timestamp) })] }) }));
}
exports.default = react_1.default.memo(UserMessage);
