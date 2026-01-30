import { useEffect } from 'react';

/**
 * useOnClickOutside - Element dışına tıklamayı algılar
 * Dropdown menüler, modal'lar için idealdir
 * 
 * @param {React.RefObject} ref - Takip edilecek element ref'i
 * @param {function} handler - Dışarı tıklandığında çalışacak fonksiyon
 * 
 * @example
 * const dropdownRef = useRef(null);
 * const [isOpen, setIsOpen] = useState(false);
 * 
 * useOnClickOutside(dropdownRef, () => setIsOpen(false));
 * 
 * return <div ref={dropdownRef}>...</div>
 */
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Ref yoksa veya tıklanan element ref'in içindeyse bir şey yapma
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      // Dışarı tıklandı, handler'ı çağır
      handler(event);
    };

    // Mouse ve touch eventlerini dinle
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
