import React from 'react';
import { SendMessageResponse } from './types';
import { formatTime } from '../../utils';

type UserMessageProps = {
    message: SendMessageResponse;
};

function UserMessage({ message }: UserMessageProps): JSX.Element {
    return (
        <div className="flex justify-end mb-4">
            <div className="max-w-[80%] px-4 py-2 rounded-lg bg-blue-500 dark:bg-[#333537] text-white rounded-br-none">
                <p className="text-sm md:text-base">{message.content}</p>
                <p className="text-xs opacity-70 mt-1 text-right">{formatTime(message.timestamp)}</p>
            </div>
        </div>
    );
}

export default React.memo(UserMessage);


