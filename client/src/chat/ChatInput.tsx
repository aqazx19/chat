import React, { useState, useRef, useEffect } from 'react';
import { ChatInputProps } from './types';

function ChatInput({
    onSendMessage,
    placeholder = '메시지를 입력하세요...',
    disabled = false,
    isLoading = false,
}: ChatInputProps): JSX.Element {
    console.log('ChatInput render');
    const [message, setMessage] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
        }
    };

    useEffect(() => {
        adjustTextareaHeight();
    }, [message]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim() && !disabled) {
            onSendMessage(message.trim());
            setMessage('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className="border-t border-gray-200 dark:border-gray-600 p-4 transition-colors">
            <form
                onSubmit={handleSubmit}
                className="flex items-end space-x-3"
            >
                <div className="flex flex-1 items-center">
                    <textarea
                        ref={textareaRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={placeholder}
                        disabled={disabled || isLoading}
                        rows={1}
                        className="w-full resize-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed overflow-hidden transition-colors"
                        style={{
                            minHeight: '40px',
                            maxHeight: '120px',
                        }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={!message.trim() || disabled || isLoading}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 dark:bg-blue-600 text-white transition-colors hover:bg-blue-600 dark:hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                    </svg>
                </button>
            </form>
        </div>
    );
}

export default React.memo(ChatInput);