import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/Home';
import { describe, it, expect } from 'vitest';

describe('Home component', () => {
    it('renders TaskPage component', () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Home />
            </QueryClientProvider>,
        );

        expect(screen.getByText('My Tasks')).toBeInTheDocument();
    });
});
