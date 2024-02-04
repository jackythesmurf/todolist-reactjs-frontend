import { render, screen, fireEvent } from '@testing-library/react';
import DeleteButton from '../../../src/components/Buttons/DeleteButton'; 
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('DeleteButton', () => {
    let onDeleteMock: () => void;

    beforeEach(() => {
        onDeleteMock = vi.fn();
    });

    it('renders with correct text and styling', () => {
        render(<DeleteButton onClick={onDeleteMock} />);
        const button = screen.getByRole('button', {
            name: /delete/i,
        });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass(
            'mt-1 rounded-lg bg-red-500 px-2 py-1 font-semibold text-white hover:bg-red-700',
        );
    });

    it('calls onDelete when clicked', () => {
        render(<DeleteButton onClick={onDeleteMock} />);
        const button = screen.getByRole('button', {
            name: /delete/i,
        });
        fireEvent.click(button);
        expect(onDeleteMock).toHaveBeenCalledTimes(1);
    });
});
