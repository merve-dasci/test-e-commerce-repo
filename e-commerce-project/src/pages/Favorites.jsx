import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingCart, ArrowLeft } from 'lucide-react';
import { removeFromFavorites } from '../store/actions/favoritesActions';
import { addToCart } from '../store/actions/shoppingCartActions';
import { toast } from 'react-toastify';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.shoppingCart.favorites);

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
    toast.success('Ürün favorilerden çıkarıldı!');
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Ürün sepete eklendi!');
  };

  const handleMoveAllToCart = () => {
    favorites.forEach(product => {
      dispatch(addToCart(product));
    });
    toast.success('Tüm favoriler sepete eklendi!');
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-12 sm:py-20">
            <Heart className="w-16 h-16 sm:w-24 sm:h-24 text-gray-300 dark:text-gray-600 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">Favorileriniz Boş</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Henüz favorilere eklediğiniz ürün bulunmuyor.</p>
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 bg-[#23A6F0] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-[#1a8cd8] transition-colors text-sm sm:text-base"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              Alışverişe Başla
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#252B42] dark:text-white">
              Favorilerim ({favorites.length} Ürün)
            </h1>
            <p className="text-[#737373] dark:text-gray-400 text-xs sm:text-sm mt-1">
              Beğendiğiniz ürünleri burada bulabilirsiniz
            </p>
          </div>
          
          <button 
            onClick={handleMoveAllToCart}
            className="flex items-center gap-2 bg-[#23A6F0] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-[#1a8cd8] transition-colors font-medium text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
            Tümünü Sepete Ekle
          </button>
        </div>

        {/* Favorites Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {favorites.map((product) => (
            <div 
              key={product.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-64 overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.images?.[0]?.url || '/images/placeholder.jpg'}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                
                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveFromFavorites(product.id)}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 fill-red-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-bold text-[#252B42] dark:text-white mb-1 sm:mb-2 line-clamp-2 hover:text-[#23A6F0] transition-colors text-sm sm:text-base">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-xs sm:text-sm text-[#737373] dark:text-gray-400 mb-2 sm:mb-3 line-clamp-2 hidden sm:block">
                  {product.description}
                </p>

                {/* Price & Rating */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-base sm:text-xl font-bold text-[#23A6F0]">
                    ${product.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-xs sm:text-sm text-[#737373] dark:text-gray-400">
                      {product.rating?.toFixed(1) || '0.0'}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-2 bg-[#23A6F0] text-white py-2 sm:py-3 rounded-lg hover:bg-[#1a8cd8] transition-colors font-medium text-xs sm:text-base"
                  >
                    <ShoppingCart size={14} className="sm:w-[18px] sm:h-[18px]" />
                    <span className="hidden sm:inline">Sepete Ekle</span>
                    <span className="sm:hidden">Ekle</span>
                  </button>
                  
                  <button
                    onClick={() => handleRemoveFromFavorites(product.id)}
                    className="w-10 sm:w-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 py-2 sm:py-3 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={14} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link 
            to="/shop"
            className="inline-flex items-center gap-2 text-[#23A6F0] hover:text-[#1a8cd8] font-medium text-sm sm:text-base"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            Alışverişe Devam Et
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
