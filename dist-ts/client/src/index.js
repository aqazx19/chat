"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("react-responsive-modal/styles.css");
require("@client/styles/tailwind.css");
const client_1 = require("react-dom/client");
const App_1 = __importDefault(require("@client/App"));
const moment_1 = __importDefault(require("moment"));
const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element #root not found');
}
moment_1.default.locale('ko');
moment_1.default.updateLocale('ko', {
    relativeTime: {
        future: '나중에',
        past: '전',
        s: '몇 초',
    },
});
(0, client_1.createRoot)(rootElement).render((0, jsx_runtime_1.jsx)(App_1.default, {}));
