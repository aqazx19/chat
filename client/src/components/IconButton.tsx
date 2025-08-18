import React from 'react';

interface IconButtonProps {
  onClick?: () => void;
  title: string;
  children: React.ReactNode;
}

export default function IconButton({ onClick, title, children }: IconButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-colors"
      title={title}
    >
      {children}
    </button>
  );
}
