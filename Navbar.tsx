import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Globe2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Globe2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LocalizeAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
                <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className={`text-gray-700 hover:text-blue-600 ${location.pathname === '/dashboard' ? 'text-blue-600' : ''}`}>
                  Dashboard
                </Link>
                <Link to="/scanner" className={`text-gray-700 hover:text-blue-600 ${location.pathname === '/scanner' ? 'text-blue-600' : ''}`}>
                  Scanner
                </Link>
                <Link to="/reports" className={`text-gray-700 hover:text-blue-600 ${location.pathname === '/reports' ? 'text-blue-600' : ''}`}>
                  Reports
                </Link>
                <Link to="/settings" className={`text-gray-700 hover:text-blue-600 ${location.pathname === '/settings' ? 'text-blue-600' : ''}`}>
                  Settings
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Login</Link>
                <Link to="/signup" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sign Up</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Dashboard</Link>
                <Link to="/scanner" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Scanner</Link>
                <Link to="/reports" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Reports</Link>
                <Link to="/settings" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Settings</Link>
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;