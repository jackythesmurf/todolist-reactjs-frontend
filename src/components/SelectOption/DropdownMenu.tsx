import React from 'react';
import OptionItem from './OptionItem';
interface DropdownMenuProps {
    options: { label: string; value: string }[];
    onSelectOption: (value: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
    options,
    onSelectOption,
}) => {
    return (
        <div className="absolute left-0 right-0 z-10 mt-1 rounded bg-white shadow-lg">
            {options.map((option) => (
                <OptionItem
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    onSelectOption={onSelectOption}
                />
            ))}
        </div>
    );
};

export default DropdownMenu;
