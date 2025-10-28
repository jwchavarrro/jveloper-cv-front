import React from 'react';
import { Icon } from '../atoms/Icon';
import { Typography } from '../atoms/Typography';

export interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  children,
  dismissible = false,
  onDismiss,
  className = '',
}) => {
  const typeConfig = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'info',
      iconColor: 'text-blue-600',
      titleColor: 'text-blue-800',
      textColor: 'text-blue-700',
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'check',
      iconColor: 'text-green-600',
      titleColor: 'text-green-800',
      textColor: 'text-green-700',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: 'warning',
      iconColor: 'text-yellow-600',
      titleColor: 'text-yellow-800',
      textColor: 'text-yellow-700',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: 'error',
      iconColor: 'text-red-600',
      titleColor: 'text-red-800',
      textColor: 'text-red-700',
    },
  };

  const config = typeConfig[type];

  return (
    <div
      className={`rounded-lg border p-4 ${config.bg} ${config.border} ${className}`}
    >
      <div className="flex">
        <div className="shrink-0">
          <Icon
            name={config.icon}
            size="sm"
            color={config.iconColor}
          />
        </div>
        <div className="ml-3 flex-1">
          {title && (
            <Typography
              variant="h6"
              className={`mb-1 ${config.titleColor}`}
            >
              {title}
            </Typography>
          )}
          <Typography
            variant="body"
            className={config.textColor}
          >
            {children}
          </Typography>
        </div>
        {dismissible && onDismiss && (
          <div className="ml-auto pl-3">
            <button
              onClick={onDismiss}
              className={`inline-flex ${config.textColor} hover:opacity-75`}
            >
              <Icon name="close" size="sm" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
