import React from 'react';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';

export interface PageTemplateProps {
  children: React.ReactNode;
  header?: {
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
  };
  footer?: {
    companyName?: string;
    year?: number;
    links?: Array<{
      title: string;
      items: Array<{
        label: string;
        href: string;
      }>;
    }>;
    socialLinks?: Array<{
      name: string;
      href: string;
      icon: string;
    }>;
  };
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  header,
  footer,
  showHeader = true,
  showFooter = true,
  className = '',
}) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {showHeader && header && (
        <Header
          logo={header.logo}
          title={header.title}
          onSearch={header.onSearch}
          showSearch={header.showSearch}
          navigation={header.navigation}
          user={header.user}
          onUserAction={header.onUserAction}
        />
      )}
      
      <main className="flex-1">
        {children}
      </main>
      
      {showFooter && footer && (
        <Footer
          companyName={footer.companyName}
          year={footer.year}
          links={footer.links}
          socialLinks={footer.socialLinks}
        />
      )}
    </div>
  );
};
