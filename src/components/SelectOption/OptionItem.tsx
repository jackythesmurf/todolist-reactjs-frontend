import React from 'react';

interface OptionItemProps {
    value: string;
    label: string;
    onSelectOption: (value: string) => void;
}

const OptionItem: React.FC<OptionItemProps> = ({
    value,
    label,
    onSelectOption,
}) => {
    return (
        <div
            onClick={() => onSelectOption(value)}
            className="cursor-pointer px-4 py-2 hover:bg-blue-500 hover:text-white"
        >
            {label}
        </div>
    );
};

export default OptionItem;
