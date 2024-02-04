import { render, screen, fireEvent } from '@testing-library/react';
import SortButton from '../../../src/components/SelectOption/SortButton.tsx'; 
import { describe, it, expect, vi } from 'vitest';


describe('SortButton', () => {
    const handleSortOptionChangeMock = vi.fn();

    it('renders with the initial selected option', () => {
        render(
            <SortButton
                handleSortOptionChange={handleSortOptionChangeMock}
            />,
        );
        
        expect(
            screen.getByText('Sort by Soonest End Date'),
        ).toBeInTheDocument();
    });

    it('toggles the dropdown menu on button click', () => {
        render(
            <SortButton
                handleSortOptionChange={handleSortOptionChangeMock}
            />,
        );
        const button = screen.getByText('Sort by Soonest End Date');
        fireEvent.click(button); 
        expect(
            screen.getByText('Sort by Soonest Start Date'),
        ).toBeVisible();

        fireEvent.click(button);
    });

    it('updates the selected option and calls handleSortOptionChange when an option is selected', () => {
        render(
            <SortButton
                handleSortOptionChange={handleSortOptionChangeMock}
            />,
        );
        const button = screen.getByText('Sort by Soonest End Date');
        fireEvent.click(button); 

        const optionToSelect = screen.getByText(
            'Sort by Soonest Start Date',
        );
        fireEvent.click(optionToSelect);

        expect(handleSortOptionChangeMock).toHaveBeenCalledWith(
            'startDate',
        );
        expect(
            screen.getByText('Sort by Soonest Start Date'),
        ).toBeInTheDocument(); 
    });
});
