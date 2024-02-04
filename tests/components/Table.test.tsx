import { render, screen } from '@testing-library/react';
import Table from '../../src/components/Table'; 
import { describe, it, expect } from 'vitest';
import { QueryClient, QueryClientProvider } from 'react-query';

describe('Table component', () => {
    it('renders correctly with the My Tasks heading', () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Table />
            </QueryClientProvider>,
        );
        expect(screen.getByText('My Tasks')).toBeInTheDocument();
    });
});
