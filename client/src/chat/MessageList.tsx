import React, { useCallback, useEffect, useRef } from 'react';
import { SendMessageResponse } from './types';
import MessageItem from './MessageItem';
import EmptyState from './EmptyState';

const useAutoScroll = (dependency: any[]) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, dependency);

    return messagesEndRef;
};

export default function MessageList({
    messages,
    isLoading,
}: {
    messages: SendMessageResponse[];
    isLoading: boolean;
}): JSX.Element {
    const messagesEndRef = useAutoScroll([messages]);
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
                <EmptyState />
            ) : (
                messages.map((message, idx) => (
                    <MessageItem
                        key={message.id}
                        message={message}
                        isLoading={
                            isLoading &&
                            message.role === 'assistant' &&
                            messages.length - 1 === idx
                        }
                    />
                ))
            )}
            {/* <div ref={messagesEndRef} /> */}
        </div>
    );
}
