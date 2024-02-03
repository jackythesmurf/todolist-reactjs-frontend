import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-40 p-4">
            <div className="relative w-[500px] rounded-lg bg-slate-200 p-5 shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute right-8 top-6 text-lg font-bold"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
