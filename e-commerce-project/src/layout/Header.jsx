import { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logoutUser } from '../store/actions';
import { removeFromCart, updateCartItem } from '../store/actions/shoppingCartActions';
import Gravatar from 'react-gravatar';
import { Search, ShoppingCart, Menu, User, Phone, Mail, Facebook, Instagram, Twitter, Youtube, LogOut, ChevronDown, Trash2, Plus, Minus, Package, Heart, X } from 'lucide-react';
import { toast } from 'react-toastify';
import api from '../api/api';
import ThemeToggle from '../components/ThemeToggle';
import LanguageSwitcher from '../components/LanguageSwitcher';
import useDebounce from '../hooks/useDebounce';

const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  
  // useDebounce hook - arama inputu için 300ms gecikme
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
 
  const { user, isLoggedIn } = useSelector(state => state.client);
  const categories = useSelector(state => state.product.categories);
  const cart = useSelector(state => state.shoppingCart.cart);
  const favorites = useSelector(state => state.shoppingCart.favorites);

  // Sepetteki toplam ürün sayısı
  const cartItemCount = cart.reduce((total, item) => total + item.count, 0);
  
  // Favori sayısı
  const favoritesCount = favorites?.length || 0;
  
  // Sepet toplam tutarı
  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.count), 0);

  // Kategorileri Kadın ve Erkek olarak ayır
  const categoriesArray = Array.isArray(categories) ? categories : [];
  const kadinCategories = categoriesArray.filter(cat => cat.gender === 'k');
  const erkekCategories = categoriesArray.filter(cat => cat.gender === 'e');

  // Helper function to get category slug from code
  const getCategorySlug = (code) => {
    return code.split(':')[1] || code;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success('Çıkış yapıldı. Güle güle!');
  };

  // Debounced arama - her tuşa basıldığında değil, 300ms bekledikten sonra API çağrısı yapar
  useEffect(() => {
    const searchProducts = async () => {
      if (debouncedSearchQuery.length < 2) {
        setSearchResults([]);
        return;
      }
      
      setIsSearching(true);
      try {
        const response = await api.get(`/products?filter=${debouncedSearchQuery}&limit=5`);
        setSearchResults(response.data.products || []);
      } catch (error) {
        console.error('Search error:', error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    searchProducts();
  }, [debouncedSearchQuery]);

  // Arama input handler - sadece state günceller, API çağrısı useEffect'te yapılır
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Arama sonucuna tıklama
  const handleSearchResultClick = (product) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    history.push(`/product/${product.id}`);
  };

  // Arama formunu gönderme (Enter tuşu)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.length >= 2) {
      setIsSearchOpen(false);
      history.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  // Dışarı tıklama ile arama kutusunu kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full relative z-[9999]">
    
      <div className="hidden md:block bg-gray-800 dark:bg-gray-950 text-white">
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
              <LanguageSwitcher variant="compact" />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

     
      <div className="bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-900">
        <div className="max-w-1440 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
         
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">Bandage</Link>
            </div>

          
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">{t('nav.home')}</Link>
              
              {/* Shop Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
              >
                <Link 
                  to="/shop"
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                >
                  {t('nav.shop')}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                
                {isShopDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white shadow-lg rounded-lg border border-gray-200 min-w-[400px]" style={{zIndex: 9999}}>
                      <div className="flex p-6">
                        {/* Kadın Column */}
                        <div className="flex-1 pr-6 border-r border-gray-200">
                          <h3 className="font-bold text-gray-800 mb-4">{t('nav.women')}</h3>
                          {kadinCategories.length === 0 ? (
                            <p className="text-gray-400 text-sm">{t('common.loading')}</p>
                          ) : (
                            <ul className="space-y-2">
                              {kadinCategories.map((category) => (
                                <li key={category.id}>
                                  <Link
                                    to={`/shop/kadin/${getCategorySlug(category.code)}/${category.id}`}
                                    className="text-gray-600 hover:text-blue-600 block py-1"
                                    onClick={() => setIsShopDropdownOpen(false)}
                                  >
                                    {category.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        
                        {/* Erkek Column */}
                        <div className="flex-1 pl-6">
                          <h3 className="font-bold text-gray-800 mb-4">{t('nav.men')}</h3>
                          {erkekCategories.length === 0 ? (
                            <p className="text-gray-400 text-sm">{t('common.loading')}</p>
                          ) : (
                            <ul className="space-y-2">
                              {erkekCategories.map((category) => (
                                <li key={category.id}>
                                  <Link
                                    to={`/shop/erkek/${getCategorySlug(category.code)}/${category.id}`}
                                    className="text-gray-600 hover:text-blue-600 block py-1"
                                    onClick={() => setIsShopDropdownOpen(false)}
                                  >
                                    {category.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">{t('nav.about')}</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium">{t('nav.blog')}</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">{t('nav.contact')}</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 font-medium">{t('nav.pricing')}</Link>
              <Link to="/team" className="text-gray-700 hover:text-blue-600 font-medium">{t('nav.team')}</Link>
              <Link to="/pages" className="text-gray-700 hover:text-blue-600 font-medium">{t('nav.pages')}</Link>
            </nav>

         
            <div className="hidden md:flex items-center space-x-4">
              {isLoggedIn && user ? (
                <>
              
                  {/* User Dropdown Menu */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsUserDropdownOpen(true)}
                    onMouseLeave={() => setIsUserDropdownOpen(false)}
                  >
                    <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80">
                      <Gravatar 
                        email={user.email || ''} 
                        size={32} 
                        className="rounded-full"
                        default="identicon"
                      />
                      <span className="text-gray-700 font-medium">
                        {user.name || user.email || 'User'}
                      </span>
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </div>
                    
                    {isUserDropdownOpen && (
                      <div className="absolute top-full right-0 pt-2" style={{zIndex: 9999}}>
                        <div className="bg-white shadow-lg rounded-lg border border-gray-200 min-w-[200px] py-2">
                          {/* Siparişlerim */}
                          <Link
                            to="/orders"
                            className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors"
                            onClick={() => setIsUserDropdownOpen(false)}
                          >
                            <Package className="w-5 h-5" />
                            <span>Siparişlerim</span>
                          </Link>
                          
                          {/* Hesap Ayarları */}
                          <Link
                            to="/account"
                            className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors"
                            onClick={() => setIsUserDropdownOpen(false)}
                          >
                            <User className="w-5 h-5" />
                            <span>Hesabım</span>
                          </Link>
                          
                          {/* Ayırıcı çizgi */}
                          <div className="border-t border-gray-100 my-2"></div>
                          
                          {/* Çıkış Yap */}
                          <button 
                            onClick={() => {
                              handleLogout();
                              setIsUserDropdownOpen(false);
                            }}
                            className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 w-full transition-colors"
                          >
                            <LogOut className="w-5 h-5" />
                            <span>Çıkış Yap</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-medium">Sign Up</Link>
                  <span className="text-gray-400">/</span>
                  <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">Login</Link>
                </>
              )}
              
              {/* Search */}
              <div className="relative" ref={searchRef}>
                <button 
                  className="p-2 text-blue-600 hover:text-blue-800"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Search className="w-5 h-5" />
                </button>
                
                {isSearchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <form onSubmit={handleSearchSubmit} className="p-3">
                      <div className="relative">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => handleSearch(e.target.value)}
                          placeholder="Ürün ara..."
                          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          autoFocus
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        {searchQuery && (
                          <button
                            type="button"
                            onClick={() => {
                              setSearchQuery('');
                              setSearchResults([]);
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </form>
                    
                    {/* Arama Sonuçları */}
                    {isSearching && (
                      <div className="px-4 py-3 text-center text-gray-500 text-sm">
                        Aranıyor...
                      </div>
                    )}
                    
                    {!isSearching && searchResults.length > 0 && (
                      <div className="border-t border-gray-100 max-h-80 overflow-y-auto">
                        {searchResults.map(product => (
                          <button
                            key={product.id}
                            onClick={() => handleSearchResultClick(product)}
                            className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors text-left"
                          >
                            <img
                              src={product.images?.[0]?.url || '/images/placeholder.jpg'}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                              <p className="text-sm text-orange-500 font-semibold">{product.price?.toFixed(2)} TL</p>
                            </div>
                          </button>
                        ))}
                        <Link
                          to={`/shop?search=${encodeURIComponent(searchQuery)}`}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                            setSearchResults([]);
                          }}
                          className="block w-full p-3 text-center text-blue-600 hover:bg-blue-50 border-t border-gray-100 text-sm font-medium"
                        >
                          Tüm sonuçları gör →
                        </Link>
                      </div>
                    )}
                    
                    {!isSearching && searchQuery.length >= 2 && searchResults.length === 0 && (
                      <div className="px-4 py-3 text-center text-gray-500 text-sm border-t border-gray-100">
                        Sonuç bulunamadı
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Favorites */}
              <Link to="/favorites" className="p-2 text-blue-600 hover:text-blue-800 relative">
                <Heart className="w-5 h-5" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {favoritesCount}
                  </span>
                )}
              </Link>
              
              {/* Cart Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsCartDropdownOpen(true)}
                onMouseLeave={() => setIsCartDropdownOpen(false)}
              >
                <button className="p-2 text-blue-600 hover:text-blue-800 relative flex items-center gap-1">
                  <ShoppingCart className="w-5 h-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                      {cartItemCount}
                    </span>
                  )}
                  <span className="ml-1 text-sm font-medium">Sepetim</span>
                </button>
                
                {isCartDropdownOpen && (
                  <div className="absolute top-full right-0 pt-2" style={{zIndex: 9999}}>
                    <div className="bg-white shadow-lg rounded-lg border border-gray-200 min-w-[350px]">
                      <div className="p-4 border-b border-gray-200">
                        <h3 className="font-bold text-gray-800">Sepetim ({cartItemCount} Ürün)</h3>
                      </div>
                      
                      {cart.length === 0 ? (
                        <div className="p-6 text-center text-gray-500">
                          Sepetiniz boş
                        </div>
                      ) : (
                        <>
                          <div className="max-h-80 overflow-y-auto">
                            {cart.map((item) => (
                              <div key={item.product.id} className="flex items-start gap-3 p-4 border-b border-gray-100 hover:bg-gray-50">
                                <img 
                                  src={item.product.images?.[0]?.url || '/images/placeholder.jpg'} 
                                  alt={item.product.name}
                                  className="w-16 h-16 object-cover rounded"
                                />
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-gray-800 text-sm line-clamp-2">{item.product.name}</h4>
                                  <p className="text-xs text-gray-500 mt-1">Adet: {item.count}</p>
                                  <p className="text-orange-500 font-bold mt-1">{(item.product.price * item.count).toFixed(2)} TL</p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                  <button 
                                    onClick={() => dispatch(updateCartItem(item.product.id, item.count + 1))}
                                    className="p-1 hover:bg-gray-200 rounded"
                                  >
                                    <Plus size={14} />
                                  </button>
                                  <span className="text-sm font-medium">{item.count}</span>
                                  <button 
                                    onClick={() => {
                                      if (item.count > 1) {
                                        dispatch(updateCartItem(item.product.id, item.count - 1));
                                      } else {
                                        dispatch(removeFromCart(item.product.id));
                                      }
                                    }}
                                    className="p-1 hover:bg-gray-200 rounded"
                                  >
                                    <Minus size={14} />
                                  </button>
                                </div>
                                <button 
                                  onClick={() => dispatch(removeFromCart(item.product.id))}
                                  className="p-1 text-red-500 hover:bg-red-50 rounded"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            ))}
                          </div>
                          
                          <div className="p-4 bg-gray-50">
                            <div className="flex justify-between items-center mb-3">
                              <span className="font-medium text-gray-700">Toplam:</span>
                              <span className="font-bold text-orange-500 text-lg">{cartTotal.toFixed(2)} TL</span>
                            </div>
                            <div className="flex gap-2">
                              <Link 
                                to="/cart"
                                className="flex-1 py-2 px-4 border border-gray-300 rounded text-center text-gray-700 hover:bg-gray-100 font-medium"
                                onClick={() => setIsCartDropdownOpen(false)}
                              >
                                Sepete Git
                              </Link>
                              <Link 
                                to="/checkout"
                                className="flex-1 py-2 px-4 bg-orange-500 text-white rounded text-center hover:bg-orange-600 font-medium"
                                onClick={() => setIsCartDropdownOpen(false)}
                              >
                                Siparişi Tamamla
                              </Link>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

          
            <div className="flex md:hidden items-center space-x-1">
              {isLoggedIn && user ? (
                <>
                  <Gravatar 
                    email={user.email || ''} 
                    size={24} 
                    className="rounded-full"
                    default="identicon"
                  />
                  <button 
                    onClick={handleLogout}
                    className="p-2 text-gray-600 dark:text-gray-300"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <Link to="/login" className="p-2 text-gray-600 dark:text-gray-300">
                  <User className="w-5 h-5" />
                </Link>
              )}
              <button 
                className="p-2 text-gray-600 dark:text-gray-300"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="w-5 h-5" />
              </button>
              <Link to="/favorites" className="p-2 text-gray-600 dark:text-gray-300 relative">
                <Heart className="w-5 h-5" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{favoritesCount}</span>
                )}
              </Link>
              <Link to="/cart" className="p-2 text-gray-600 dark:text-gray-300 relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{cartItemCount}</span>
                )}
              </Link>
              <ThemeToggle className="!p-1.5" />
              <button 
                className="p-2 text-gray-600 dark:text-gray-300"
                onClick={toggleMobileMenu}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-6 space-y-4">
              {/* Mobil Arama */}
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Ürün ara..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </form>
              
              {/* Mobil Arama Sonuçları */}
              {searchResults.length > 0 && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg max-h-60 overflow-y-auto">
                  {searchResults.map(product => (
                    <button
                      key={product.id}
                      onClick={() => {
                        handleSearchResultClick(product);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-left"
                    >
                      <img
                        src={product.images?.[0]?.url || '/images/placeholder.jpg'}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{product.name}</p>
                        <p className="text-sm text-orange-500 font-semibold">{product.price?.toFixed(2)} TL</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600">Home</Link>
              <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600">Product</Link>
              <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600">Pricing</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600">About</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600">Contact</Link>
              <Link to="/favorites" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600">
                Favorilerim {favoritesCount > 0 && <span className="text-red-500">({favoritesCount})</span>}
              </Link>
              
           
              <div className="border-t dark:border-gray-700 pt-4">
                {isLoggedIn && user ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Gravatar 
                        email={user.email || ''} 
                        size={32} 
                        className="rounded-full"
                        default="identicon"
                      />
                      <span className="text-gray-700 dark:text-gray-200 font-medium">
                        {user.name || user.email || 'User'}
                      </span>
                    </div>
                    <Link 
                      to="/orders" 
                      className="flex items-center gap-2 text-gray-700 hover:text-orange-500 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Package className="w-5 h-5" />
                      Siparişlerim
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium"
                    >
                      <LogOut className="w-5 h-5" />
                      Çıkış Yap
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

      </div>
    </header>
  );
};

export default Header;