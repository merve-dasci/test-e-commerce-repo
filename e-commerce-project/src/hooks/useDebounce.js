import { useState, useEffect } from 'react';

/**
 * useDebounce - Değer değişimlerini geciktirir
 * API çağrıları, arama fonksiyonları için idealdir
 * 
 * @param {any} value - Geciktirilecek değer
 * @param {number} delay - Gecikme süresi (ms)
 * @returns {any} - Geciktirilmiş değer
 * 
 * @example
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearch = useDebounce(searchTerm, 300);
 * 
 * useEffect(() => {
 *   if (debouncedSearch) {
 *     searchAPI(debouncedSearch);
 *   }
 * }, [debouncedSearch]);
 */
const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Delay sonunda değeri güncelle
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Her yeni değerde önceki timer'ı temizle
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
