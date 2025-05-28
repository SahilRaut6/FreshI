import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Leaf, Menu, X, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-500" />
            <span className="text-xl font-bold text-gray-800">FreshI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" current={location.pathname} />
            <NavLink to="/input" label="Data Input" current={location.pathname} />
            <NavLink to="/trace" label="Trace Product" current={location.pathname} />
            <NavLink to="/about" label="About" current={location.pathname} />
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-red-500 transition-colors"
              >
                <LogOut className="h-5 w-5 mr-1" />
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-4 absolute left-0 right-0 mx-4">
            <div className="flex flex-col space-y-4 px-4">
              <NavLink to="/" label="Home" current={location.pathname} mobile />
              <NavLink to="/input" label="Data Input" current={location.pathname} mobile />
              <NavLink to="/trace" label="Trace Product" current={location.pathname} mobile />
              <NavLink to="/about" label="About" current={location.pathname} mobile />
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-600 hover:text-red-500 transition-colors py-2"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  current: string;
  mobile?: boolean;
}

const NavLink = ({ to, label, current, mobile }: NavLinkProps) => {
  const isActive = current === to;
  
  return (
    <Link
      to={to}
      className={`${
        mobile 
          ? 'block py-2 px-4 rounded-md transition-colors duration-200' 
          : 'transition-colors duration-200'
      } ${
        isActive 
          ? 'text-green-600 font-medium' 
          : 'text-gray-600 hover:text-green-500'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;