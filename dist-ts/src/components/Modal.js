"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Modal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_responsive_modal_1 = require("react-responsive-modal");
function Modal({ open, onClose = () => { }, children, center = true, showCloseIcon = false, }) {
    return ((0, jsx_runtime_1.jsx)(react_responsive_modal_1.Modal, { open: open, onClose: onClose, center: center, showCloseIcon: showCloseIcon, classNames: {
            modal: '!h-[calc(100%-theme(space.5)*2)] w-[calc(100%-theme(space.5)*2)] !p-0 !m-5 !overflow-hidden dark:bg-gray-800 rounded-md',
            overlay: 'dark:!bg-black/75',
        }, children: children }));
}
