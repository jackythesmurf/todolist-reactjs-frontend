import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../../src/components/SearchBar';
import { describe, it, expect, vi } from 'vitest';

describe('SearchBar component', () => {
    it('allows user input and calls setSearchTerm with the new value', () => {
        const setSearchTermMock = vi.fn();
        const initialSearchTerm = '';

        render(
            <SearchBar
                searchTerm={initialSearchTerm}
                setSearchTerm={setSearchTermMock}
            />,
        );

        const input = screen.getByPlaceholderText('Automatic search');
        expect(input).toBeInTheDocument();

        const newSearchTerm = 'React';
        fireEvent.change(input, { target: { value: newSearchTerm } });

        expect(setSearchTermMock).toHaveBeenCalledWith(newSearchTerm);
    });
});
