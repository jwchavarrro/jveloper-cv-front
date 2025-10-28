import React from 'react';
import { Typography } from '../atoms/Typography';

export interface AuthTemplateProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  logo?: string;
  showLogo?: boolean;
  className?: string;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
  children,
  title = 'Bienvenido',
  subtitle,
  logo,
  showLogo = true,
  className = '',
}) => {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          {showLogo && logo && (
            <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt="Logo"
            />
          )}
          <Typography variant="h2" className="mt-6 text-center">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body" color="secondary" className="mt-2 text-center">
              {subtitle}
            </Typography>
          )}
        </div>
        
        <div className="mt-8">
          {children}
        </div>
      </div>
    </div>
  );
};
