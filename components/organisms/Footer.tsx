import React from 'react';
import { Typography } from '../atoms/Typography';
import { Icon } from '../atoms/Icon';

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
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div className="col-span-1 lg:col-span-2">
            <Typography variant="h5" className="text-white mb-4">
              {companyName}
            </Typography>
            <Typography variant="body" color="secondary" className="text-gray-300 mb-4">
              Desarrollando soluciones innovadoras para el futuro digital.
            </Typography>
            {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name={social.icon} size="md" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Enlaces */}
          {links.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <Typography variant="h6" className="text-white mb-4">
                {section.title}
              </Typography>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Typography variant="small" color="secondary" className="text-gray-400">
              © {year} {companyName}. Todos los derechos reservados.
            </Typography>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
