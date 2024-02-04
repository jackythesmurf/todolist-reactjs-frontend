import { render, screen } from '@testing-library/react';
import Modal from '../../src/components/Model';
import { describe, it, expect } from 'vitest';

describe('Modal component', () => {
    it('renders children and is visible when isOpen is true', () => {
        render(
            <Modal isOpen={true} onClose={() => {}}>
                <div>Modal Content</div>
            </Modal>,
        );
        expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    it('does not render when isOpen is false', () => {
        render(
            <Modal isOpen={false} onClose={() => {}}>
                <div>Modal Content</div>
            </Modal>,
        );
        expect(
            screen.queryByText('Modal Content'),
        ).not.toBeInTheDocument();
    });
});
