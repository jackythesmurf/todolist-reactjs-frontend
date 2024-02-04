import { render, screen, fireEvent } from '@testing-library/react';
import CompleteButton from '../../../src/components/Buttons/CompleteButton';
import {
    describe,
    it,
    expect,
    vi,
    beforeEach,
    afterEach,
} from 'vitest';
import React from 'react';

describe('CompleteButton', () => {
    

    it('renders with "Mark as Complete" for incomplete tasks', () => {
        render(
            <CompleteButton
                isComplete={false}
                onToggleComplete={vi.fn()}
            />,
        );
        expect(
            screen.getByText('Mark as Complete'),
        ).toBeInTheDocument();
       
        const slider = screen.getByRole('checkbox');
        expect(slider).not.toBeChecked();
    });

    it('renders with "Completed" for complete tasks', () => {
        render(
            <CompleteButton
                isComplete={true}
                onToggleComplete={vi.fn()}
            />,
        );
        expect(screen.getByText('Completed')).toBeInTheDocument();
       
        const slider = screen.getByRole('checkbox');
        expect(slider).toBeChecked();
    });

    it('calls onToggleComplete when clicked', async () => {
        const onToggleCompleteMock = vi.fn();
        render(
            <CompleteButton
                isComplete={false}
                onToggleComplete={onToggleCompleteMock}
            />,
        );
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(onToggleCompleteMock).toHaveBeenCalledTimes(1);
    });
});
