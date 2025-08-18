"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const jsx_runtime_1 = require("react/jsx-runtime");
const FloatButton_1 = __importDefault(require("./FloatButton"));
const DarkModeToggle_1 = __importDefault(require("./components/DarkModeToggle"));
function App() {
    return ((0, jsx_runtime_1.jsxs)("main", { className: "min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white p-6 transition-colors", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center mb-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "md:bg-pink-500 dark:md:bg-pink-600", children: "Hello" }), (0, jsx_runtime_1.jsx)(DarkModeToggle_1.default, {})] }), (0, jsx_runtime_1.jsx)(FloatButton_1.default, {})] }));
}
