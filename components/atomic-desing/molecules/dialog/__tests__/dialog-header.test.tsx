/**
 * Pruebas unitarias para el componente DialogHeader
 * Siguiendo las directrices de testing.md
 */

// Mock external dependencies BEFORE imports
// This ensures Jest can properly resolve the mocks in CI environments
jest.mock('@/components/ui/dialog', () => {
  const React = require('react');
  return {
    DialogHeader: ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
      <div data-testid="shadcn-dialog-header" {...props}>
        {children}
      </div>
    ),
    DialogTitle: ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
      <div data-testid="dialog-title" {...props}>
        {children}
      </div>
    ),
    DialogDescription: ({ children, id, ...props }: { children: React.ReactNode; id?: string; [key: string]: any }) => (
      <div data-testid="dialog-description" id={id} {...props}>
        {children}
      </div>
    ),
  };
});

jest.mock('@/components/atomic-desing/atoms/typography', () => {
  const React = require('react');
  return {
    Typography: ({ children, variant, color, weight, ...props }: { 
      children: React.ReactNode; 
      variant?: string; 
      color?: string; 
      weight?: string; 
      [key: string]: any;
    }) => {
      if (variant === 'h3') {
        return (
          <h3 
            data-testid="custom-title" 
            data-variant={variant}
            data-color={color}
            data-weight={weight}
            {...props}
          >
            {children}
          </h3>
        );
      }
      return (
        <span 
          data-testid="custom-text" 
          data-variant={variant}
          data-color={color}
          {...props}
        >
          {children}
        </span>
      );
    },
  };
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { DialogHeader } from '@/components/atomic-desing/molecules/dialog/dialog-header';

describe('DialogHeader', () => {
  describe('Renderizado condicional', () => {
    it('debería retornar null cuando no se proporcionan título ni descripción', () => {
      const { container } = render(<DialogHeader />);
      expect(container.firstChild).toBeNull();
    });

    it('debería renderizar solo el título cuando solo se proporciona título', () => {
      const title = 'Título de Prueba';
      render(<DialogHeader title={title} />);

      // Verificar que el título se renderiza
      expect(screen.getByTestId('dialog-title')).toBeInTheDocument();
      expect(screen.getByTestId('custom-title')).toHaveTextContent(title);
      
      // Verificar que la descripción NO se renderiza
      expect(screen.queryByTestId('dialog-description')).not.toBeInTheDocument();
      expect(screen.queryByTestId('custom-text')).not.toBeInTheDocument();
    });

    it('debería renderizar solo la descripción cuando solo se proporciona descripción', () => {
      const description = 'Descripción de Prueba';
      render(<DialogHeader description={description} />);

      // Verificar que la descripción se renderiza
      expect(screen.getByTestId('dialog-description')).toBeInTheDocument();
      expect(screen.getByTestId('custom-text')).toHaveTextContent(description);
      
      // Verificar que el título NO se renderiza
      expect(screen.queryByTestId('dialog-title')).not.toBeInTheDocument();
      expect(screen.queryByTestId('custom-title')).not.toBeInTheDocument();
    });

    it('debería renderizar tanto título como descripción cuando ambos se proporcionan', () => {
      const title = 'Título Completo';
      const description = 'Descripción Completa';
      render(<DialogHeader title={title} description={description} />);

      // Verificar que ambos elementos se renderizan
      expect(screen.getByTestId('dialog-title')).toBeInTheDocument();
      expect(screen.getByTestId('custom-title')).toHaveTextContent(title);
      expect(screen.getByTestId('dialog-description')).toBeInTheDocument();
      expect(screen.getByTestId('custom-text')).toHaveTextContent(description);
    });
  });

  describe('Estructura del componente', () => {
    it('debería envolver el contenido en ShadcnDialogHeader', () => {
      render(<DialogHeader title="Test" />);
      expect(screen.getByTestId('shadcn-dialog-header')).toBeInTheDocument();
    });

    it('debería pasar las props correctas al componente Title', () => {
      const title = 'Título con Props';
      render(<DialogHeader title={title} />);

      const titleElement = screen.getByTestId('custom-title');
      expect(titleElement).toHaveAttribute('data-variant', 'h3');
      expect(titleElement).toHaveAttribute('data-color', 'primary');
      expect(titleElement).toHaveAttribute('data-weight', 'semibold');
      expect(titleElement).toHaveTextContent(title);
    });

    it('debería pasar las props correctas al componente Text', () => {
      const description = 'Descripción con Props';
      render(<DialogHeader description={description} />);

      const textElement = screen.getByTestId('custom-text');
      expect(textElement).toHaveAttribute('data-variant', 'caption');
      expect(textElement).toHaveAttribute('data-color', 'muted');
      expect(textElement).toHaveTextContent(description);
    });

    it('debería asignar el ID correcto a la descripción', () => {
      const description = 'Descripción con ID';
      render(<DialogHeader description={description} />);

      const descriptionElement = screen.getByTestId('dialog-description');
      expect(descriptionElement).toHaveAttribute('id', 'dialog-description');
    });
  });

  describe('Casos edge y contenido especial', () => {
    it('debería manejar títulos vacíos correctamente', () => {
      render(<DialogHeader title="" description="Descripción válida" />);
      
      // Strings vacíos no se renderizan (son falsy)
      expect(screen.queryByTestId('dialog-title')).not.toBeInTheDocument();
      expect(screen.queryByTestId('custom-title')).not.toBeInTheDocument();
      expect(screen.getByTestId('dialog-description')).toBeInTheDocument();
    });

    it('debería manejar descripciones vacías correctamente', () => {
      render(<DialogHeader title="Título válido" description="" />);
      
      // Strings vacíos no se renderizan (son falsy)
      expect(screen.getByTestId('dialog-title')).toBeInTheDocument();
      expect(screen.queryByTestId('dialog-description')).not.toBeInTheDocument();
      expect(screen.queryByTestId('custom-text')).not.toBeInTheDocument();
    });

    it('debería manejar títulos y descripciones con caracteres especiales', () => {
      const title = 'Título con ñ, á, é, í, ó, ú';
      const description = 'Descripción con símbolos: @#$%^&*()';
      
      render(<DialogHeader title={title} description={description} />);

      expect(screen.getByTestId('custom-title')).toHaveTextContent(title);
      expect(screen.getByTestId('custom-text')).toHaveTextContent(description);
    });

    it('debería manejar títulos y descripciones largos', () => {
      const longTitle = 'Este es un título muy largo que podría causar problemas de renderizado si no se maneja correctamente en el componente';
      const longDescription = 'Esta es una descripción extremadamente larga que contiene mucha información y podría causar problemas de layout o renderizado si el componente no está preparado para manejar textos de esta longitud';
      
      render(<DialogHeader title={longTitle} description={longDescription} />);

      expect(screen.getByTestId('custom-title')).toHaveTextContent(longTitle);
      expect(screen.getByTestId('custom-text')).toHaveTextContent(longDescription);
    });
  });

  describe('Accesibilidad', () => {
    it('debería tener la estructura semántica correcta', () => {
      render(<DialogHeader title="Título" description="Descripción" />);
      
      // Verificar que el título usa el elemento h3
      const titleElement = screen.getByTestId('custom-title');
      expect(titleElement.tagName).toBe('H3');
      
      // Verificar que la descripción tiene el ID correcto para accesibilidad
      const descriptionElement = screen.getByTestId('dialog-description');
      expect(descriptionElement).toHaveAttribute('id', 'dialog-description');
    });

    it('debería mantener la jerarquía de encabezados correcta', () => {
      render(<DialogHeader title="Título de Sección" />);
      
      const titleElement = screen.getByTestId('custom-title');
      expect(titleElement).toHaveAttribute('data-variant', 'h3');
    });
  });
});
