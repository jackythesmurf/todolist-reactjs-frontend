import { render, screen, fireEvent } from '@testing-library/react';
import TaskPage from '../../src/pages/TaskPage';
import { describe, it, expect, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from 'react-query';

vi.mock('../components/Modal', () => ({
    __esModule: true,
    default: ({ isOpen, children }: { isOpen: boolean, children: React.ReactNode }) =>
        isOpen ? <div>{children}</div> : null,
}));

describe('TaskPage component', () => {
    it('opens the task form modal upon clicking the add button', async () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <TaskPage />
            </QueryClientProvider>,
        );

        const addButton = screen.getByRole('button', {
            name: 'Add Task',
        });
        expect(addButton).toBeInTheDocument();
        fireEvent.click(addButton);

        expect(screen.getByText('Name:')).toBeInTheDocument(); 
    });

});
