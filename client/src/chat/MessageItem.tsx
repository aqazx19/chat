import React from 'react';
import { SendMessageResponse } from './types';
import AssistantMessage from './AssistantMessage';
import UserMessage from './UserMessage';

type MessageItemProps = {
    message: SendMessageResponse;
    isLoading: boolean;
};

function MessageItem({ message, isLoading }: MessageItemProps): JSX.Element {
    if (message.role === 'assistant') {
        return <AssistantMessage message={message} isLoading={isLoading} />;
    }
    return <UserMessage message={message} />;
}

export default React.memo(MessageItem);
