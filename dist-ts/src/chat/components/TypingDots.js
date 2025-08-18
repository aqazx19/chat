"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_typed_1 = require("react-typed");
function TypingDots({ className, strings }) {
    return ((0, jsx_runtime_1.jsx)("span", { className: className ?? '', children: (0, jsx_runtime_1.jsx)(react_typed_1.ReactTyped, { strings: strings || ['.', '..', '...'], typeSpeed: 80, backSpeed: 40, backDelay: 400, loop: true, smartBackspace: true }) }));
}
exports.default = react_1.default.memo(TypingDots);
