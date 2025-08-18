"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const utils_1 = require("../../utils");
const MarkdownContent_1 = __importDefault(require("./components/MarkdownContent"));
const TypingDots_1 = __importDefault(require("./components/TypingDots"));
function AssistantMessage({ message, isLoading }) {
    const [displayedContent, setDisplayedContent] = (0, react_1.useState)('');
    const timerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        const target = message.content ?? '';
        let index = Math.min(displayedContent.length, target.length);
        const step = () => {
            if (index < target.length) {
                index += 2;
                setDisplayedContent(target.slice(0, index));
                timerRef.current = window.setTimeout(step, 8);
            }
            else {
                if (displayedContent.length !== target.length) {
                    setDisplayedContent(target);
                }
            }
        };
        step();
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [message.content]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-start mb-4", children: (0, jsx_runtime_1.jsx)("div", { className: "flex items-start gap-3 max-w-full", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 min-w-0 text-gray-800 dark:text-gray-100 text-sm md:text-base prose prose-sm dark:prose-invert max-w-none", children: [isLoading && ((0, jsx_runtime_1.jsx)(TypingDots_1.default, { className: "inline-block ml-1 align-baseline opacity-70" })), (0, jsx_runtime_1.jsx)(MarkdownContent_1.default, { children: displayedContent }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs opacity-50 mt-2", children: (0, utils_1.formatTime)(message.timestamp) })] }) }) }));
}
exports.default = react_1.default.memo(AssistantMessage);
