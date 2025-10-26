import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/actions';
import Gravatar from 'react-gravatar';
import { Search, ShoppingCart, Menu, User, Phone, Mail, Facebook, Instagram, Twitter, Youtube, LogOut } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  
 
  const { user, isLoggedIn } = useSelector(state => state.client);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="w-full">
    
      <div className="hidden md:block bg-gray-800 text-white">
        <div className="max-w-1440 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 text-sm">
          
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

          
            <div>
              <span>Follow Us and get a chance to win 80% off</span>
            </div>

          
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

     
      <div className="bg-white shadow-sm">
        <div className="max-w-1440 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
         
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-gray-900">Bandage</Link>
            </div>

          
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link to="/shop" className="text-gray-700 hover:text-blue-600 font-medium">Shop</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium">Blog</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
              <Link to="/team" className="text-gray-700 hover:text-blue-600 font-medium">Team</Link>
              <Link to="/pages" className="text-gray-700 hover:text-blue-600 font-medium">Pages</Link>
            </nav>

         
            <div className="hidden md:flex items-center space-x-4">
              {isLoggedIn ? (
                <>
              
                  <div className="flex items-center space-x-3">
                    <Gravatar 
                      email={user.email} 
                      size={32} 
                      className="rounded-full"
                      default="identicon"
                    />
                    <span className="text-gray-700 font-medium">
                      {user.name || user.email}
                    </span>
                    <button 
                      onClick={handleLogout}
                      className="p-2 text-gray-600 hover:text-red-600"
                      title="Logout"
                    >
                      <LogOut className="w-5 h-5" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-medium">Sign Up</Link>
                  <span className="text-gray-400">/</span>
                  <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">Login</Link>
                </>
              )}
              <button className="p-2 text-blue-600 hover:text-blue-800">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-blue-600 hover:text-blue-800 relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
              </button>
            </div>

          
            <div className="flex md:hidden items-center space-x-2">
              {isLoggedIn ? (
                <>
                  <Gravatar 
                    email={user.email} 
                    size={24} 
                    className="rounded-full"
                    default="identicon"
                  />
                  <button 
                    onClick={handleLogout}
                    className="p-2 text-gray-600"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <Link to="/login" className="p-2 text-gray-600">
                  <User className="w-5 h-5" />
                </Link>
              )}
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

      
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-6">
              <Link to="/" className="block text-lg font-medium text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/shop" className="block text-lg font-medium text-gray-700 hover:text-blue-600">Shop</Link>
              <Link to="/about" className="block text-lg font-medium text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/contact" className="block text-lg font-medium text-gray-700 hover:text-blue-600">Contact</Link>
              <Link to="/team" className="block text-lg font-medium text-gray-700 hover:text-blue-600">Team</Link>
              
           
              <div className="border-t pt-4">
                {isLoggedIn ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Gravatar 
                        email={user.email} 
                        size={32} 
                        className="rounded-full"
                        default="identicon"
                      />
                      <span className="text-gray-700 font-medium">
                        {user.name || user.email}
                      </span>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Link to="/login" className="block text-lg font-medium text-blue-600 hover:text-blue-800">Login</Link>
                    <Link to="/signup" className="block text-lg font-medium text-blue-600 hover:text-blue-800">Sign Up</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

       
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