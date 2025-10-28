import React from 'react';
import { Sidebar } from '../organisms/Sidebar';
import { Header } from '../organisms/Header';
import { NavigationItem } from '../organisms/Navigation';

export interface DashboardTemplateProps {
  children: React.ReactNode;
  sidebar: {
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
    collapsed?: boolean;
    onToggleCollapse?: () => void;
  };
  header?: {
    title?: string;
    onSearch?: (query: string) => void;
    showSearch?: boolean;
    user?: {
      name: string;
      avatar?: string;
    };
    onUserAction?: () => void;
  };
  showHeader?: boolean;
  className?: string;
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  children,
  sidebar,
  header,
  showHeader = true,
  className = '',
}) => {
  return (
    <div className={`min-h-screen flex ${className}`}>
      {/* Sidebar */}
      <Sidebar
        title={sidebar.title}
        logo={sidebar.logo}
        navigation={sidebar.navigation}
        user={sidebar.user}
        onUserAction={sidebar.onUserAction}
        onItemClick={sidebar.onItemClick}
        collapsed={sidebar.collapsed}
        onToggleCollapse={sidebar.onToggleCollapse}
      />
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {showHeader && header && (
          <Header
            title={header.title}
            onSearch={header.onSearch}
            showSearch={header.showSearch}
            user={header.user}
            onUserAction={header.onUserAction}
          />
        )}
        
        <main className="flex-1 p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};
