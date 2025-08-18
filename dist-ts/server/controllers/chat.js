"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatMessagesHandler = chatMessagesHandler;
const SYSTEM_PROMPT = `
저는 유용한 AI 어시스턴트입니다.
 만약 특정 정보를 찾아야 하거나 계산이 필요하면 제가 가지고 있는 도구를 사용할 수 있습니다.
 하지만 일반적인 질문에는 최선을 다해 답변해 드릴 것입니다.'
답변은 항상 마크다운으로 답하고 보기좋게 간격을 두세요.
`;
function chatMessagesHandler(openai) {
    return async function handleChatMessages(req, res) {
        let messages = req.body?.messages;
        if (!Array.isArray(messages) || messages.length === 0) {
            res.status(401).json({ error: 'Invalid messages' });
            return;
        }
        const userMessage = messages[messages.length - 1];
        if (userMessage.role !== 'user') {
            res.status(401).json({ error: 'Invalid message role' });
            return;
        }
        const currentMessages = [
            messages[0] && messages[0].role === 'system'
                ? messages[0]
                : {
                    role: 'system',
                    content: SYSTEM_PROMPT,
                },
            ...messages.map((message) => ({
                role: message.role,
                content: message.content,
            })),
        ];
        try {
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');
            res.flushHeaders?.();
            const chatCompletionParams = {
                model: process.env.MODEL || 'gemini-2.5-flash',
                messages: currentMessages,
                stream: true,
                reasoning_effort: 'low',
            };
            const streamResponse = (await openai.chat.completions.create(chatCompletionParams, {}));
            for await (const chunk of streamResponse) {
                const delta = chunk.choices?.[0]?.delta;
                const content = delta?.content || '';
                if (content) {
                    res.write(`data: ${JSON.stringify({ content })}\n\n`);
                }
            }
            res.write('data: [DONE]\n\n');
            res.end();
        }
        catch (error) {
            console.error('AI 응답 처리 중 오류 발생:', error);
            res.status(500).json({
                message: error instanceof Error ? error.message : String(error),
            });
        }
    };
}
