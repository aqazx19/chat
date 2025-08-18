import React from 'react';
import { ChatHeaderProps } from './types';
import IconButton from '../components/IconButton';

export default function ChatHeader({
  title = "채팅",
  onClose,
  onMinimize,
}: ChatHeaderProps): JSX.Element {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600 transition-colors">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-semibold">💬</span>
        </div>
        <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h1>
      </div>
      
      <div className="flex items-center space-x-1">
        {onMinimize && (
          <IconButton onClick={onMinimize} title="최소화">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </IconButton>
        )}
        
        {onClose && (
          <IconButton onClick={onClose} title="닫기">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        )}
      </div>
    </div>
  );
}