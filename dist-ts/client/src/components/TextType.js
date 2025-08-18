"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const gsap_1 = require("gsap");
const TextType = ({ text, as: Component = 'div', typingSpeed = 50, initialDelay = 0, pauseDuration = 2000, deletingSpeed = 30, loop = true, className = '', textClassName = '', showCursor = true, hideCursorWhileTyping = false, cursorCharacter = '|', cursorClassName = '', cursorBlinkDuration = 0.5, textColors = [], variableSpeed, onSentenceComplete, startOnVisible = false, reverseMode = false, ...props }) => {
    const [displayedText, setDisplayedText] = (0, react_1.useState)('');
    const [currentCharIndex, setCurrentCharIndex] = (0, react_1.useState)(0);
    const [isDeleting, setIsDeleting] = (0, react_1.useState)(false);
    const [currentTextIndex, setCurrentTextIndex] = (0, react_1.useState)(0);
    const [isVisible, setIsVisible] = (0, react_1.useState)(!startOnVisible);
    const cursorRef = (0, react_1.useRef)(null);
    const containerRef = (0, react_1.useRef)(null);
    const textArray = Array.isArray(text) ? text : [text];
    const getRandomSpeed = () => {
        if (!variableSpeed)
            return typingSpeed;
        const { min, max } = variableSpeed;
        return Math.random() * (max - min) + min;
    };
    const getCurrentTextColor = () => {
        if (textColors.length === 0)
            return '#000000';
        return textColors[currentTextIndex % textColors.length];
    };
    (0, react_1.useEffect)(() => {
        if (!startOnVisible || !containerRef.current)
            return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, { threshold: 0.1 });
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [startOnVisible]);
    (0, react_1.useEffect)(() => {
        if (showCursor && cursorRef.current) {
            gsap_1.gsap.set(cursorRef.current, { opacity: 1 });
            gsap_1.gsap.to(cursorRef.current, {
                opacity: 0,
                duration: cursorBlinkDuration,
                repeat: -1,
                yoyo: true,
                ease: 'power2.inOut',
            });
        }
    }, [showCursor, cursorBlinkDuration]);
    (0, react_1.useEffect)(() => {
        if (!isVisible)
            return;
        let timeout;
        const currentText = textArray[currentTextIndex];
        const processedText = reverseMode
            ? currentText.split('').reverse().join('')
            : currentText;
        const executeTypingAnimation = () => {
            if (isDeleting) {
                if (displayedText === '') {
                    setIsDeleting(false);
                    if (currentTextIndex === textArray.length - 1 && !loop) {
                        return;
                    }
                    if (onSentenceComplete) {
                        onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
                    }
                    setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
                    setCurrentCharIndex(0);
                    timeout = setTimeout(() => { }, pauseDuration);
                }
                else {
                    timeout = setTimeout(() => {
                        setDisplayedText((prev) => prev.slice(0, -1));
                    }, deletingSpeed);
                }
            }
            else {
                if (currentCharIndex < processedText.length) {
                    timeout = setTimeout(() => {
                        setDisplayedText((prev) => prev + processedText[currentCharIndex]);
                        setCurrentCharIndex((prev) => prev + 1);
                    }, variableSpeed ? getRandomSpeed() : typingSpeed);
                }
                else if (textArray.length > 1) {
                    timeout = setTimeout(() => {
                        setIsDeleting(true);
                    }, pauseDuration);
                }
            }
        };
        if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
            timeout = setTimeout(executeTypingAnimation, initialDelay);
        }
        else {
            executeTypingAnimation();
        }
        return () => clearTimeout(timeout);
    }, [
        currentCharIndex,
        displayedText,
        isDeleting,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
        textArray,
        currentTextIndex,
        loop,
        initialDelay,
        isVisible,
        reverseMode,
        variableSpeed,
        onSentenceComplete,
    ]);
    const shouldHideCursor = hideCursorWhileTyping &&
        (currentCharIndex < textArray[currentTextIndex].length || isDeleting);
    return (0, react_1.createElement)(Component, {
        ref: containerRef,
        className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
        ...props,
    }, (0, jsx_runtime_1.jsx)("span", { className: `inline ${textClassName}`, children: displayedText }), showCursor && ((0, jsx_runtime_1.jsx)("span", { ref: cursorRef, className: `ml-1 inline-block opacity-100 ${shouldHideCursor ? 'hidden' : ''} ${cursorClassName}`, children: cursorCharacter })));
};
exports.default = TextType;
