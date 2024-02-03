import React from 'react';

interface AddButtonProps{
    toggleForm: () => void
}

const AddButton: React.FC<AddButtonProps> = ({toggleForm}) => {
    return (
        <button
            onClick={toggleForm}
            className="rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-700"
        >
            Add Task
        </button>
    );
};

export default AddButton;
