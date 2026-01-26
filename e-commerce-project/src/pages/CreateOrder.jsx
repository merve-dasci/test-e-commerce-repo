import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Plus, Check, Edit2, Trash2, Phone, X, Info, CheckCircle } from 'lucide-react';
import { fetchAddresses, addAddress, updateAddress, deleteAddress } from '../store/actions/addressActions';
import { fetchCards, addCard, updateCard, deleteCard } from '../store/actions/cardActions';
import { clearCart } from '../store/actions/shoppingCartActions';
import { turkishCities } from '../data/cities';
import api from '../api/api';
import { toast } from 'react-toastify';

const CreateOrder = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const { addressList, addressLoading, creditCards, cardLoading } = useSelector(state => state.client);
  const cart = useSelector(state => state.shoppingCart.cart);
  
  const [activeStep, setActiveStep] = useState(1); // 1: Adres, 2: Ödeme
  const [selectedShippingAddress, setSelectedShippingAddress] = useState(null);
  const [selectedBillingAddress, setSelectedBillingAddress] = useState(null);
  const [sameAddress, setSameAddress] = useState(true);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  
  // Kart state'leri
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCardForm, setShowCardForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [use3DSecure, setUse3DSecure] = useState(false);
  
  // Sipariş state'leri
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);
  const [ccv, setCcv] = useState('');
  const [selectedInstallment, setSelectedInstallment] = useState(1);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  
  // Kart formu için ayrı form
  const { 
    register: registerCard, 
    handleSubmit: handleSubmitCard, 
    reset: resetCard, 
    setValue: setCardValue,
    formState: { errors: cardErrors } 
  } = useForm();

  // Seçili ürünlerin toplam fiyatı
  const selectedTotal = cart
    .filter(item => item.checked)
    .reduce((total, item) => total + (item.product.price * item.count), 0);

  const shippingCost = selectedTotal >= 150 ? 0 : 29.99;
  const discount = selectedTotal >= 150 ? 29.99 : 0;
  const grandTotal = selectedTotal + shippingCost - discount;

  // Sayfa yüklendiğinde adresleri ve kartları getir
  useEffect(() => {
    dispatch(fetchAddresses()).catch(err => {
      console.error('Error fetching addresses:', err);
    });
    dispatch(fetchCards()).catch(err => {
      console.error('Error fetching cards:', err);
    });
  }, [dispatch]);

  // İlk adres otomatik seçilsin
  useEffect(() => {
    if (addressList.length > 0 && !selectedShippingAddress) {
      setSelectedShippingAddress(addressList[0].id);
      if (sameAddress) {
        setSelectedBillingAddress(addressList[0].id);
      }
    }
  }, [addressList, selectedShippingAddress, sameAddress]);

  // İlk kart otomatik seçilsin
  useEffect(() => {
    if (creditCards.length > 0 && !selectedCard) {
      setSelectedCard(creditCards[0].id);
    }
  }, [creditCards, selectedCard]);

  // Düzenleme modunda form değerlerini doldur
  useEffect(() => {
    if (editingAddress && showAddressForm) {
      setValue('title', editingAddress.title || '');
      setValue('name', editingAddress.name || '');
      setValue('surname', editingAddress.surname || '');
      setValue('phone', editingAddress.phone || '');
      setValue('city', editingAddress.city || '');
      setValue('district', editingAddress.district || '');
      setValue('neighborhood', editingAddress.neighborhood || '');
    }
  }, [editingAddress, showAddressForm, setValue]);

  // Kart düzenleme modunda form değerlerini doldur
  useEffect(() => {
    if (editingCard && showCardForm) {
      setCardValue('card_no', editingCard.card_no || '');
      setCardValue('expire_month', editingCard.expire_month || '');
      setCardValue('expire_year', editingCard.expire_year || '');
      setCardValue('name_on_card', editingCard.name_on_card || '');
    }
  }, [editingCard, showCardForm, setCardValue]);

  // Adres formunu aç (yeni veya düzenleme)
  const openAddressForm = (address = null) => {
    if (address) {
      setEditingAddress(address);
      setValue('title', address.title);
      setValue('name', address.name);
      setValue('surname', address.surname);
      setValue('phone', address.phone);
      setValue('city', address.city);
      setValue('district', address.district);
      setValue('neighborhood', address.neighborhood);
    } else {
      setEditingAddress(null);
      reset();
    }
    setShowAddressForm(true);
  };

  // Adres formunu kapat
  const closeAddressForm = () => {
    setShowAddressForm(false);
    setEditingAddress(null);
    reset();
  };

  // Adres kaydet (yeni veya güncelle)
  const onSubmitAddress = async (data) => {
    try {
      if (editingAddress) {
        await dispatch(updateAddress({ ...data, id: editingAddress.id }));
        toast.success('Adres güncellendi!');
      } else {
        await dispatch(addAddress(data));
        toast.success('Adres eklendi!');
      }
      closeAddressForm();
    } catch {
      toast.error('Bir hata oluştu!');
    }
  };

  // Adres sil
  const handleDeleteAddress = async (addressId) => {
    if (window.confirm('Bu adresi silmek istediğinizden emin misiniz?')) {
      try {
        await dispatch(deleteAddress(addressId));
        toast.success('Adres silindi!');
        // Silinen adres seçiliyse seçimi kaldır
        if (selectedShippingAddress === addressId) {
          setSelectedShippingAddress(null);
        }
        if (selectedBillingAddress === addressId) {
          setSelectedBillingAddress(null);
        }
      } catch {
        toast.error('Adres silinirken hata oluştu!');
      }
    }
  };

  // Telefon numarasını maskele
  const maskPhone = (phone) => {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length >= 10) {
      return `(${cleaned.slice(0,3)}) *** ** ${cleaned.slice(-2)}`;
    }
    return phone;
  };

  // Kart numarasını maskele
  const maskCardNumber = (cardNo) => {
    if (!cardNo) return '';
    const cleaned = cardNo.replace(/\D/g, '');
    if (cleaned.length >= 16) {
      return `${cleaned.slice(0,4)} ${cleaned.slice(4,6)}** **** ${cleaned.slice(-4)}`;
    }
    return cardNo;
  };

  // Kart tipi belirle (Visa, Mastercard, vs.)
  const getCardType = (cardNo) => {
    if (!cardNo) return 'unknown';
    const firstDigit = cardNo.charAt(0);
    const firstTwo = cardNo.substring(0, 2);
    
    if (firstDigit === '4') return 'visa';
    if (['51', '52', '53', '54', '55'].includes(firstTwo)) return 'mastercard';
    if (['34', '37'].includes(firstTwo)) return 'amex';
    return 'unknown';
  };

  // Kart formunu kapat
  const closeCardForm = () => {
    setShowCardForm(false);
    setEditingCard(null);
    resetCard();
  };

  // Kart kaydet
  const onSubmitCard = async (data) => {
    try {
      const cardData = {
        card_no: data.card_no.replace(/\s/g, ''),
        expire_month: parseInt(data.expire_month),
        expire_year: parseInt(data.expire_year),
        name_on_card: data.name_on_card
      };

      if (editingCard) {
        await dispatch(updateCard({ ...cardData, id: editingCard.id }));
        toast.success('Kart güncellendi!');
      } else {
        await dispatch(addCard(cardData));
        toast.success('Kart eklendi!');
      }
      closeCardForm();
    } catch {
      toast.error('Bir hata oluştu!');
    }
  };

  // Kart sil
  const handleDeleteCard = async (cardId) => {
    if (window.confirm('Bu kartı silmek istediğinizden emin misiniz?')) {
      try {
        await dispatch(deleteCard(cardId));
        toast.success('Kart silindi!');
        if (selectedCard === cardId) {
          setSelectedCard(null);
        }
      } catch {
        toast.error('Kart silinirken hata oluştu!');
      }
    }
  };

  // Taksit seçenekleri (örnek)
  const installmentOptions = [
    { count: 1, label: 'Tek Çekim', total: grandTotal },
    { count: 3, label: '3 Taksit', total: grandTotal * 1.05, monthly: (grandTotal * 1.05) / 3 },
    { count: 6, label: '6 Taksit', total: grandTotal * 1.10, monthly: (grandTotal * 1.10) / 6 },
    { count: 9, label: '9 Taksit', total: grandTotal * 1.15, monthly: (grandTotal * 1.15) / 9 },
    { count: 12, label: '12 Taksit', total: grandTotal * 1.20, monthly: (grandTotal * 1.20) / 12 },
  ];

  // Sipariş oluştur
  const handleCreateOrder = async () => {
    // Validasyonlar
    if (!selectedShippingAddress) {
      toast.error('Lütfen teslimat adresi seçin!');
      return;
    }
    if (!sameAddress && !selectedBillingAddress) {
      toast.error('Lütfen fatura adresi seçin!');
      return;
    }
    if (!selectedCard) {
      toast.error('Lütfen ödeme kartı seçin!');
      return;
    }
    if (!ccv || ccv.length < 3) {
      toast.error('Lütfen geçerli bir CCV kodu girin!');
      return;
    }

    // Seçili kart bilgilerini al
    const card = creditCards.find(c => c.id === selectedCard);
    if (!card) {
      toast.error('Seçili kart bulunamadı!');
      return;
    }

    // Seçili ürünleri hazırla
    const selectedProducts = cart
      .filter(item => item.checked)
      .map(item => ({
        product_id: item.product.id,
        count: item.count,
        detail: `${item.product.name || ''} - ${item.product.description || ''}`.substring(0, 50)
      }));

    if (selectedProducts.length === 0) {
      toast.error('Sepetinizde seçili ürün bulunmuyor!');
      return;
    }

    // Sipariş payload'ı
    const orderPayload = {
      address_id: selectedShippingAddress,
      order_date: new Date().toISOString().slice(0, 19),
      card_no: parseInt(card.card_no),
      card_name: card.name_on_card,
      card_expire_month: card.expire_month,
      card_expire_year: card.expire_year,
      card_ccv: parseInt(ccv),
      price: grandTotal,
      products: selectedProducts
    };

    setOrderLoading(true);

    try {
      await api.post('/order', orderPayload);
      
      // Başarılı sipariş
      setOrderSuccess(true);
      dispatch(clearCart());
      
      toast.success('Siparişiniz başarıyla oluşturuldu! 🎉');
      
    } catch (error) {
      console.error('Order error:', error);
      toast.error(error.response?.data?.message || 'Sipariş oluşturulurken bir hata oluştu!');
    } finally {
      setOrderLoading(false);
    }
  };

  // Adres Kartı Komponenti
  const AddressCard = ({ address, isSelected, onSelect, onEdit, onDelete }) => (
    <div 
      className={`border rounded-lg p-4 cursor-pointer transition-all ${
        isSelected 
          ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-200' 
          : 'border-gray-200 hover:border-orange-300'
      }`}
      onClick={() => onSelect(address.id)}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            isSelected ? 'border-orange-500 bg-orange-500' : 'border-gray-300'
          }`}>
            {isSelected && <Check size={12} className="text-white" />}
          </div>
          <span className="font-semibold text-gray-800">{address.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={(e) => { e.stopPropagation(); onEdit(address); }}
            className="text-blue-500 text-sm hover:underline flex items-center gap-1"
          >
            <Edit2 size={14} />
            Düzenle
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onDelete(address.id); }}
            className="text-red-500 text-sm hover:underline flex items-center gap-1"
          >
            <Trash2 size={14} />
            Sil
          </button>
        </div>
      </div>
      
      <div className="ml-7 space-y-1">
        <div className="flex items-center gap-2 text-sm">
          <span className="bg-red-800 text-white text-xs px-2 py-0.5 rounded">
            {address.name} {address.surname}
          </span>
          <div className="flex items-center gap-1 text-gray-600">
            <Phone size={12} />
            <span>{maskPhone(address.phone)}</span>
          </div>
        </div>
        <div className="bg-red-800 text-white text-sm p-2 rounded mt-2">
          {address.neighborhood}, {address.district}, {address.city}
        </div>
      </div>
    </div>
  );

  // Sipariş başarılı ise tebrik ekranını göster
  if (orderSuccess) {
    return (
      <div className="min-h-screen bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center max-w-lg mx-auto">
            <div className="mb-6">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Tebrikler! 🎉
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Siparişiniz başarıyla oluşturuldu!
            </p>
            <p className="text-gray-500 mb-6">
              Siparişiniz en kısa sürede hazırlanıp kargoya verilecektir.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-700 font-medium">
                Sipariş detayları e-posta adresinize gönderildi.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => history.push('/orders')}
                className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Siparişlerim
              </button>
              <button
                onClick={() => history.push('/')}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Alışverişe Devam Et
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Sepet boşsa uyarı göster
  if (cart.length === 0 || !cart.some(item => item.checked)) {
    return (
      <div className="min-h-screen bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center max-w-lg mx-auto">
            <div className="mb-6 text-6xl">🛒</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Sepetiniz Boş
            </h1>
            <p className="text-gray-600 mb-6">
              Sipariş oluşturmak için önce sepetinize ürün eklemeniz gerekiyor.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => history.push('/shop')}
                className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Alışverişe Başla
              </button>
              <button
                onClick={() => history.push('/cart')}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Sepete Git
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sol Taraf - Adres ve Ödeme */}
          <div className="flex-1">
            {/* Adım 1: Adres Bilgileri */}
            <div className="bg-white rounded-lg shadow-sm mb-4">
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-orange-500">Adres Bilgileri</h2>
                    {selectedShippingAddress && (
                      <p className="text-sm text-gray-500">
                        {addressList.find(a => a.id === selectedShippingAddress)?.title}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {activeStep === 1 && (
                <div className="p-4">
                  {/* Bilgilendirme */}
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4 text-sm text-gray-700">
                    <span className="text-orange-500 font-semibold">!</span> Kurumsal faturalı alışveriş yapmak için "Faturamı Aynı Adrese Gönder" tikini kaldırın ve Fatura adresi olarak kayıtlı Kurumsal Fatura adresinizi seçin.
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Teslimat Adresi */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-800">Teslimat Adresi</h3>
                        <label className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={sameAddress}
                            onChange={(e) => {
                              setSameAddress(e.target.checked);
                              if (e.target.checked) {
                                setSelectedBillingAddress(selectedShippingAddress);
                              }
                            }}
                            className="w-4 h-4 text-orange-500 rounded"
                          />
                          Faturamı Aynı Adrese Gönder
                        </label>
                      </div>

                      {/* Yeni Adres Ekle */}
                      <div 
                        onClick={() => openAddressForm()}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4 cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-colors"
                      >
                        <div className="flex flex-col items-center justify-center text-gray-500">
                          <Plus size={24} className="text-orange-500 mb-2" />
                          <span className="font-medium">Yeni Adres Ekle</span>
                        </div>
                      </div>

                      {/* Adres Listesi */}
                      {addressLoading ? (
                        <div className="flex justify-center py-8">
                          <div className="animate-spin rounded-full h-8 w-8 border-4 border-orange-500 border-t-transparent"></div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {addressList.map(address => (
                            <AddressCard
                              key={address.id}
                              address={address}
                              isSelected={selectedShippingAddress === address.id}
                              onSelect={(id) => {
                                setSelectedShippingAddress(id);
                                if (sameAddress) {
                                  setSelectedBillingAddress(id);
                                }
                              }}
                              onEdit={openAddressForm}
                              onDelete={handleDeleteAddress}
                              type="shipping"
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Fatura Adresi (aynı değilse) */}
                    {!sameAddress && (
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-4">Fatura Adresi</h3>
                        
                        <div className="space-y-3">
                          {addressList.map(address => (
                            <AddressCard
                              key={address.id}
                              address={address}
                              isSelected={selectedBillingAddress === address.id}
                              onSelect={setSelectedBillingAddress}
                              onEdit={openAddressForm}
                              onDelete={handleDeleteAddress}
                              type="billing"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Adım 2: Ödeme Seçenekleri */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    activeStep >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    2
                  </div>
                  <div>
                    <h2 className={`text-lg font-semibold ${activeStep >= 2 ? 'text-orange-500' : 'text-gray-500'}`}>
                      Ödeme Seçenekleri
                    </h2>
                    <p className="text-sm text-gray-500">
                      Banka/Kredi Kartı veya <span className="text-orange-500">Alışveriş Kredisi</span> ile ödemenizi güvenle yapabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>

              {activeStep === 2 && (
                <div className="p-4">
                  {/* Kart ile Öde Seçeneği */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-5 h-5 rounded-full border-2 border-orange-500 bg-orange-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Kart ile Öde</span>
                        <p className="text-sm text-gray-500">Kart ile ödemeyi seçtiniz. Banka veya Kredi Kartı kullanarak ödemenizi güvenle yapabilirsiniz.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sol: Kart Bilgileri */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-800">Kart Bilgileri</h3>
                        <button 
                          onClick={() => setShowCardForm(!showCardForm)}
                          className="text-sm text-blue-600 hover:underline"
                        >
                          {showCardForm ? 'Kayıtlı kartlarım' : 'Başka bir Kart ile Ödeme Yap'}
                        </button>
                      </div>

                      {/* Kayıtlı Kartlar */}
                      {!showCardForm ? (
                        <div className="space-y-3">
                          {cardLoading ? (
                            <div className="flex justify-center py-8">
                              <div className="animate-spin rounded-full h-8 w-8 border-4 border-orange-500 border-t-transparent"></div>
                            </div>
                          ) : creditCards.length > 0 ? (
                            <>
                              {creditCards.map(card => (
                                <div 
                                  key={card.id}
                                  onClick={() => setSelectedCard(card.id)}
                                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                                    selectedCard === card.id 
                                      ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-200' 
                                      : 'border-gray-200 hover:border-orange-300'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                        selectedCard === card.id ? 'border-orange-500 bg-orange-500' : 'border-gray-300'
                                      }`}>
                                        {selectedCard === card.id && <Check size={12} className="text-white" />}
                                      </div>
                                      <div className="flex items-center gap-2">
                                        {/* Kart logosu */}
                                        <div className="w-12 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded flex items-center justify-center">
                                          <span className="text-white text-xs font-bold">
                                            {getCardType(card.card_no) === 'mastercard' ? 'MC' : 'VISA'}
                                          </span>
                                        </div>
                                        <div>
                                          <p className="font-medium text-sm">{maskCardNumber(card.card_no)}</p>
                                          <p className="text-xs text-gray-500">{card.expire_month}/{card.expire_year}</p>
                                        </div>
                                      </div>
                                    </div>
                                    <button 
                                      onClick={(e) => { e.stopPropagation(); handleDeleteCard(card.id); }}
                                      className="text-red-500 hover:text-red-700"
                                    >
                                      <Trash2 size={16} />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </>
                          ) : (
                            <p className="text-gray-500 text-center py-4">Kayıtlı kartınız bulunmamaktadır.</p>
                          )}
                        </div>
                      ) : (
                        /* Yeni Kart Formu */
                        <form onSubmit={handleSubmitCard(onSubmitCard)} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Kart Numarası</label>
                            <input
                              {...registerCard('card_no', { 
                                required: 'Kart numarası gerekli',
                                pattern: {
                                  value: /^[0-9\s]{16,19}$/,
                                  message: 'Geçerli bir kart numarası girin'
                                }
                              })}
                              type="text"
                              maxLength={19}
                              placeholder="0000 0000 0000 0000"
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            {cardErrors.card_no && <p className="text-red-500 text-xs mt-1">{cardErrors.card_no.message}</p>}
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Ay</label>
                              <select
                                {...registerCard('expire_month', { required: 'Ay seçin' })}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                              >
                                <option value="">Ay</option>
                                {[...Array(12)].map((_, i) => (
                                  <option key={i + 1} value={i + 1}>{String(i + 1).padStart(2, '0')}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Yıl</label>
                              <select
                                {...registerCard('expire_year', { required: 'Yıl seçin' })}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                              >
                                <option value="">Yıl</option>
                                {[...Array(10)].map((_, i) => (
                                  <option key={2024 + i} value={2024 + i}>{2024 + i}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                CVV <Info size={14} className="inline text-orange-500" />
                              </label>
                              <input
                                type="password"
                                maxLength={4}
                                placeholder="***"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Kart Üzerindeki İsim</label>
                            <input
                              {...registerCard('name_on_card', { required: 'İsim gerekli' })}
                              type="text"
                              placeholder="Ad Soyad"
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            {cardErrors.name_on_card && <p className="text-red-500 text-xs mt-1">{cardErrors.name_on_card.message}</p>}
                          </div>

                          <button
                            type="submit"
                            disabled={cardLoading}
                            className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium disabled:opacity-50"
                          >
                            {cardLoading ? 'Kaydediliyor...' : 'Kartı Kaydet'}
                          </button>
                        </form>
                      )}

                      {/* CCV Girişi */}
                      {selectedCard && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CCV (Güvenlik Kodu) *
                          </label>
                          <input
                            type="text"
                            value={ccv}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                              setCcv(value);
                            }}
                            placeholder="123"
                            maxLength={4}
                            className="w-24 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-center text-lg tracking-widest"
                          />
                          <p className="text-xs text-gray-500 mt-1">Kartınızın arkasındaki 3 veya 4 haneli güvenlik kodu</p>
                        </div>
                      )}

                      {/* 3D Secure */}
                      <label className="flex items-center gap-2 mt-4 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={use3DSecure}
                          onChange={(e) => setUse3DSecure(e.target.checked)}
                          className="w-4 h-4 text-orange-500 rounded"
                        />
                        <span className="text-sm text-gray-700">
                          <span className="text-blue-600">🛡️ 3D Secure</span> ile ödemek istiyorum
                        </span>
                      </label>
                    </div>

                    {/* Sağ: Taksit Seçenekleri */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-4">Taksit Seçenekleri</h3>
                      <p className="text-sm text-gray-500 mb-4">Kartınıza uygun taksit seçeneğini seçiniz</p>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Taksit Sayısı</th>
                              <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">Aylık Ödeme</th>
                            </tr>
                          </thead>
                          <tbody>
                            {installmentOptions.map(option => (
                              <tr 
                                key={option.count}
                                onClick={() => setSelectedInstallment(option.count)}
                                className={`cursor-pointer transition-colors ${
                                  selectedInstallment === option.count 
                                    ? 'bg-orange-50' 
                                    : 'hover:bg-gray-50'
                                }`}
                              >
                                <td className="px-4 py-3 border-t">
                                  <div className="flex items-center gap-2">
                                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                      selectedInstallment === option.count 
                                        ? 'border-orange-500 bg-orange-500' 
                                        : 'border-gray-300'
                                    }`}>
                                      {selectedInstallment === option.count && (
                                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                      )}
                                    </div>
                                    <span className={selectedInstallment === option.count ? 'text-orange-600 font-medium' : 'text-gray-700'}>
                                      {option.label}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-4 py-3 border-t text-right">
                                  <span className={selectedInstallment === option.count ? 'text-orange-600 font-medium' : 'text-gray-700'}>
                                    {option.count === 1 
                                      ? `${option.total.toFixed(2)} TL` 
                                      : `${option.monthly?.toFixed(2)} TL`
                                    }
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sağ Taraf - Sipariş Özeti */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-sm p-5 sticky top-4">
              {/* Kaydet ve Devam Et Butonu */}
              <button 
                onClick={() => {
                  if (activeStep === 1 && selectedShippingAddress) {
                    setActiveStep(2);
                  } else if (activeStep === 2) {
                    handleCreateOrder();
                  } else {
                    toast.error('Lütfen teslimat adresi seçin!');
                  }
                }}
                className="w-full py-3 rounded-md font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-colors mb-5"
              >
                Kaydet ve Devam Et &gt;
              </button>

              {/* Sözleşme Onayı */}
              <div className="mb-5 text-xs text-gray-500">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    <span className="text-blue-500 hover:underline cursor-pointer">Ön Bilgilendirme Koşulları</span>'nı ve{' '}
                    <span className="text-blue-500 hover:underline cursor-pointer">Mesafeli Satış Sözleşmesi</span>'ni okudum, onaylıyorum.
                  </span>
                </label>
              </div>

              {/* Sipariş Özeti */}
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sipariş Özeti</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ürünün Toplamı</span>
                  <span className="font-semibold text-gray-800">{selectedTotal.toFixed(2)} TL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kargo Toplam</span>
                  <span className="font-semibold text-gray-800">{shippingCost.toFixed(2)} TL</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">150 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)</span>
                    <span className="font-semibold text-green-600">-{discount.toFixed(2)} TL</span>
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Toplam</span>
                    <span className="font-bold text-orange-500 text-lg">{grandTotal.toFixed(2)} TL</span>
                  </div>
                </div>
              </div>

              {/* Alt Kaydet Butonu */}
              <button 
                onClick={() => {
                  if (activeStep === 1 && selectedShippingAddress) {
                    setActiveStep(2);
                  } else if (activeStep === 1 && !selectedShippingAddress) {
                    toast.error('Lütfen teslimat adresi seçin!');
                  } else if (activeStep === 2) {
                    handleCreateOrder();
                  }
                }}
                className="w-full py-3 rounded-md font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-colors mt-4"
                disabled={orderLoading}
              >
                {orderLoading 
                  ? 'Sipariş Oluşturuluyor...' 
                  : activeStep === 1 
                    ? 'Kaydet ve Devam Et >' 
                    : 'Siparişi Tamamla'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Adres Formu Modal */}
      {showAddressForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {editingAddress ? 'Adresi Düzenle' : 'Yeni Adres Ekle'}
              </h3>
              <button onClick={closeAddressForm} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmitAddress)} className="p-4 space-y-4">
              {/* Adres Başlığı */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adres Başlığı *
                </label>
                <input
                  {...register('title', { required: 'Adres başlığı gerekli' })}
                  type="text"
                  placeholder="Örn: Ev, İş"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
              </div>

              {/* Ad Soyad */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ad *</label>
                  <input
                    {...register('name', { required: 'Ad gerekli' })}
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Soyad *</label>
                  <input
                    {...register('surname', { required: 'Soyad gerekli' })}
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  {errors.surname && <p className="text-red-500 text-xs mt-1">{errors.surname.message}</p>}
                </div>
              </div>

              {/* Telefon */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
                <input
                  {...register('phone', { 
                    required: 'Telefon gerekli',
                    pattern: {
                      value: /^[0-9]{10,11}$/,
                      message: 'Geçerli bir telefon numarası girin'
                    }
                  })}
                  type="tel"
                  placeholder="05XX XXX XX XX"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              {/* İl */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">İl *</label>
                <select
                  {...register('city', { required: 'İl seçimi gerekli' })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">İl Seçin</option>
                  {turkishCities.map(city => (
                    <option key={city} value={city.toLowerCase()}>{city}</option>
                  ))}
                </select>
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
              </div>

              {/* İlçe */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">İlçe *</label>
                <input
                  {...register('district', { required: 'İlçe gerekli' })}
                  type="text"
                  placeholder="İlçe"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                {errors.district && <p className="text-red-500 text-xs mt-1">{errors.district.message}</p>}
              </div>

              {/* Mahalle / Adres Detay */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mahalle / Adres Detayı *</label>
                <textarea
                  {...register('neighborhood', { required: 'Adres detayı gerekli' })}
                  rows={3}
                  placeholder="Mahalle, Sokak, Bina No, Daire No"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                />
                {errors.neighborhood && <p className="text-red-500 text-xs mt-1">{errors.neighborhood.message}</p>}
              </div>

              {/* Butonlar */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeAddressForm}
                  className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  disabled={addressLoading}
                  className="flex-1 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium disabled:opacity-50"
                >
                  {addressLoading ? 'Kaydediliyor...' : (editingAddress ? 'Güncelle' : 'Kaydet')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateOrder;
