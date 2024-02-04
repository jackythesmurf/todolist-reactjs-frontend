import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import TasksList from '../../../src/components/Task/TasksList';
import { describe, it, expect, vi } from 'vitest';
import { Task } from '../../../src/types/task';
import { UseQueryResult } from 'react-query';

vi.mock('../../../src/services/get-all-task', () => ({
    useGetAllTasks: vi.fn(() => ({
        isLoading: false,
        isError: false,
        data: [
            {
                id: '1',
                name: 'Task 1',
                description: 'This is the first test task.',
                startDate: new Date('2023-01-01'),
                endDate: new Date('2023-01-07'),
                finished: false,
            },
            {
                id: '2',
                name: 'Task 2',
                description: 'This is the second test task.',
                startDate: new Date('2023-02-01'),
                endDate: new Date('2023-02-07'),
                finished: true,
            },
        ],
    })) as unknown as () => UseQueryResult<Task[], Error>, 
}));


describe('TasksList', () => {
    const queryClient = new QueryClient();

    it('renders tasks correctly', async () => {
        
        render(
            <QueryClientProvider client={queryClient}>
                <TasksList />
            </QueryClientProvider>,
        );

        expect(await screen.findByText('Task 1')).toBeInTheDocument();
        expect(
            await screen.findByText('This is the first test task.'),
        ).toBeInTheDocument();
        expect(await screen.findByText('Task 2')).toBeInTheDocument();
        expect(
            await screen.findByText('This is the second test task.'),
        ).toBeInTheDocument();
    });
});
