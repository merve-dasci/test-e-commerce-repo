import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Eye, ArrowLeft, ChevronDown } from 'lucide-react';
import { fetchProduct, fetchProducts } from '../store/actions/productActions';
import { addToCart } from '../store/actions/shoppingCartActions';
import { toggleFavorite } from '../store/actions/favoritesActions';
import { ProductDetailSkeleton } from '../components/Skeleton';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId, id, gender, categoryName } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  const { currentProduct, fetchState, productList } = useSelector(state => state.product);
  const favorites = useSelector(state => state.shoppingCart.favorites);
  
  const actualProductId = productId || id;
  
  // Bu ürün favorilerde mi?
  const isFavorite = favorites?.some(fav => fav.id === currentProduct?.id);

  useEffect(() => {
    if (actualProductId) {
      dispatch(fetchProduct(actualProductId));
    }
    // Bestseller ürünleri çek
    dispatch(fetchProducts({ limit: 8 }));
  }, [dispatch, actualProductId]);

  const handleGoBack = () => {
    history.goBack();
  };

  const handleAddToCart = () => {
    dispatch(addToCart(currentProduct));
    toast.success(`${currentProduct.name} sepete eklendi!`);
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(currentProduct));
    if (isFavorite) {
      toast.success('Ürün favorilerden çıkarıldı!');
    } else {
      toast.success('Ürün favorilere eklendi!');
    }
  };

  if (fetchState === 'FETCHING' || !currentProduct) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <ProductDetailSkeleton />
      </div>
    );
  }

  const product = {
    id: currentProduct.id,
    name: currentProduct.name,
    description: currentProduct.description,
    price: currentProduct.price,
    stock: currentProduct.stock,
    rating: currentProduct.rating || 0,
    sell_count: currentProduct.sell_count || 0,
    images: currentProduct.images?.length > 0 
      ? currentProduct.images.map(img => img.url) 
      : ['/images/placeholder.jpg']
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="py-3 sm:py-4 px-3 sm:px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm flex-wrap">
            <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Anasayfa</Link>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <Link to="/shop" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Shop</Link>
            {gender && categoryName && (
              <>
                <span className="text-gray-400 dark:text-gray-500">/</span>
                <span className="text-gray-800 dark:text-gray-200 capitalize">{gender === 'kadin' ? 'Kadın' : 'Erkek'}</span>
                <span className="text-gray-400 dark:text-gray-500">/</span>
                <span className="text-gray-800 dark:text-gray-200 capitalize">{categoryName.replace(/-/g, ' ')}</span>
              </>
            )}
          </div>
          <button
            onClick={handleGoBack}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors text-gray-700 dark:text-gray-200 font-medium text-sm"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Geri Dön</span>
          </button>
        </div>
      </nav>

      <div className="block lg:hidden">
        <div className="relative">
          <div className="aspect-square bg-gray-100 dark:bg-gray-800">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.images.length > 1 && (
              <>
                <button 
                  onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 bg-opacity-75 p-1.5 sm:p-2 rounded-full"
                  disabled={selectedImage === 0}
                >
                  <ChevronLeft size={18} className="sm:w-5 sm:h-5 text-gray-700 dark:text-gray-200" />
                </button>
                <button 
                  onClick={() => setSelectedImage(Math.min(product.images.length - 1, selectedImage + 1))}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 bg-opacity-75 p-1.5 sm:p-2 rounded-full"
                  disabled={selectedImage === product.images.length - 1}
                >
                  <ChevronRight size={18} className="sm:w-5 sm:h-5 text-gray-700 dark:text-gray-200" />
                </button>
              </>
            )}
          </div>
          
          {product.images.length > 1 && (
            <div className="flex gap-2 p-3 sm:p-4 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded border-2 overflow-hidden ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200 dark:border-gray-600'
                  }`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-3 sm:p-4">
          <h1 className="text-xl sm:text-2xl font-bold text-[#252B42] dark:text-white mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-[#737373] dark:text-gray-400">{product.sell_count} Reviews</span>
          </div>

          <div className="mb-3 sm:mb-4">
            <span className="text-xl sm:text-2xl font-bold text-[#252B42] dark:text-white">${product.price}</span>
          </div>

          <div className="mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-[#737373] dark:text-gray-400">Availability : </span>
            <span className={`text-xs sm:text-sm font-medium ${product.stock > 0 ? 'text-[#23A6F0]' : 'text-red-600'}`}>
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <p className="text-[#737373] dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            {product.description}
          </p>

          {/* Color Options */}
          <div className="flex items-center gap-2 mb-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button className="w-6 h-6 rounded-full bg-[#23A6F0]"></button>
            <button className="w-6 h-6 rounded-full bg-[#23856D]"></button>
            <button className="w-6 h-6 rounded-full bg-[#E77C40]"></button>
            <button className="w-6 h-6 rounded-full bg-[#252B42]"></button>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handleAddToCart}
              className="bg-[#23A6F0] text-white py-2.5 sm:py-3 px-5 rounded-md font-medium hover:bg-[#1a8cd8] transition-colors text-sm"
            >
              Select Options
            </button>
            
            <div className="flex gap-2">
              <button 
                onClick={handleToggleFavorite}
                className={`flex items-center justify-center w-10 h-10 border rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  isFavorite ? 'border-red-500 bg-red-50 dark:bg-red-900/30' : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                <Heart size={18} className={isFavorite ? 'text-red-500 fill-red-500' : 'text-[#252B42] dark:text-gray-400'} />
              </button>
              <button className="flex items-center justify-center w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700">
                <ShoppingCart size={18} className="text-[#252B42] dark:text-gray-400" />
              </button>
              <button className="flex items-center justify-center w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700">
                <Eye size={18} className="text-[#252B42] dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="aspect-square bg-gray-100 dark:bg-gray-800 mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded border-2 overflow-hidden ${
                        selectedImage === index ? 'border-blue-500' : 'border-gray-200 dark:border-gray-600'
                      }`}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h1 className="text-2xl font-bold text-[#252B42] dark:text-white mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
                    />
                  ))}
                </div>
                <span className="text-[#737373] dark:text-gray-400 text-sm">{product.sell_count} Reviews</span>
              </div>

              <div className="mb-4">
                <span className="text-2xl font-bold text-[#252B42] dark:text-white">${product.price}</span>
              </div>

              <div className="mb-6">
                <span className="text-[#737373] dark:text-gray-400 text-sm">Availability : </span>
                <span className={`text-sm font-bold ${product.stock > 0 ? 'text-[#23A6F0]' : 'text-red-600'}`}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              <p className="text-[#737373] dark:text-gray-400 mb-6 leading-relaxed text-sm">
                {product.description}
              </p>

              <hr className="border-gray-200 dark:border-gray-700 mb-6" />

              {/* Color Options */}
              <div className="flex items-center gap-2 mb-8">
                <button className="w-8 h-8 rounded-full bg-[#23A6F0]"></button>
                <button className="w-8 h-8 rounded-full bg-[#23856D]"></button>
                <button className="w-8 h-8 rounded-full bg-[#E77C40]"></button>
                <button className="w-8 h-8 rounded-full bg-[#252B42]"></button>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={handleAddToCart}
                  className="bg-[#23A6F0] text-white py-3 px-5 rounded-md font-bold text-sm hover:bg-[#1a8cd8] transition-colors"
                >
                  Select Options
                </button>
                
                <button 
                  onClick={handleToggleFavorite}
                  className={`flex items-center justify-center w-10 h-10 border rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    isFavorite ? 'border-red-500 bg-red-50 dark:bg-red-900/30' : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <Heart size={20} className={isFavorite ? 'text-red-500 fill-red-500' : 'text-[#252B42] dark:text-gray-400'} />
                </button>
                <button className="flex items-center justify-center w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700">
                  <ShoppingCart size={20} className="text-[#252B42] dark:text-gray-400" />
                </button>
                <button className="flex items-center justify-center w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700">
                  <Eye size={20} className="text-[#252B42] dark:text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 mt-6 sm:mt-8">
        {/* Tabs Navigation */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex justify-center gap-4 sm:gap-8 py-4 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('description')}
              className={`text-sm sm:text-base font-semibold pb-2 transition-colors ${
                activeTab === 'description' 
                  ? 'text-[#252B42] dark:text-white border-b-2 border-[#23A6F0]' 
                  : 'text-[#737373] dark:text-gray-400 hover:text-[#252B42] dark:hover:text-white'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('additional')}
              className={`text-sm sm:text-base font-semibold pb-2 transition-colors ${
                activeTab === 'additional' 
                  ? 'text-[#252B42] dark:text-white border-b-2 border-[#23A6F0]' 
                  : 'text-[#737373] dark:text-gray-400 hover:text-[#252B42] dark:hover:text-white'
              }`}
            >
              Additional Information
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`text-sm sm:text-base font-semibold pb-2 transition-colors flex items-center gap-1 ${
                activeTab === 'reviews' 
                  ? 'text-[#252B42] dark:text-white border-b-2 border-[#23A6F0]' 
                  : 'text-[#737373] dark:text-gray-400 hover:text-[#252B42] dark:hover:text-white'
              }`}
            >
              Reviews <span className="text-[#23856D]">({product.sell_count})</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
          {activeTab === 'description' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Image */}
              <div className="lg:col-span-4">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/images/categories/fixed-height (1).png" 
                    alt="Product showcase"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Middle Content */}
              <div className="lg:col-span-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#252B42] dark:text-white mb-4 sm:mb-6">
                  the quick fox jumps over
                </h3>
                <p className="text-[#737373] dark:text-gray-400 text-sm leading-relaxed mb-4">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT://official://teletext 
                  consequent sunt nostrud amet.
                </p>
                <p className="text-[#737373] dark:text-gray-400 text-sm leading-relaxed mb-4">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT://official://teletext 
                  consequent sunt nostrud amet.
                </p>
                <p className="text-[#737373] dark:text-gray-400 text-sm leading-relaxed">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT://official://teletext 
                  consequent sunt nostrud amet.
                </p>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#252B42] dark:text-white mb-4 sm:mb-6">
                  the quick fox jumps over
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-[#737373] dark:text-gray-400 text-sm">
                    <ChevronDown className="w-4 h-4 text-[#737373] rotate-[-90deg]" />
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center gap-3 text-[#737373] dark:text-gray-400 text-sm">
                    <ChevronDown className="w-4 h-4 text-[#737373] rotate-[-90deg]" />
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center gap-3 text-[#737373] dark:text-gray-400 text-sm">
                    <ChevronDown className="w-4 h-4 text-[#737373] rotate-[-90deg]" />
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center gap-3 text-[#737373] dark:text-gray-400 text-sm">
                    <ChevronDown className="w-4 h-4 text-[#737373] rotate-[-90deg]" />
                    the quick fox jumps over the lazy dog
                  </li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-bold text-[#252B42] dark:text-white mb-4 sm:mb-6">
                  the quick fox jumps over
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#737373] dark:text-gray-400 text-sm">
                    <ChevronDown className="w-4 h-4 text-[#737373] rotate-[-90deg]" />
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center gap-3 text-[#737373] dark:text-gray-400 text-sm">
                    <ChevronDown className="w-4 h-4 text-[#737373] rotate-[-90deg]" />
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center gap-3 text-[#737373] dark:text-gray-400 text-sm">
                    <ChevronDown className="w-4 h-4 text-[#737373] rotate-[-90deg]" />
                    the quick fox jumps over the lazy dog
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'additional' && (
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-[#252B42] dark:text-white mb-6">Additional Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-[#737373] dark:text-gray-400">Weight</span>
                  <span className="text-[#252B42] dark:text-white font-medium">0.5 kg</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-[#737373] dark:text-gray-400">Dimensions</span>
                  <span className="text-[#252B42] dark:text-white font-medium">15 × 10 × 5 cm</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-[#737373] dark:text-gray-400">Materials</span>
                  <span className="text-[#252B42] dark:text-white font-medium">Premium Quality</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-[#737373] dark:text-gray-400">Stock</span>
                  <span className="text-[#252B42] dark:text-white font-medium">{product.stock} units</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-[#252B42] dark:text-white mb-6">Customer Reviews</h3>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-[#252B42] dark:text-white font-medium">{product.rating.toFixed(1)} out of 5</span>
              </div>
              <p className="text-[#737373] dark:text-gray-400">Based on {product.sell_count} reviews</p>
            </div>
          )}
        </div>
      </div>

      {/* Bestseller Products */}
      <div className="bg-[#FAFAFA] dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#252B42] dark:text-white mb-8 text-center lg:text-left">
            BESTSELLER PRODUCTS
          </h2>
          <div className="border-b border-gray-200 dark:border-gray-700 mb-8"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productList?.slice(0, 8).map((item) => (
              <Link 
                key={item.id} 
                to={`/product/${item.id}`}
                className="bg-white dark:bg-gray-900 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.images?.[0]?.url || '/images/placeholder.jpg'} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-base font-bold text-[#252B42] dark:text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-[#737373] dark:text-gray-400 mb-2">English Department</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-[#BDBDBD] line-through">${(item.price * 1.2).toFixed(2)}</span>
                    <span className="text-[#23856D] font-bold">${item.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="py-12 bg-[#FAFAFA] dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            <img 
              src="/images/shoppage/Vector.png" 
              alt="Hooli" 
              className="h-8 sm:h-10 object-contain grayscale hover:grayscale-0 transition-all dark:invert"
            />
            <img 
              src="/images/shoppage/Vector (1).png" 
              alt="Lyft" 
              className="h-8 sm:h-10 object-contain grayscale hover:grayscale-0 transition-all dark:invert"
            />
            <img 
              src="/images/shoppage/Vector (2).png" 
              alt="Stripe" 
              className="h-8 sm:h-10 object-contain grayscale hover:grayscale-0 transition-all dark:invert"
            />
            <img 
              src="/images/shoppage/Vector (3).png" 
              alt="AWS" 
              className="h-8 sm:h-10 object-contain grayscale hover:grayscale-0 transition-all dark:invert"
            />
            <img 
              src="/images/shoppage/Vector (4).png" 
              alt="Reddit" 
              className="h-8 sm:h-10 object-contain grayscale hover:grayscale-0 transition-all dark:invert"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
