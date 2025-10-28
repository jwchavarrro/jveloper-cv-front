import React from 'react';
import { Icon } from '../atoms/Icon';
import { Typography } from '../atoms/Typography';
import { cn } from '../../lib/utils';

export interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error' | 'destructive';
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
      bg: 'bg-blue-50 dark:bg-blue-950/50',
      border: 'border-blue-200 dark:border-blue-800',
      icon: 'info',
      iconColor: 'text-blue-600 dark:text-blue-400',
      titleColor: 'text-blue-800 dark:text-blue-200',
      textColor: 'text-blue-700 dark:text-blue-300',
    },
    success: {
      bg: 'bg-green-50 dark:bg-green-950/50',
      border: 'border-green-200 dark:border-green-800',
      icon: 'check',
      iconColor: 'text-green-600 dark:text-green-400',
      titleColor: 'text-green-800 dark:text-green-200',
      textColor: 'text-green-700 dark:text-green-300',
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-950/50',
      border: 'border-yellow-200 dark:border-yellow-800',
      icon: 'warning',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      titleColor: 'text-yellow-800 dark:text-yellow-200',
      textColor: 'text-yellow-700 dark:text-yellow-300',
    },
    error: {
      bg: 'bg-red-50 dark:bg-red-950/50',
      border: 'border-red-200 dark:border-red-800',
      icon: 'error',
      iconColor: 'text-red-600 dark:text-red-400',
      titleColor: 'text-red-800 dark:text-red-200',
      textColor: 'text-red-700 dark:text-red-300',
    },
    destructive: {
      bg: 'bg-destructive/10',
      border: 'border-destructive/20',
      icon: 'error',
      iconColor: 'text-destructive',
      titleColor: 'text-destructive',
      textColor: 'text-destructive/80',
    },
  };

  const config = typeConfig[type];

  return (
    <div
      className={cn(
        'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
        config.bg,
        config.border,
        className
      )}
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
              className={cn('mb-1 font-semibold', config.titleColor)}
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
              className={cn(
                'inline-flex rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                config.textColor
              )}
            >
              <Icon name="close" size="sm" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
