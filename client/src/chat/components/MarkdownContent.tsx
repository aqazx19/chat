import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

type MarkdownContentProps = {
    children: string;
};

function MarkdownContent({ children }: MarkdownContentProps): JSX.Element {
    return (
        <ReactMarkdown
            rehypePlugins={[[rehypeHighlight, { detect: true, ignoreMissing: true }]]}
            remarkPlugins={[remarkGfm]}
        >
            {children}
        </ReactMarkdown>
    );
}

export default React.memo(MarkdownContent);


