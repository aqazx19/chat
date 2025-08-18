import { Request, Response } from 'express';
import OpenAI from 'openai';
import {
    ChatCompletionChunk,
    ChatCompletionCreateParams,
    ChatCompletionMessageParam,
} from 'openai/resources';
const SYSTEM_PROMPT = `
저는 유용한 AI 어시스턴트입니다.
 만약 특정 정보를 찾아야 하거나 계산이 필요하면 제가 가지고 있는 도구를 사용할 수 있습니다.
 하지만 일반적인 질문에는 최선을 다해 답변해 드릴 것입니다.'
답변은 항상 마크다운으로 답하세요.
`;
export function chatMessagesHandler(openai: OpenAI) {
    return async function handleChatMessages(req: Request, res: Response) {
        let messages = (req as any).body?.messages;
        if (!Array.isArray(messages) || messages.length === 0) {
            res.status(401).json({ error: 'Invalid messages' });
            return;
        }

        const userMessage = messages[messages.length - 1];
        if (userMessage.role !== 'user') {
            res.status(401).json({ error: 'Invalid message role' });
            return;
        }

        const currentMessages: ChatCompletionMessageParam[] = [
            messages[0] && messages[0].role === 'system'
                ? messages[0]
                : {
                      role: 'system',
                      content: SYSTEM_PROMPT,
                  },
            ...messages.map((message: any) => ({
                role: message.role,
                content: message.content,
            })),
        ];

        try {
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');
            (res as any).flushHeaders?.();

            const chatCompletionParams: ChatCompletionCreateParams = {
                model: process.env.MODEL || 'gemini-2.5-flash',
                messages: currentMessages,
                stream: true,
                reasoning_effort: 'low',
            };

            const streamResponse = (await openai.chat.completions.create(
                chatCompletionParams,
                {}
            )) as AsyncIterable<ChatCompletionChunk>;

            for await (const chunk of streamResponse) {
                const delta = (chunk as any).choices?.[0]?.delta;
                const content = delta?.content || '';
                if (content) {
                    res.write(`data: ${JSON.stringify({ content })}\n\n`);
                }
            }

            res.write('data: [DONE]\n\n');
            res.end();
        } catch (error) {
            console.error('AI 응답 처리 중 오류 발생:', error);
            res.status(500).json({
                message: error instanceof Error ? error.message : String(error),
            });
        }
    };
}
