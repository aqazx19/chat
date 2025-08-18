// 개발 환경에서는 proxy를 사용하기 위해 상대 경로 사용
const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';
function buildUrl(url: string, params?: Record<string, string>): string {
    if (!params) {
        return `${API_BASE_URL}${url}`;
    }
    const queryString = new URLSearchParams(params).toString();
    return `${API_BASE_URL}${url}${queryString ? `?${queryString}` : ''}`;
}

// 기본 fetch 옵션
const defaultOptions: RequestInit = {
    headers: {
        'Content-Type': 'application/json',
    },
};

// 공통 fetch 래퍼
async function apiRequest(url: string, options: RequestInit = {}): Promise<Response> {
    const token = localStorage.getItem('authToken');
    
    const config: RequestInit = {
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

interface ApiOptions {
    raw?: boolean; // true면 Response 객체 반환, false면 JSON 파싱 (기본값: false)
}

export const api = {
    // GET 요청
    get: async (url: string, query?: Record<string, string>, options?: ApiOptions) => {
        const response = await apiRequest(buildUrl(url, query), { method: 'GET' });
        return options?.raw ? response : response.json();
    },

    // POST 요청
    post: async (url: string, data?: any, options?: ApiOptions) => {
        const response = await apiRequest(buildUrl(url), {
            method: 'POST',
            body: data ? JSON.stringify(data) : undefined,
        });
        return options?.raw ? response : response.json();
    },

    // PUT 요청
    put: async (url: string, data?: any, options?: ApiOptions) => {
        const response = await apiRequest(buildUrl(url), {
            method: 'PUT',
            body: data ? JSON.stringify(data) : undefined,
        });
        return options?.raw ? response : response.json();
    },

    // PATCH 요청
    patch: async (url: string, data?: any, options?: ApiOptions) => {
        const response = await apiRequest(buildUrl(url), {
            method: 'PATCH',
            body: data ? JSON.stringify(data) : undefined,
        });
        return options?.raw ? response : response.json();
    },

    // DELETE 요청
    delete: async (url: string, options?: ApiOptions) => {
        const response = await apiRequest(buildUrl(url), { method: 'DELETE' });
        return options?.raw ? response : response.json();
    },
};

// 채팅 관련 API
export const chatApi = {
    // 메시지 전송
    sendMessage: (message: string) => {
        return api.post('/chat/messages', { message });
    },
};
