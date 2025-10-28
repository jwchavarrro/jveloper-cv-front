import React from 'react';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { Typography } from '../atoms/Typography';
import { SearchBox } from '../molecules/SearchBox';

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
    <header className={`bg-white shadow-sm border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y título */}
          <div className="flex items-center">
            {logo && (
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-auto mr-3"
              />
            )}
            <Typography variant="h5" className="text-gray-900">
              {title}
            </Typography>
          </div>

          {/* Navegación */}
          {navigation.length > 0 && (
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.active
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          {/* Búsqueda */}
          {showSearch && onSearch && (
            <div className="flex-1 max-w-lg mx-8">
              <SearchBox
                placeholder="Buscar..."
                onSearch={onSearch}
                className="w-full"
              />
            </div>
          )}

          {/* Usuario */}
          <div className="flex items-center space-x-4">
            {user ? (
              <button
                onClick={onUserAction}
                className="flex items-center space-x-2 text-sm text-gray-700 hover:text-gray-900"
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-8 w-8 rounded-full"
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <Icon name="user" size="sm" />
                  </div>
                )}
                <span>{user.name}</span>
              </button>
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
      </div>
    </header>
  );
};
