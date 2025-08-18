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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
function ChatInput({ onSendMessage, placeholder = '메시지를 입력하세요...', disabled = false, isLoading = false, }) {
    console.log('ChatInput render');
    const [message, setMessage] = (0, react_1.useState)('');
    const textareaRef = (0, react_1.useRef)(null);
    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
        }
    };
    (0, react_1.useEffect)(() => {
        adjustTextareaHeight();
    }, [message]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() && !disabled) {
            onSendMessage(message.trim());
            setMessage('');
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "border-t border-gray-200 dark:border-gray-600 p-4 transition-colors", children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "flex items-end space-x-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-1 items-center", children: (0, jsx_runtime_1.jsx)("textarea", { ref: textareaRef, value: message, onChange: (e) => setMessage(e.target.value), onKeyPress: handleKeyPress, placeholder: placeholder, disabled: disabled || isLoading, rows: 1, className: "w-full resize-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed overflow-hidden transition-colors", style: {
                            minHeight: '40px',
                            maxHeight: '120px',
                        } }) }), (0, jsx_runtime_1.jsx)("button", { type: "submit", disabled: !message.trim() || disabled || isLoading, className: "flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 dark:bg-blue-600 text-white transition-colors hover:bg-blue-600 dark:hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed", children: (0, jsx_runtime_1.jsx)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) }) })] }) }));
}
exports.default = react_1.default.memo(ChatInput);
