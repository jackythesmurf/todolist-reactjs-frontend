import React, { useState, useRef, useEffect } from 'react';

interface SortButtonProps {
    handleSortOptionChange: (option: string) => void;
}

const SortButton: React.FC<SortButtonProps> = ({
    handleSortOptionChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('endDate');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const options = [
        { label: 'Sort by Soonest Start Date', value: 'startDate' },
        { label: 'Sort by Soonest End Date', value: 'endDate' },
    ];

    const handleSelectOption = (value: string) => {
        const optionLabel = options.find(
            (opt) => opt.value === value,
        )?.label;
        if (optionLabel) {
            setSelectedOption(value);
            handleSortOptionChange(value);
            setIsOpen(false);
        }
    };

    return (
        <div className="relative inline-block w-60" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="block w-full rounded bg-blue-500 px-4 py-2 leading-tight text-white hover:bg-blue-700 focus:outline-none"
            >
                {options.find((opt) => opt.value === selectedOption)
                    ?.label || 'Sort Options'}
            </button>
            {isOpen && (
                <div className="absolute left-0 right-0 z-10 mt-1 rounded bg-white shadow-lg">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() =>
                                handleSelectOption(option.value)
                            }
                            className="cursor-pointer px-4 py-2 hover:bg-blue-500 hover:text-white"
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SortButton;
