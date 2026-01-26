import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ChevronDown, ChevronUp, Package, Calendar, CreditCard, MapPin, ShoppingBag } from 'lucide-react';
import api from '../api/api';
import { toast } from 'react-toastify';

const Orders = () => {
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrders, setExpandedOrders] = useState({});

  // Siparişleri getir
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get('/order');
        setOrders(response.data || []);
      } catch (error) {
        if (error.response?.status === 401) {
          toast.error('Oturum süreniz dolmuş. Lütfen tekrar giriş yapın.');
          history.push('/login');
        } else {
          toast.error('Siparişler yüklenirken bir hata oluştu.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [history]);

  // Sipariş detayını aç/kapat
  const toggleOrderExpand = (orderId) => {
    setExpandedOrders(prev => ({
      ...prev,
      [orderId]: !prev[orderId]
    }));
  };

  // Tarih formatla
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Kart numarasını maskele
  const maskCardNumber = (cardNo) => {
    if (!cardNo) return '-';
    const str = cardNo.toString();
    return `**** **** **** ${str.slice(-4)}`;
  };

  // Sipariş durumu badge'i
  const getStatusBadge = (status) => {
    const statusMap = {
      'pending': { label: 'Beklemede', color: 'bg-yellow-100 text-yellow-800' },
      'processing': { label: 'Hazırlanıyor', color: 'bg-blue-100 text-blue-800' },
      'shipped': { label: 'Kargoda', color: 'bg-purple-100 text-purple-800' },
      'delivered': { label: 'Teslim Edildi', color: 'bg-green-100 text-green-800' },
      'cancelled': { label: 'İptal Edildi', color: 'bg-red-100 text-red-800' },
    };
    const statusInfo = statusMap[status] || { label: status || 'Beklemede', color: 'bg-gray-100 text-gray-800' };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}>
        {statusInfo.label}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            <span className="ml-3 text-gray-600 dark:text-gray-400">Siparişler yükleniyor...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <ShoppingBag className="text-orange-500" size={22} />
            Siparişlerim
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">Geçmiş siparişlerinizi görüntüleyin</p>
        </div>

        {/* Sipariş Listesi */}
        {orders.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sm:p-8 text-center">
            <div className="text-5xl sm:text-6xl mb-4">📦</div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">Henüz siparişiniz yok</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">İlk siparişinizi vermek için alışverişe başlayın!</p>
            <button
              onClick={() => history.push('/shop')}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors text-sm sm:text-base"
            >
              Alışverişe Başla
            </button>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                {/* Sipariş Özeti - Tıklanabilir Header */}
                <div 
                  className="p-3 sm:p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => toggleOrderExpand(order.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                    {/* Sol: Sipariş Bilgileri */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                        <Package className="text-orange-500" size={20} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Sipariş #{order.id}</span>
                          {getStatusBadge(order.status)}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                            {formatDate(order.order_date)}
                          </span>
                          <span className="flex items-center gap-1 hidden sm:flex">
                            <CreditCard size={14} />
                            {maskCardNumber(order.card_no)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Sağ: Fiyat ve Expand Icon */}
                    <div className="flex items-center gap-3 sm:gap-4 justify-between sm:justify-end">
                      <div className="text-right">
                        <div className="text-base sm:text-lg font-bold text-orange-500">
                          {order.price?.toFixed(2) || '0.00'} TL
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {order.products?.length || 0} ürün
                        </div>
                      </div>
                      <div className="text-gray-400 dark:text-gray-500">
                        {expandedOrders[order.id] ? (
                          <ChevronUp size={20} className="sm:w-6 sm:h-6" />
                        ) : (
                          <ChevronDown size={20} className="sm:w-6 sm:h-6" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sipariş Detayları - Collapsible Panel */}
                {expandedOrders[order.id] && (
                  <div className="border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 p-3 sm:p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                      {/* Ürünler Tablosu */}
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                          <ShoppingBag size={16} className="sm:w-[18px] sm:h-[18px]" />
                          Sipariş Ürünleri
                        </h3>
                        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
                          <table className="w-full">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                              <tr>
                                <th className="px-3 sm:px-4 py-2 text-left text-xs font-medium text-gray-600 dark:text-gray-300">Ürün</th>
                                <th className="px-3 sm:px-4 py-2 text-center text-xs font-medium text-gray-600 dark:text-gray-300">Adet</th>
                                <th className="px-3 sm:px-4 py-2 text-right text-xs font-medium text-gray-600 dark:text-gray-300 hidden sm:table-cell">Detay</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-600">
                              {order.products?.map((product, index) => (
                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                                    Ürün #{product.product_id}
                                  </td>
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                                    {product.count}
                                  </td>
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-500 dark:text-gray-500 text-right hidden sm:table-cell">
                                    {product.detail || '-'}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Sipariş Bilgileri */}
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                          <MapPin size={16} className="sm:w-[18px] sm:h-[18px]" />
                          Sipariş Bilgileri
                        </h3>
                        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 p-3 sm:p-4 space-y-2 sm:space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Sipariş No:</span>
                            <span className="font-medium text-gray-900 dark:text-white">#{order.id}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Sipariş Tarihi:</span>
                            <span className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">{formatDate(order.order_date)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Kart:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{maskCardNumber(order.card_no)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Kart Sahibi:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{order.card_name || '-'}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Adres ID:</span>
                            <span className="font-medium text-gray-900 dark:text-white">#{order.address_id}</span>
                          </div>
                          <div className="border-t border-gray-200 dark:border-gray-600 pt-2 sm:pt-3 mt-2 sm:mt-3">
                            <div className="flex justify-between">
                              <span className="font-semibold text-gray-800 dark:text-white text-sm">Toplam Tutar:</span>
                              <span className="font-bold text-orange-500 text-base sm:text-lg">
                                {order.price?.toFixed(2) || '0.00'} TL
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
