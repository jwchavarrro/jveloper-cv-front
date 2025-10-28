import React from 'react';

export interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'small';
  color?: 'primary' | 'secondary' | 'muted' | 'error' | 'success' | 'warning';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  color = 'primary',
  weight = 'normal',
  align = 'left',
  className = '',
  as,
}) => {
  const variantClasses = {
    h1: 'text-4xl font-bold leading-tight',
    h2: 'text-3xl font-bold leading-tight',
    h3: 'text-2xl font-semibold leading-snug',
    h4: 'text-xl font-semibold leading-snug',
    h5: 'text-lg font-medium leading-snug',
    h6: 'text-base font-medium leading-snug',
    body: 'text-base leading-relaxed',
    caption: 'text-sm leading-normal',
    small: 'text-xs leading-normal',
  };
  
  const colorClasses = {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    error: 'text-red-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
  };
  
  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };
  
  const Component = (as || (variant.startsWith('h') ? variant : 'p')) as keyof React.JSX.IntrinsicElements;
  
  return (
    <Component
      className={`${variantClasses[variant]} ${colorClasses[color]} ${weightClasses[weight]} ${alignClasses[align]} ${className}`}
    >
      {children}
    </Component>
  );
};
