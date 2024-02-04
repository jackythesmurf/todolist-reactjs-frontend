import {
    render,
    screen,
    fireEvent,
    waitFor,
} from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import TaskForm from '../../src/components/TaskForm';

vi.mock('react-query', () => {
    const originalModule = vi.importActual('react-query');

    return {
        ...originalModule,
        useMutation: vi.fn(() => ({
            mutate: vi.fn(),
            isLoading: false,
            isError: false,
        })),
        useQueryClient: vi.fn(() => ({
            setQueryData: vi.fn(),
        })),
    };
});

vi.mock('../../src/services/create-task', () => ({
    addTask: vi.fn(),
}));

describe('TaskForm component', () => {

    it('renders correctly with all input fields and submit button', () => {
        render(<TaskForm onClose={vi.fn()} />);
        expect(screen.getByLabelText('Name:')).toBeInTheDocument();
        expect(
            screen.getByLabelText('Description:'),
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText('Start Date:'),
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText('End Date:'),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: 'Add Task' }),
        ).toBeInTheDocument();
    });

    it('displays error messages for required fields when empty', async () => {
        render(<TaskForm onClose={vi.fn()} />);
        fireEvent.submit(
            screen.getByRole('button', { name: 'Add Task' }),
        );

        await waitFor(() => {
            expect(
                screen.getByText('Name is required.'),
            ).toBeInTheDocument();
            expect(
                screen.getByText('Description is required.'),
            ).toBeInTheDocument();
            expect(
                screen.getByText('Start Date is required.'),
            ).toBeInTheDocument();
            expect(
                screen.getByText('End Date is required.'),
            ).toBeInTheDocument();
        });
    });
});
