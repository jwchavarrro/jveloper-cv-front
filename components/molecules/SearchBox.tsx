import React from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { cn } from '../../lib/utils';

export interface SearchBoxProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (query: string) => void;
  onClear?: () => void;
  className?: string;
  disabled?: boolean;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = 'Buscar...',
  value = '',
  onChange,
  onSearch,
  onClear,
  className = '',
  disabled = false,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && value.trim()) {
      onSearch(value.trim());
    }
  };

  const handleClear = () => {
    if (onClear) {
      onClear();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn('flex gap-2', className)}>
      <div className="flex-1 relative">
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="pr-10"
        />
        {value && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
          >
            <Icon name="close" size="sm" />
          </Button>
        )}
      </div>
      <Button type="submit" disabled={disabled || !value.trim()} size="icon">
        <Icon name="search" size="sm" />
      </Button>
    </form>
  );
};
