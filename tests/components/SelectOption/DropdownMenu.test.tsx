import { render, screen, fireEvent } from '@testing-library/react';
import DropdownMenu from '../../../src/components/SelectOption/DropdownMenu'; 
import { describe, it, expect, vi } from 'vitest';

describe('DropdownMenu', () => {
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];
    const onSelectOptionMock = vi.fn();

    it('renders the correct number of options', () => {
        render(
            <DropdownMenu
                options={options}
                onSelectOption={onSelectOptionMock}
            />,
        );
   
        options.forEach((option) => {
            expect(
                screen.getByText(option.label),
            ).toBeInTheDocument();
        });
    });

    it('calls onSelectOption with the correct value when an option is selected', async () => {
        render(
            <DropdownMenu
                options={options}
                onSelectOption={onSelectOptionMock}
            />,
        );
        
        const firstOption = screen.getByText(options[0].label);
        fireEvent.click(firstOption);

        expect(onSelectOptionMock).toHaveBeenCalledWith(
            options[0].value,
        );
       
        onSelectOptionMock.mockReset();
    });

  
});
