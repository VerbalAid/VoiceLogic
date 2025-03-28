import React from 'react';
import { Menu } from 'lucide-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  onClick?: () => void;
}

interface NavigationProps {
  items: NavItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-blue-600">Voicelogic</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  item.onClick?.();
                }}
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  item.onClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-blue-600"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;