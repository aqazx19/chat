import React, { useEffect } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { ChatBoxProps } from './types';
import { useChat } from '../hooks/useChat';

export default function ChatBox({
    title,
    onClose,
    onMinimize,
    messages,
    sendMessage,
    isLoading,
    clearMessages,
}: ChatBoxProps): JSX.Element {
    const handleClose = () => {
        onClose?.();
    };
    return (
        <div className="flex flex-col h-full bg-white dark:bg-[#1b1c1d] rounded-lg overflow-hidden transition-colors">
            <ChatHeader
                title={title}
                onClose={handleClose}
                onMinimize={onMinimize}
            />
            <MessageList messages={messages} isLoading={isLoading} />
            <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
        </div>
    );
}
