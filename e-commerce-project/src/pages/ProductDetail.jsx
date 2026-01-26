import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Eye, ArrowLeft } from 'lucide-react';
import { fetchProduct } from '../store/actions/productActions';
import { addToCart } from '../store/actions/shoppingCartActions';
import { toggleFavorite } from '../store/actions/favoritesActions';
import { ProductDetailSkeleton } from '../components/Skeleton';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId, id, gender, categoryName } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const { currentProduct, fetchState } = useSelector(state => state.product);
  const favorites = useSelector(state => state.shoppingCart.favorites);
  
  const actualProductId = productId || id;
  
  // Bu ürün favorilerde mi?
  const isFavorite = favorites?.some(fav => fav.id === currentProduct?.id);

  useEffect(() => {
    if (actualProductId) {
      dispatch(fetchProduct(actualProductId));
    }
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

  const availability = product.stock > 0 ? 'Stokta Var' : 'Stokta Yok';

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
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h1>
          
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
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{product.rating.toFixed(1)}</span>
            <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-500">| {product.sell_count} Satış</span>
          </div>

          <div className="mb-3 sm:mb-4">
            <span className="text-xl sm:text-2xl font-bold text-blue-600">${product.price}</span>
          </div>

          <div className="mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Stok Durumu: </span>
            <span className={`text-xs sm:text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {availability} ({product.stock} adet)
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            {product.description}
          </p>

          <div className="flex flex-col gap-3">
            <button 
              onClick={handleAddToCart}
              className="bg-blue-500 text-white py-2.5 sm:py-3 px-6 rounded font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base"
            >
              Sepete Ekle
            </button>
            
            <div className="flex gap-2">
              <button 
                onClick={handleToggleFavorite}
                className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  isFavorite ? 'border-red-500 bg-red-50 dark:bg-red-900/30' : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                <Heart size={18} className={`sm:w-5 sm:h-5 ${isFavorite ? 'text-red-500 fill-red-500' : 'dark:text-gray-400'}`} />
              </button>
              <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700">
                <ShoppingCart size={18} className="sm:w-5 sm:h-5 dark:text-gray-400" />
              </button>
              <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700">
                <Eye size={18} className="sm:w-5 sm:h-5 dark:text-gray-400" />
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
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400">{product.rating.toFixed(1)}</span>
                <span className="text-gray-400 dark:text-gray-500">| {product.sell_count} Satış</span>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">${product.price}</span>
              </div>

              <div className="mb-8">
                <span className="text-gray-600 dark:text-gray-400">Stok Durumu: </span>
                <span className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {availability} ({product.stock} adet)
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                {product.description}
              </p>

              <div className="flex items-center gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="bg-blue-500 text-white py-3 px-8 rounded font-medium hover:bg-blue-600 transition-colors"
                >
                  Sepete Ekle
                </button>
                
                <button 
                  onClick={handleToggleFavorite}
                  className={`flex items-center justify-center w-12 h-12 border rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    isFavorite ? 'border-red-500 bg-red-50 dark:bg-red-900/30' : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <Heart size={24} className={isFavorite ? 'text-red-500 fill-red-500' : 'dark:text-gray-400'} />
                </button>
                <button className="flex items-center justify-center w-12 h-12 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700">
                  <ShoppingCart size={24} className="dark:text-gray-400" />
                </button>
                <button className="flex items-center justify-center w-12 h-12 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700">
                  <Eye size={24} className="dark:text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 mt-6 sm:mt-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Ürün Açıklaması</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Ürün Bilgileri</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700 text-sm sm:text-base">
                  <span className="text-gray-600 dark:text-gray-400">Ürün ID:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{product.id}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700 text-sm sm:text-base">
                  <span className="text-gray-600 dark:text-gray-400">Fiyat:</span>
                  <span className="font-medium text-blue-600">${product.price}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700 text-sm sm:text-base">
                  <span className="text-gray-600 dark:text-gray-400">Stok:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{product.stock} adet</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700 text-sm sm:text-base">
                  <span className="text-gray-600 dark:text-gray-400">Puan:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{product.rating.toFixed(1)} / 5</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700 text-sm sm:text-base">
                  <span className="text-gray-600 dark:text-gray-400">Satış Sayısı:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{product.sell_count}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
