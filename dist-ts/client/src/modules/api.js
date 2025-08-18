"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatApi = exports.api = void 0;
const API_BASE_URL = '/api';
function buildUrl(url, params) {
    if (!params) {
        return `${API_BASE_URL}${url}`;
    }
    const queryString = new URLSearchParams(params).toString();
    return `${API_BASE_URL}${url}${queryString ? `?${queryString}` : ''}`;
}
// 기본 fetch 옵션
const defaultOptions = {
    headers: {
        'Content-Type': 'application/json',
    },
};
// 공통 fetch 래퍼
async function apiRequest(url, options = {}) {
    const token = localStorage.getItem('authToken');
    const config = {
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultOptions.headers,
            ...options.headers,
            ...(token && { Authorization: `Bearer ${token}` }),
        },
    };
    const response = await fetch(url, config);
    // 401 에러 시 토큰 제거
    if (response.status === 401) {
        localStorage.removeItem('authToken');
    }
    return response;
}
exports.api = {
    // GET 요청
    get: async (url, query, options) => {
        const response = await apiRequest(buildUrl(url, query), { method: 'GET' });
        return options?.raw ? response : response.json();
    },
    // POST 요청
    post: async (url, data, options) => {
        const response = await apiRequest(buildUrl(url), {
            method: 'POST',
            body: data ? JSON.stringify(data) : undefined,
        });
        return options?.raw ? response : response.json();
    },
    // PUT 요청
    put: async (url, data, options) => {
        const response = await apiRequest(buildUrl(url), {
            method: 'PUT',
            body: data ? JSON.stringify(data) : undefined,
        });
        return options?.raw ? response : response.json();
    },
    // PATCH 요청
    patch: async (url, data, options) => {
        const response = await apiRequest(buildUrl(url), {
            method: 'PATCH',
            body: data ? JSON.stringify(data) : undefined,
        });
        return options?.raw ? response : response.json();
    },
    // DELETE 요청
    delete: async (url, options) => {
        const response = await apiRequest(buildUrl(url), { method: 'DELETE' });
        return options?.raw ? response : response.json();
    },
};
// 채팅 관련 API
exports.chatApi = {
    // 메시지 전송
    sendMessage: (message) => {
        return exports.api.post('/chat/messages', { message });
    },
};
