import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import ChatBox from './ChatBox';
import { useChat } from '../hooks/useChat';

export default function ChatModal({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}): JSX.Element {
    const { messages, sendMessage, isLoading, clearMessages } = useChat();
    const onCloseModal = () => {
        clearMessages();
        onClose();
    };
    const onMinimizeModal = () => {
        onClose();
    };
    return (
        <Modal
            open={open}
            onClose={onCloseModal}
            showCloseIcon={false}
            classNames={{
                modal: '!h-[calc(100%-theme(space.5)*2)] w-[calc(100%-theme(space.5)*2)] !p-0 !m-5 !overflow-hidden dark:bg-gray-800 rounded-md',
                overlay: 'dark:!bg-black/75',
            }}
        >
            <ChatBox
                onMinimize={onMinimizeModal}
                onClose={onCloseModal}
                messages={messages}
                sendMessage={sendMessage}
                isLoading={isLoading}
                clearMessages={clearMessages}
            />
        </Modal>
    );
}
