import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft, Check, Heart } from 'lucide-react';
import { removeFromCart, updateCartItem, toggleCartItem, addToCart } from '../store/actions/shoppingCartActions';
import { removeFromFavorites } from '../store/actions/favoritesActions';
import { getPreviouslyAddedProducts } from '../utils/previouslyAdded';
import { toast } from 'react-toastify';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.shoppingCart.cart);
  const favorites = useSelector(state => state.shoppingCart.favorites);
  const [activeTab, setActiveTab] = useState('previously');
  const [previouslyAdded, setPreviouslyAdded] = useState([]);

  // Önceden eklenen ürünleri yükle
  useEffect(() => {
    const products = getPreviouslyAddedProducts();
    setPreviouslyAdded(products);
  }, [cart]); // cart değiştiğinde güncelle

  // Seçili ürünlerin toplam fiyatı
  const selectedTotal = cart
    .filter(item => item.checked)
    .reduce((total, item) => total + (item.product.price * item.count), 0);

  // Seçili ürün sayısı
  const selectedItemCount = cart
    .filter(item => item.checked)
    .reduce((total, item) => total + item.count, 0);

  // Kargo ücreti (150 TL üzeri ücretsiz)
  const shippingCost = selectedTotal >= 150 ? 0 : 29.99;
  
  // İndirim (şimdilik sabit - kargo bedava olursa indirim olarak göster)
  const discount = selectedTotal >= 150 ? 29.99 : 0;
  
  // Genel toplam
  const grandTotal = selectedTotal + shippingCost - discount;

  const handleIncrement = (productId, currentCount) => {
    dispatch(updateCartItem(productId, currentCount + 1));
  };

  const handleDecrement = (productId, currentCount) => {
    if (currentCount > 1) {
      dispatch(updateCartItem(productId, currentCount - 1));
    }
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
    toast.success('Ürün sepetten kaldırıldı!');
  };

  const handleToggle = (productId) => {
    dispatch(toggleCartItem(productId));
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-12 sm:py-20">
            <ShoppingCart className="w-16 h-16 sm:w-24 sm:h-24 text-gray-300 dark:text-gray-600 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">Sepetiniz Boş</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Sepetinizde henüz ürün bulunmuyor.</p>
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              Alışverişe Devam Et
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        {/* Başlık */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Sepetim ({cart.length} Ürün)</h1>
          <div className="mt-2 sm:mt-3 p-2.5 sm:p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-start sm:items-center gap-2">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
              <Check size={12} className="text-white" />
            </div>
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Sepetindeki Ürünleri Bireysel Veya Kurumsal Fatura Seçerek Alabilirsin.</span>
          </div>
        </div>

        {/* Ana içerik - Sol: Ürünler, Sağ: Order Summary */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Sol taraf - Ürün Listesi */}
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              {cart.map((item, index) => (
                <div 
                  key={item.product.id} 
                  className={`p-3 sm:p-4 ${index !== cart.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}`}
                >
                  {/* Mobil düzen */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    {/* Üst kısım - Checkbox, Resim, Bilgiler */}
                    <div className="flex items-start gap-3 flex-1">
                      {/* Checkbox */}
                      <button
                        onClick={() => handleToggle(item.product.id)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 mt-1 ${
                          item.checked 
                            ? 'bg-orange-500 border-orange-500' 
                            : 'border-gray-300 dark:border-gray-600 hover:border-orange-400'
                        }`}
                      >
                        {item.checked && <Check size={12} className="text-white" />}
                      </button>

                      {/* Ürün Resmi */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                        <img 
                          src={item.product.images?.[0]?.url || '/images/placeholder.jpg'} 
                          alt={item.product.name}
                          className="w-full h-full object-cover rounded-lg border border-gray-200 dark:border-gray-600"
                        />
                      </div>

                      {/* Ürün Bilgileri */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-800 dark:text-white text-xs sm:text-sm line-clamp-2 mb-1">
                          {item.product.name}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 mb-1 sm:mb-2 hidden sm:block">
                          {item.product.description}
                        </p>
                        <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                          <span>🚚</span> Kargo Bedava
                        </p>
                        {/* Mobilde fiyat burada göster */}
                        <p className="text-sm font-bold text-orange-500 mt-1 sm:hidden">
                          {(item.product.price * item.count).toFixed(2)} TL
                        </p>
                      </div>
                    </div>

                    {/* Alt kısım - Miktar, Fiyat, Sil */}
                    <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-4 pl-8 sm:pl-0">
                      {/* Miktar Kontrolü */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleDecrement(item.product.id, item.count)}
                          disabled={item.count <= 1}
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded border flex items-center justify-center transition-colors ${
                            item.count <= 1 
                              ? 'border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-600 cursor-not-allowed' 
                              : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-6 sm:w-8 text-center font-medium text-gray-800 dark:text-white text-sm">{item.count}</span>
                        <button
                          onClick={() => handleIncrement(item.product.id, item.count)}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Fiyat - Sadece desktop */}
                      <div className="hidden sm:block w-24 text-right">
                        <span className="text-base font-bold text-orange-500">
                          {(item.product.price * item.count).toFixed(2)} TL
                        </span>
                      </div>

                      {/* Sil Butonu */}
                      <button
                        onClick={() => handleRemove(item.product.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded transition-colors flex-shrink-0"
                      >
                        <Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ taraf - Order Summary */}
          <div className="lg:w-80">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 sm:p-5 sticky top-4">
              {/* Sepeti Onayla Butonu - Üst */}
              <Link 
                to={selectedItemCount > 0 ? "/order" : "#"}
                onClick={(e) => selectedItemCount === 0 && e.preventDefault()}
                className={`w-full py-2.5 sm:py-3 rounded-md font-semibold text-white mb-4 sm:mb-5 transition-colors block text-center text-sm sm:text-base ${
                  selectedItemCount === 0
                    ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed'
                    : 'bg-orange-500 hover:bg-orange-600'
                }`}
              >
                Sepeti Onayla &gt;
              </Link>

              {/* Sipariş Özeti Başlık */}
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">Sipariş Özeti</h3>

              {/* Fiyat Detayları */}
              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Ürünün Toplamı</span>
                  <span className="font-semibold text-gray-800 dark:text-white">{selectedTotal.toFixed(2)} TL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Kargo Toplam</span>
                  <span className="font-semibold text-gray-800 dark:text-white">{shippingCost.toFixed(2)} TL</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400 text-xs">150 TL ve Üzeri Kargo Bedava</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">-{discount.toFixed(2)} TL</span>
                  </div>
                )}
                
                {/* Ayırıcı çizgi */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2.5 sm:pt-3 mt-2.5 sm:mt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800 dark:text-white">Toplam</span>
                    <span className="font-bold text-orange-500 text-base sm:text-lg">{grandTotal.toFixed(2)} TL</span>
                  </div>
                </div>
              </div>

              {/* İndirim Kodu */}
              <button className="w-full mt-3 sm:mt-4 py-2 sm:py-2.5 border border-gray-300 dark:border-gray-600 rounded-md text-gray-600 dark:text-gray-300 text-xs sm:text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                <Plus size={14} className="sm:w-4 sm:h-4" />
                İNDİRİM KODU GİR
              </button>

              {/* Sepeti Onayla Butonu - Alt */}
              <Link 
                to={selectedItemCount > 0 ? "/order" : "#"}
                onClick={(e) => selectedItemCount === 0 && e.preventDefault()}
                className={`w-full py-2.5 sm:py-3 rounded-md font-semibold text-white mt-3 sm:mt-4 transition-colors block text-center text-sm sm:text-base ${
                  selectedItemCount === 0
                    ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed'
                    : 'bg-orange-500 hover:bg-orange-600'
                }`}
              >
                Sepeti Onayla &gt;
              </Link>
            </div>
          </div>
        </div>

        {/* Alt kısım - Önceden Eklediklerim vs */}
        <div className="mt-6 sm:mt-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-1 scrollbar-hide">
              <button 
                onClick={() => setActiveTab('previously')}
                className={`pb-3 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'previously' 
                    ? 'border-b-2 border-orange-500 text-orange-500' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Önceden Eklediklerim
              </button>
              <button 
                onClick={() => setActiveTab('recommended')}
                className={`pb-3 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'recommended' 
                    ? 'border-b-2 border-orange-500 text-orange-500' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Önerilen Ürünler
              </button>
              <button 
                onClick={() => setActiveTab('favorites')}
                className={`pb-3 font-medium text-xs sm:text-sm flex items-center gap-2 transition-colors whitespace-nowrap ${
                  activeTab === 'favorites' 
                    ? 'border-b-2 border-orange-500 text-orange-500' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Favorilerim
                {favorites.length > 0 ? (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">{favorites.length}</span>
                ) : (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">Yeni</span>
                )}
              </button>
            </div>
          </div>

          {/* Tab İçeriği */}
          <div className="py-4 sm:py-6">
            {activeTab === 'previously' && (
              <div>
                {previouslyAdded.length === 0 ? (
                  <div className="text-center py-6 sm:py-8">
                    <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">Henüz sepete eklediğiniz ürün bulunmuyor.</p>
                    <Link to="/shop" className="text-orange-500 hover:text-orange-600 font-medium mt-2 inline-block text-sm sm:text-base">
                      Alışverişe Başla
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
                    {previouslyAdded.map((product) => {
                      const isInCart = cart.some(item => item.product.id === product.id);
                      return (
                        <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                          <Link to={`/product/${product.id}`}>
                            <div className="aspect-square relative">
                              <img 
                                src={product.images?.[0]?.url || '/images/placeholder.jpg'} 
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </Link>
                          <div className="p-2 sm:p-3">
                            <h4 className="text-xs sm:text-sm font-medium text-gray-800 dark:text-white line-clamp-2 mb-2">
                              {product.name}
                            </h4>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <span className="text-orange-500 font-bold text-sm">
                                {product.price?.toFixed(2)} TL
                              </span>
                              <button
                                onClick={() => !isInCart && dispatch(addToCart(product))}
                                disabled={isInCart}
                                className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded text-xs font-medium transition-colors ${
                                  isInCart 
                                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                                    : 'bg-orange-500 text-white hover:bg-orange-600'
                                }`}
                              >
                                {isInCart ? 'Sepette' : 'Ekle'}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'recommended' && (
              <div className="text-center py-6 sm:py-8">
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">Önerilen ürünler yakında...</p>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div>
                {favorites.length === 0 ? (
                  <div className="text-center py-6 sm:py-8">
                    <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 dark:text-gray-600 mx-auto mb-3 sm:mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm sm:text-base">Favorileriniz boş.</p>
                    <Link to="/shop" className="text-orange-500 hover:text-orange-600 font-medium text-sm sm:text-base">
                      Alışverişe Başla
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
                    {favorites.map((product) => {
                      const isInCart = cart.some(item => item.product.id === product.id);
                      return (
                        <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow relative">
                          {/* Favoriden Çıkar Butonu */}
                          <button
                            onClick={() => {
                              dispatch(removeFromFavorites(product.id));
                              toast.success('Ürün favorilerden çıkarıldı!');
                            }}
                            className="absolute top-2 right-2 z-10 w-7 h-7 sm:w-8 sm:h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
                          >
                            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 fill-red-500" />
                          </button>
                          
                          <Link to={`/product/${product.id}`}>
                            <div className="aspect-square relative">
                              <img 
                                src={product.images?.[0]?.url || '/images/placeholder.jpg'} 
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </Link>
                          <div className="p-2 sm:p-3">
                            <h4 className="text-xs sm:text-sm font-medium text-gray-800 dark:text-white line-clamp-2 mb-2">
                              {product.name}
                            </h4>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <span className="text-orange-500 font-bold text-sm">
                                {product.price?.toFixed(2)} TL
                              </span>
                              <button
                                onClick={() => {
                                  if (!isInCart) {
                                    dispatch(addToCart(product));
                                    toast.success('Ürün sepete eklendi!');
                                  }
                                }}
                                disabled={isInCart}
                                className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded text-xs font-medium transition-colors ${
                                  isInCart 
                                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                                    : 'bg-orange-500 text-white hover:bg-orange-600'
                                }`}
                              >
                                {isInCart ? 'Sepette' : 'Ekle'}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
