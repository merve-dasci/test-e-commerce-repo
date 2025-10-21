import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, User, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Desktop Top Bar - Hidden on mobile */}
      <div className="hidden md:block bg-gray-800 text-white">
        <div className="max-w-1440 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 text-sm">
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(225) 555-0118</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>michelle.rivera@example.com</span>
              </div>
            </div>

            {/* Promo Text */}
            <div>
              <span>Follow Us and get a chance to win 80% off</span>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span>Follow Us :</span>
              <div className="flex space-x-2">
                <Instagram className="w-4 h-4 cursor-pointer hover:text-blue-400" />
                <Youtube className="w-4 h-4 cursor-pointer hover:text-red-400" />
                <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-1440 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-gray-900">Bandage</Link>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link to="/shop" className="text-gray-700 hover:text-blue-600 font-medium">Shop</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium">Blog</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
              <Link to="/pages" className="text-gray-700 hover:text-blue-600 font-medium">Pages</Link>
            </nav>

            {/* Desktop Right Side - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Login / Register</a>
              <button className="p-2 text-blue-600 hover:text-blue-800">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-blue-600 hover:text-blue-800 relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
              </button>
            </div>

            {/* Mobile Right Side - Visible only on mobile */}
            <div className="flex md:hidden items-center space-x-2">
              <button className="p-2 text-gray-600">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
              </button>
              <button 
                className="p-2 text-gray-600"
                onClick={toggleMobileMenu}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-6">
              <Link to="/" className="block text-lg font-medium text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/shop" className="block text-lg font-medium text-gray-700 hover:text-blue-600">Shop</Link>
              <Link to="/product" className="block text-lg font-medium text-gray-700 hover:text-blue-600">Product</Link>
              <Link to="/pricing" className="block text-lg font-medium text-gray-700 hover:text-blue-600">Pricing</Link>
              <Link to="/contact" className="block text-lg font-medium text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        )}

        {/* Mobile Always Visible Menu - Below Header */}
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4">
            <nav className="flex flex-col space-y-4 text-center">
              <Link to="/" className="text-gray-500 hover:text-gray-800 font-medium">Home</Link>
              <Link to="/shop" className="text-gray-500 hover:text-gray-800 font-medium">Shop</Link>
              <Link to="/product" className="text-gray-500 hover:text-gray-800 font-medium">Product</Link>
              <Link to="/pricing" className="text-gray-500 hover:text-gray-800 font-medium">Pricing</Link>
              <Link to="/contact" className="text-gray-500 hover:text-gray-800 font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;