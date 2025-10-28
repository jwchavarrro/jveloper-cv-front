import React from 'react';
import { Typography } from '../atoms/Typography';
import { Icon } from '../atoms/Icon';
import { cn } from '../../lib/utils';

export interface FooterProps {
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
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  companyName = 'Mi Empresa',
  year = new Date().getFullYear(),
  links = [],
  socialLinks = [],
  className = '',
}) => {
  return (
    <footer className={cn('border-t bg-background', className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Typography variant="h6" className="font-bold">
            {companyName}
          </Typography>
          <Typography variant="small" color="muted">
            Desarrollando soluciones innovadoras para el futuro digital.
          </Typography>
        </div>

        {/* Enlaces */}
        {links.length > 0 && (
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            {links.map((section, sectionIndex) => (
              <div key={sectionIndex} className="flex flex-col gap-2">
                <Typography variant="small" className="font-medium text-foreground">
                  {section.title}
                </Typography>
                <ul className="flex flex-col gap-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.href}
                        className="hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Redes sociales */}
        {socialLinks.length > 0 && (
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={social.icon} size="md" />
              </a>
            ))}
          </div>
        )}

        {/* Copyright */}
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Typography variant="small" color="muted">
            © {year} {companyName}. Todos los derechos reservados.
          </Typography>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
