import React from 'react';
import { Typography } from '../atoms/Typography';
import { cn } from '../../lib/utils';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  variant = 'default',
  padding = 'md',
  className = '',
  onClick,
  hover = false,
}) => {
  const baseClasses = 'rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200';
  
  const variantClasses = {
    default: 'border-border',
    elevated: 'border-border shadow-md',
    outlined: 'border-2 border-border',
    filled: 'bg-muted/50 border-border',
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const hoverClasses = hover ? 'hover:shadow-lg hover:scale-[1.02] cursor-pointer' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        hoverClasses,
        clickableClasses,
        className
      )}
      onClick={onClick}
    >
      {(title || subtitle) && (
        <div className="mb-4 space-y-1">
          {title && (
            <Typography variant="h5" className="mb-1">
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="body" color="muted">
              {subtitle}
            </Typography>
          )}
        </div>
      )}
      {children}
    </div>
  );
};
