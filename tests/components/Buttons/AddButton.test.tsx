import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import AddButton from '../../../src/components/Buttons/AddButton'; 
import { describe, it, vi, expect, afterEach } from 'vitest';

describe('AddButton', () => {
    
    afterEach(() => {
        cleanup();
    });

    it('should render the add task button', () => {
        render(<AddButton toggleForm={vi.fn()} />);
        const button = screen.getByRole('button', {
            name: /add task/i,
        });

        expect(button).toBeInTheDocument();
    });

    it('should call toggleForm when clicked', () => {
        const toggleFormMock = vi.fn();
        render(<AddButton toggleForm={toggleFormMock} />);
        const button = screen.getByRole('button', {
            name: /add task/i,
        });

        fireEvent.click(button);
        expect(toggleFormMock).toHaveBeenCalledTimes(1);
    });

    it('renders with correct initial styling', () => {
        render(<AddButton toggleForm={vi.fn()} />);
        const button = screen.getByRole('button', {
            name: /add task/i,
        });

        expect(button).toHaveClass(
            'rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-700',
        );
    });

    it('displays the correct button text', () => {
        render(<AddButton toggleForm={vi.fn()} />);
        const button = screen.getByRole('button');

        expect(button).toHaveTextContent('Add Task');
    });
});
