import React from 'react';

interface CompleteButtonProps {
    isComplete: boolean;
    onToggleComplete: () => void;
}

const CompleteButton: React.FC<CompleteButtonProps> = ({
    isComplete,
    onToggleComplete,
}) => {
    return (
        <label className="ml-3 mt-2.5 flex cursor-pointer items-center">
            <input
                type="checkbox"
                className="hidden"
                checked={isComplete}
                onChange={onToggleComplete}
            />
            <div className="relative" onChange={onToggleComplete}>
                <div
                    className={`h-4 w-10 rounded-full shadow-inner transition-colors duration-300 ${isComplete ? 'bg-green-500' : 'bg-gray-400'}`}
                ></div>
                <div
                    className={`absolute -left-1 -top-1 h-6 w-6 transform rounded-full bg-white shadow transition-transform ${isComplete ? 'translate-x-full bg-green-500' : 'translate-x-0 bg-green-500'}`}
                ></div>
            </div>
            <span className="ml-3 text-sm font-medium text-gray-700">
                {isComplete ? 'Completed' : 'Mark as Complete'}
            </span>
        </label>
    );
};

export default CompleteButton;
