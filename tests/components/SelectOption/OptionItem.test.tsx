import { render, screen, fireEvent } from '@testing-library/react';
import OptionItem from '../../../src/components/SelectOption/OptionItem.tsx'; 
import { describe, it, expect, vi } from 'vitest';


describe('OptionItem', () => {
    const label = 'Option Label';
    const value = 'optionValue';
    const onSelectOptionMock = vi.fn();

    it('renders with the correct label', () => {
        render(
            <OptionItem
                value={value}
                label={label}
                onSelectOption={onSelectOptionMock}
            />,
        );
        expect(screen.getByText(label)).toBeInTheDocument();
    });

    it('calls onSelectOption with the correct value when clicked', () => {
        render(
            <OptionItem
                value={value}
                label={label}
                onSelectOption={onSelectOptionMock}
            />,
        );
        const optionItem = screen.getByText(label);
        fireEvent.click(optionItem);
        expect(onSelectOptionMock).toHaveBeenCalledWith(value);
    });
});
