import { Router } from 'express';
import OpenAI from 'openai';
import { chatMessagesHandler } from '../controllers/chat';
let openai: OpenAI;

export default function (router: Router) {
    const { BASE_URL = '', API_KEY } = process.env;
    openai = new OpenAI({
        baseURL: BASE_URL,
        apiKey: API_KEY,
    });
    router.post('/chat/messages', chatMessagesHandler(openai));
}
