import { render, screen, fireEvent } from '@testing-library/react';
import TaskDescription from '../../../src/components/Task/TaskDescription.tsx';
import { describe, it, expect} from 'vitest';
import { QueryClient, QueryClientProvider } from 'react-query';

describe('TaskDescription', () => {
    const shortDescription = 'Short description.';
    const longDescription =
        'This is a very long description meant to exceed the maximum length of 50 characters set by the component.';

    it('renders without "Read More" for short descriptions', () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <TaskDescription description={shortDescription} />
            </QueryClientProvider>,
        );
        expect(
            screen.queryByText('Read More'),
        ).not.toBeInTheDocument();
        expect(
            screen.getByText(shortDescription),
        ).toBeInTheDocument();
    });

    it('expands the description when "Read More" is clicked', async () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <TaskDescription description={longDescription} />
            </QueryClientProvider>,
        );
        const readMoreButton = screen.getByText('Read More');
        fireEvent.click(readMoreButton);
        expect(
            screen.queryByText(/Read More/),
        ).not.toBeInTheDocument();
        expect(screen.getByText('Read Less')).toBeInTheDocument();
        expect(screen.getByText(longDescription)).toBeInTheDocument();
    });
});
