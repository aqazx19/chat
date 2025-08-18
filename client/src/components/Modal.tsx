import React, { useState } from 'react';
import { Modal as ResponsiveModal } from 'react-responsive-modal';

export default function Modal({
    open,
    onClose = () => {},
    children,
    center = true,
    showCloseIcon = false,
    classNames = {},
}: {
    open: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    center?: boolean;
    showCloseIcon?: boolean;
    classNames?: Record<string, string>;
}): JSX.Element {
    return (
        <ResponsiveModal
            open={open}
            onClose={onClose}
            center={center}
            showCloseIcon={showCloseIcon}
            classNames={classNames}
        >
            {children}
        </ResponsiveModal>
    );
}
