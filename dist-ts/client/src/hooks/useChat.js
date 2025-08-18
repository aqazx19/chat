"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChat = useChat;
const react_1 = require("react");
const uuid_1 = require("uuid");
const modules_1 = require("@client/modules");
function useChat() {
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const messagesRef = (0, react_1.useRef)([]);
    (0, react_1.useEffect)(() => {
        messagesRef.current = messages;
    }, [messages]);
    const sendMessage = (0, react_1.useCallback)(async (text) => {
        const userMessage = {
            id: (0, uuid_1.v4)(),
            content: text,
            role: 'user',
            timestamp: new Date(),
        };
        const updatedMessages = [...messagesRef.current, userMessage];
        setMessages(updatedMessages);
        try {
            setIsLoading(true);
            setMessages(prev => [...prev, {
                    id: (0, uuid_1.v4)(),
                    role: 'assistant',
                    content: '',
                    timestamp: new Date(),
                }]);
            const response = await modules_1.api.post('/chat/messages', { messages: updatedMessages }, { raw: true });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const reader = response.body?.getReader();
            if (!reader) {
                throw new Error('스트림을 찾을 수 없습니다');
            }
            const decoder = new TextDecoder('utf-8');
            try {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done)
                        break;
                    const chunk = decoder.decode(value, { stream: true });
                    const lines = chunk.split('\n');
                    for (const line of lines) {
                        if (!line.startsWith('data:'))
                            continue;
                        const contentJson = line.slice(6);
                        if (contentJson.trim() === '[DONE]')
                            continue;
                        try {
                            const { content } = JSON.parse(contentJson);
                            setMessages(prev => {
                                const cloned = [...prev];
                                const lastMessage = cloned[cloned.length - 1];
                                if (lastMessage?.role === 'user') {
                                    cloned.push({
                                        id: (0, uuid_1.v4)(),
                                        role: 'assistant',
                                        content,
                                        timestamp: new Date(),
                                    });
                                }
                                else {
                                    const lastIndex = cloned.length - 1;
                                    cloned[lastIndex] = {
                                        ...cloned[lastIndex],
                                        content: (cloned[lastIndex]?.content ?? '') + content,
                                    };
                                }
                                return cloned;
                            });
                        }
                        catch (error) {
                            continue;
                        }
                    }
                }
            }
            finally {
                reader.releaseLock();
            }
        }
        catch (error) {
            console.error('메시지 전송 실패:', error);
            setMessages(prev => [...prev, {
                    id: (0, uuid_1.v4)(),
                    role: 'assistant',
                    content: '죄송합니다. 메시지 전송 중 오류가 발생했습니다.',
                    timestamp: new Date(),
                }]);
        }
        finally {
            setIsLoading(false);
        }
    }, []);
    const clearMessages = (0, react_1.useCallback)(() => {
        setMessages([]);
    }, []);
    return {
        messages,
        sendMessage,
        clearMessages,
        isLoading,
    };
}
