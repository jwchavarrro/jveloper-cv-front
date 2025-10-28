import React, { useState } from 'react';
import { Icon } from '../atoms/Icon';
import { Typography } from '../atoms/Typography';

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  active?: boolean;
  children?: NavigationItem[];
}

export interface NavigationProps {
  items: NavigationItem[];
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'pills' | 'tabs';
  className?: string;
  onItemClick?: (item: NavigationItem) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  orientation = 'horizontal',
  variant = 'default',
  className = '',
  onItemClick,
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (itemLabel: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemLabel)) {
      newExpanded.delete(itemLabel);
    } else {
      newExpanded.add(itemLabel);
    }
    setExpandedItems(newExpanded);
  };

  const getItemClasses = (item: NavigationItem, isChild = false) => {
    const baseClasses = 'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors';
    const orientationClasses = orientation === 'vertical' ? 'w-full justify-start' : '';
    const variantClasses = {
      default: item.active
        ? 'bg-blue-100 text-blue-700'
        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100',
      pills: item.active
        ? 'bg-blue-600 text-white'
        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100',
      tabs: item.active
        ? 'border-b-2 border-blue-500 text-blue-600'
        : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent',
    };
    const childClasses = isChild ? 'ml-4 text-xs' : '';

    return `${baseClasses} ${orientationClasses} ${variantClasses[variant]} ${childClasses}`;
  };

  const renderItem = (item: NavigationItem, isChild = false) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.label);

    return (
      <div key={item.label} className={isChild ? 'ml-4' : ''}>
        <a
          href={item.href}
          className={getItemClasses(item, isChild)}
          onClick={(e) => {
            if (hasChildren) {
              e.preventDefault();
              toggleExpanded(item.label);
            }
            if (onItemClick) {
              onItemClick(item);
            }
          }}
        >
          {item.icon && (
            <Icon name={item.icon} size="sm" className="mr-2" />
          )}
          <span>{item.label}</span>
          {hasChildren && (
            <Icon
              name="arrow"
              size="sm"
              className={`ml-auto transition-transform ${
                isExpanded ? 'rotate-90' : ''
              }`}
            />
          )}
        </a>
        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.children!.map((child) => renderItem(child, true))}
          </div>
        )}
      </div>
    );
  };

  const containerClasses = {
    horizontal: 'flex space-x-1',
    vertical: 'space-y-1',
  };

  return (
    <nav className={`${containerClasses[orientation]} ${className}`}>
      {items.map((item) => renderItem(item))}
    </nav>
  );
};
