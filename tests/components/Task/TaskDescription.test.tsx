import { render, screen, fireEvent } from '@testing-library/react';
import TaskDescription from '../../../src/components/Task/TaskDescription.tsx';
import { describe, it, expect, vi } from 'vitest';

describe('TaskDescription', () => {
    const shortDescription = 'Short description.';
    const longDescription =
        'This is a very long description meant to exceed the maximum length of 50 characters set by the component.';

    it('renders without "Read More" for short descriptions', () => {
        render(<TaskDescription description={shortDescription} />);
        expect(
            screen.queryByText('Read More'),
        ).not.toBeInTheDocument();
        expect(
            screen.getByText(shortDescription),
        ).toBeInTheDocument();
    });

    it('expands the description when "Read More" is clicked', async () => {
        render(<TaskDescription description={longDescription} />);
        const readMoreButton = screen.getByText('Read More');
        fireEvent.click(readMoreButton);
        expect(
            screen.queryByText(/Read More/),
        ).not.toBeInTheDocument();
        expect(screen.getByText('Read Less')).toBeInTheDocument();
        expect(screen.getByText(longDescription)).toBeInTheDocument();
    });
});
