// Mock the custom Button component BEFORE imports
// This ensures Jest can properly resolve the mock in CI environments
jest.mock('@/components/atomic-desing/atoms/button', () => {
  const React = require('react');
  return {
    Button: ({
      children,
      onClick,
      variant,
      ...props
    }: {
      children?: React.ReactNode;
      onClick?: () => void;
      variant?: string;
      [key: string]: any;
    }) => (
      <button
        onClick={onClick}
        role='button'
        data-testid='custom-button'
        data-variant={variant}
        {...props}
      >
        {children}
      </button>
    ),
  };
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DialogActions } from '@/components/atomic-desing/molecules/dialog/dialog-actions';

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
