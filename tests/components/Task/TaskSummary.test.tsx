import { render, screen } from '@testing-library/react';
import TaskSummary from '../../../src/components/Task/TaskSummary'; 
import { describe, it, expect } from 'vitest';
import { Task } from '../../../src/types/task'; 

describe('TaskSummary', () => {
    it('renders the task details correctly', () => {

        const mockTask: Task = {
            id: '1',
            name: 'Test Task',
            description: 'This is a test description.',
            startDate: new Date('2023-01-01'),
            endDate: new Date('2023-01-07'),
            finished: false,
        };

        render(<TaskSummary task={mockTask} />);

        expect(screen.getByText('Test Task')).toBeInTheDocument();

        expect(
            screen.getByText(/01\/01\/2023\s*\|/),
        ).toBeInTheDocument();

        expect(
            screen.getByText(/\s*07\/01\/2023/),
        ).toBeInTheDocument();


        expect(
            screen.getByText('This is a test description.'),
        ).toBeInTheDocument();
    });
});
