import { useTheme } from '../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-colors duration-200 ${
        isDarkMode 
          ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      } ${className}`}
      aria-label={isDarkMode ? 'Light mode' : 'Dark mode'}
      title={isDarkMode ? 'Açık temaya geç' : 'Koyu temaya geç'}
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
