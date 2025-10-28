import React from 'react';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { Typography } from '../atoms/Typography';
import { SearchBox } from '../molecules/SearchBox';
import { cn } from '../../lib/utils';

export interface HeaderProps {
  logo?: string;
  title?: string;
  onSearch?: (query: string) => void;
  showSearch?: boolean;
  navigation?: Array<{
    label: string;
    href: string;
    active?: boolean;
  }>;
  user?: {
    name: string;
    avatar?: string;
  };
  onUserAction?: () => void;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  title = 'Mi Aplicación',
  onSearch,
  showSearch = true,
  navigation = [],
  user,
  onUserAction,
  className = '',
}) => {
  return (
    <header className={cn('sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60', className)}>
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Logo y título */}
        <div className="mr-4 hidden md:flex">
          {logo && (
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto mr-3"
            />
          )}
          <Typography variant="h6" className="font-bold">
            {title}
          </Typography>
        </div>

        {/* Navegación */}
        {navigation.length > 0 && (
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  item.active ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        {/* Búsqueda */}
        {showSearch && onSearch && (
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <SearchBox
                placeholder="Buscar..."
                onSearch={onSearch}
                className="w-full"
              />
            </div>
          </div>
        )}

        {/* Usuario */}
        <div className="flex items-center space-x-2">
          {user ? (
            <Button
              variant="ghost"
              onClick={onUserAction}
              className="flex items-center space-x-2 h-9 px-3"
            >
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-6 w-6 rounded-full"
                />
              ) : (
                <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center">
                  <Icon name="user" size="sm" />
                </div>
              )}
              <span className="hidden md:inline-block">{user.name}</span>
            </Button>
          ) : (
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                Iniciar Sesión
              </Button>
              <Button size="sm">
                Registrarse
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
