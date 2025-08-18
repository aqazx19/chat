"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateTime = exports.formatDate = exports.formatTime = void 0;
const moment_1 = __importDefault(require("moment"));
const formatTime = (date = new Date()) => {
    return (0, moment_1.default)(date).format('HH:mm:ss');
};
exports.formatTime = formatTime;
const formatDate = (date = new Date()) => {
    return (0, moment_1.default)(date).format('YYYY-MM-DD');
};
exports.formatDate = formatDate;
const formatDateTime = (date = new Date()) => {
    return (0, moment_1.default)(date).format('YYYY-MM-DD HH:mm:ss');
};
exports.formatDateTime = formatDateTime;
