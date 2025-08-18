import React from 'react';
import TextType from '../components/TextType';
export default function EmptyState(): JSX.Element {
    return (
        <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400 transition-colors">
            <div className="text-center">
                <div className="text-lg mb-2">👋</div>
                <TextType
                    text="안녕하세요! 무엇을 도와드릴까요?"
                    textClassName="text-black dark:text-white"
                    showCursor={false}
                />
            </div>
        </div>
    );
}
