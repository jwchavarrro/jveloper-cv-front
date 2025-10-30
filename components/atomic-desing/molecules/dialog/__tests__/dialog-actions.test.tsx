import { render, screen, fireEvent } from '@testing-library/react';
import { DialogActions } from '@/components/atomic-design/molecules/dialog/dialog-actions';
// import type { ComponentProps } from 'react';
// import { Button } from '@/components/atomic-design/atoms/shadcn/button';

// Mock the custom Button component
jest.mock('@/components/atomic-design/molecules/buttons/button', () => ({
  Button: ({
    text,
    onClick,
    variant,
  }: {
    text?: string;
    onClick?: () => void;
    variant?: string;
  }) => (
    <button
      onClick={onClick}
      role='button'
      data-testid='custom-button'
      data-variant={variant}
    >
      {text}
    </button>
  ),
}));

describe('DialogActions', () => {
  it('renders both buttons by default', () => {
    render(<DialogActions />);

    const buttons = screen.getAllByTestId('custom-button');
    expect(buttons).toHaveLength(2);

    expect(buttons[0]).toHaveTextContent('Cancelar');
    expect(buttons[1]).toHaveTextContent('Confirmar');
  });

  it('renders custom button text', () => {
    render(
      <DialogActions cancelText='Custom Cancel' confirmText='Custom Confirm' />
    );

    const buttons = screen.getAllByTestId('custom-button');

    expect(buttons[0]).toHaveTextContent('Custom Cancel');
    expect(buttons[1]).toHaveTextContent('Custom Confirm');
  });

  it('calls onCancel when cancel button is clicked', () => {
    const onCancel = jest.fn();
    render(<DialogActions onCancel={onCancel} />);

    const cancelButton = screen.getByRole('button', { name: 'Cancelar' });
    fireEvent.click(cancelButton);

    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('calls onConfirm when confirm button is clicked', () => {
    const onConfirm = jest.fn();
    render(<DialogActions onConfirm={onConfirm} />);

    const confirmButton = screen.getByRole('button', { name: 'Confirmar' });
    fireEvent.click(confirmButton);

    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it('hides cancel button when showCancel is false', () => {
    render(<DialogActions showCancel={false} />);

    const buttons = screen.getAllByTestId('custom-button');
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent('Confirmar');
    expect(
      screen.queryByRole('button', { name: 'Cancelar' })
    ).not.toBeInTheDocument();
  });

  it('hides confirm button when showConfirm is false', () => {
    render(<DialogActions showConfirm={false} />);

    const buttons = screen.getAllByTestId('custom-button');
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent('Cancelar');
    expect(
      screen.queryByRole('button', { name: 'Confirmar' })
    ).not.toBeInTheDocument();
  });

  it('applies correct variant to cancel button', () => {
    render(<DialogActions />);

    const cancelButton = screen.getByRole('button', { name: 'Cancelar' });
    expect(cancelButton).toHaveAttribute('data-variant', 'outline');
  });
});
