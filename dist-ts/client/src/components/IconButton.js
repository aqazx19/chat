"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = IconButton;
const jsx_runtime_1 = require("react/jsx-runtime");
function IconButton({ onClick, title, children }) {
    return ((0, jsx_runtime_1.jsx)("button", { onClick: onClick, className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-colors", title: title, children: children }));
}
