import React, { useEffect, useRef, useState } from 'react';
import { SendMessageResponse } from './types';
import { formatTime } from '../../utils';
import MarkdownContent from './components/MarkdownContent';
import TypingDots from './components/TypingDots';

type AssistantMessageProps = {
    message: SendMessageResponse;
    isLoading: boolean;
};

function AssistantMessage({ message, isLoading }: AssistantMessageProps): JSX.Element {
    const [displayedContent, setDisplayedContent] = useState<string>('');
    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        const target = message.content ?? '';
        let index = Math.min(displayedContent.length, target.length);

        const step = () => {
            if (index < target.length) {
                index += 2;
                setDisplayedContent(target.slice(0, index));
                timerRef.current = window.setTimeout(step, 8);
            } else {
                if (displayedContent.length !== target.length) {
                    setDisplayedContent(target);
                }
            }
        };

        step();

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [message.content]);

    return (
        <div className="flex justify-start mb-4">
            <div className="flex items-start gap-3 max-w-full">
                <div className="flex-1 min-w-0 text-gray-800 dark:text-gray-100 text-sm md:text-base prose prose-sm dark:prose-invert max-w-none">
                    {isLoading && (
                        <TypingDots className="inline-block ml-1 align-baseline opacity-70" />
                    )}
                    <MarkdownContent>{displayedContent}</MarkdownContent>
                    <p className="text-xs opacity-50 mt-2">{formatTime(message.timestamp)}</p>
                </div>
            </div>
        </div>
    );
}

export default React.memo(AssistantMessage);


