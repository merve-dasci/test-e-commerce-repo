// Önceden sepete eklenen ürünleri localStorage'da sakla

const PREVIOUSLY_ADDED_KEY = 'previouslyAddedProducts';
const MAX_ITEMS = 10; // Maksimum kaç ürün saklayacağız

// Önceden eklenen ürünleri getir
export const getPreviouslyAddedProducts = () => {
  try {
    const stored = localStorage.getItem(PREVIOUSLY_ADDED_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error getting previously added products:', error);
    return [];
  }
};

// Ürünü önceden eklenenlere kaydet
export const saveToPreviouslyAdded = (product) => {
  try {
    const existing = getPreviouslyAddedProducts();
    
    // Eğer ürün zaten varsa, listeden çıkar (sonra başa ekleyeceğiz)
    const filtered = existing.filter(p => p.id !== product.id);
    
    // Ürünü başa ekle
    const updated = [product, ...filtered].slice(0, MAX_ITEMS);
    
    localStorage.setItem(PREVIOUSLY_ADDED_KEY, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.error('Error saving to previously added:', error);
    return [];
  }
};

// Önceden eklenenleri temizle
export const clearPreviouslyAdded = () => {
  try {
    localStorage.removeItem(PREVIOUSLY_ADDED_KEY);
  } catch (error) {
    console.error('Error clearing previously added:', error);
  }
};
