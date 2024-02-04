import React from 'react';

interface DeleteButtonProps {
    onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="mt-1 rounded-lg bg-red-500 px-2 py-1 font-semibold text-white hover:bg-red-700"
        >
            Delete
        </button>
    );
};

export default DeleteButton;
