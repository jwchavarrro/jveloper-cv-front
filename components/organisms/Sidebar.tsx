import React from 'react';
import { Typography } from '../atoms/Typography';
import { Navigation, NavigationItem } from './Navigation';

export interface SidebarProps {
  title?: string;
  logo?: string;
  navigation: NavigationItem[];
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  onUserAction?: () => void;
  onItemClick?: (item: NavigationItem) => void;
  className?: string;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  title = 'Panel',
  logo,
  navigation,
  user,
  onUserAction,
  onItemClick,
  className = '',
  collapsed = false,
  onToggleCollapse,
}) => {
  return (
    <div
      className={`bg-gray-900 text-white transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      } ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && (
          <div className="flex items-center">
            {logo && (
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-auto mr-3"
              />
            )}
            <Typography variant="h5" className="text-white">
              {title}
            </Typography>
          </div>
        )}
        {onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            className="p-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={collapsed ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'}
              />
            </svg>
          </button>
        )}
      </div>

      {/* Navigation */}
      <div className="p-4">
        <Navigation
          items={navigation}
          orientation="vertical"
          variant="pills"
          onItemClick={onItemClick}
        />
      </div>

      {/* User section */}
      {user && !collapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
          <button
            onClick={onUserAction}
            className="flex items-center w-full p-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="h-8 w-8 rounded-full mr-3"
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center mr-3">
                <span className="text-sm font-medium">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <div className="text-left">
              <Typography variant="small" className="text-white">
                {user.name}
              </Typography>
              <Typography variant="small" className="text-gray-400">
                {user.email}
              </Typography>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};
