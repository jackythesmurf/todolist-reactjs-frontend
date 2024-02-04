import React, { useState } from 'react';

interface TaskDescriptionProps {
    description: string;
}

const TaskDescription: React.FC<TaskDescriptionProps> = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 50;

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="shadow-x mt-2 rounded-lg border border-gray-200 bg-stone-50 p-4 shadow-inner">
            <div className="overflow-hidden text-sm">
                <p className="leading-relaxed text-gray-500">
                    {description.length > maxLength && !isExpanded
                        ? `${description.substring(0, maxLength)}  . . . `
                        : description}
                </p>
            </div>

            {description.length > maxLength && (
                <button
                    onClick={toggleExpand}
                    className="mt-2 text-xs text-blue-500 transition-colors duration-300 hover:text-blue-700"
                >
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            )}
        </div>
    );
};

export default TaskDescription;
