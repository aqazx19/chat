import React, { useState } from 'react';
import { Modal as ResponsiveModal } from 'react-responsive-modal';

export default function Modal({
    open,
    onClose = () => {},
    children,
    center = true,
    showCloseIcon = false,
}: {
    open: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    center?: boolean;
    showCloseIcon?: boolean;
}): JSX.Element {
    return (
        <ResponsiveModal
            open={open}
            onClose={onClose}
            center={center}
            showCloseIcon={showCloseIcon}
            classNames={{
                modal: '!h-[calc(100%-theme(space.5)*2)] w-[calc(100%-theme(space.5)*2)] !p-0 !m-5 !overflow-hidden dark:bg-gray-800 rounded-md',
                overlay: 'dark:!bg-black/75',
            }}
        >
            {children}
        </ResponsiveModal>
    );
}
