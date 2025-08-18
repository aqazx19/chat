"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_markdown_1 = __importDefault(require("react-markdown"));
const remark_gfm_1 = __importDefault(require("remark-gfm"));
const rehype_highlight_1 = __importDefault(require("rehype-highlight"));
require("highlight.js/styles/github-dark.css");
function MarkdownContent({ children }) {
    return ((0, jsx_runtime_1.jsx)(react_markdown_1.default, { rehypePlugins: [[rehype_highlight_1.default, { detect: true, ignoreMissing: true }]], remarkPlugins: [remark_gfm_1.default], children: children }));
}
exports.default = react_1.default.memo(MarkdownContent);
