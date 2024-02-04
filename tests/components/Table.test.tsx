import { render, screen } from '@testing-library/react';
import Table from '../../src/components/Table'; 
import { describe, it, expect } from 'vitest';

describe('Table component', () => {
    it('renders correctly with the My Tasks heading', () => {
        render(<Table />);
        expect(screen.getByText('My Tasks')).toBeInTheDocument();
    });
});
