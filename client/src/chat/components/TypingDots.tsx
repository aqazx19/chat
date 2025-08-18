import React from 'react';
import { ReactTyped } from 'react-typed';

type TypingDotsProps = {
    className?: string;
    strings?: string[];
};

function TypingDots({ className, strings }: TypingDotsProps): JSX.Element {
    return (
        <span className={className ?? ''}>
            <ReactTyped
                strings={strings || ['.', '..', '...']}
                typeSpeed={80}
                backSpeed={40}
                backDelay={400}
                loop
                smartBackspace
            />
        </span>
    );
}

export default React.memo(TypingDots);


