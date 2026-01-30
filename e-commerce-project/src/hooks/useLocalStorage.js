import { useState, useEffect } from 'react';

/**
 * useLocalStorage - localStorage ile senkronize state hook'u
 * 
 * @param {string} key - localStorage key
 * @param {any} initialValue - varsayılan değer
 * @returns {[any, function]} - [value, setValue]
 * 
 * @example
 * const [name, setName] = useLocalStorage('username', 'Guest');
 */
const useLocalStorage = (key, initialValue) => {
  // State'i initialize et
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // localStorage'ı güncelle
  const setValue = (value) => {
    try {
      // Fonksiyon olarak da değer alabilir (useState gibi)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Diğer tab'lardan gelen değişiklikleri dinle
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch {
          setStoredValue(e.newValue);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue];
};

export default useLocalStorage;
