"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EmptyState;
const jsx_runtime_1 = require("react/jsx-runtime");
const TextType_1 = __importDefault(require("../components/TextType"));
function EmptyState() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center h-full text-gray-500 dark:text-gray-400 transition-colors", children: (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-lg mb-2", children: "\uD83D\uDC4B" }), (0, jsx_runtime_1.jsx)(TextType_1.default, { text: "\uC548\uB155\uD558\uC138\uC694! \uBB34\uC5C7\uC744 \uB3C4\uC640\uB4DC\uB9B4\uAE4C\uC694?", textClassName: "text-black dark:text-white", showCursor: false })] }) }));
}
