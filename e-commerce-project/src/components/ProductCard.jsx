import { Link } from 'react-router-dom';

const ProductCard = ({ 
  // Yeni props (Shop sayfası için)
  product, 
  productUrl,
  // Eski props (HomePage için - backward compatibility)
  id,
  image, 
  title, 
  department, 
  originalPrice, 
  salePrice, 
  colors = []
}) => {
  // Eğer product prop'u varsa, yeni format kullan
  if (product) {
    return (
      <Link 
        to={productUrl} 
        className="bg-white dark:bg-gray-800 group cursor-pointer block shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden transform hover:-translate-y-1"
      >
        <div className="relative overflow-hidden">
          <img 
            src={product.images?.[0]?.url || '/images/placeholder.jpg'}
            alt={product.name}
            className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3 sm:p-4 text-center">
          <h3 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-gray-900 dark:text-white line-clamp-2">{product.name}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-1">{product.description}</p>
          <div className="flex justify-center items-center gap-2 mb-2 sm:mb-3">
            <span className="text-blue-600 dark:text-blue-400 font-bold text-base sm:text-lg">${product.price}</span>
          </div>
          <div className="flex justify-center items-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <span className="text-yellow-500">★</span>
            <span className="text-gray-600 dark:text-gray-400">{product.rating?.toFixed(1) || '0.0'}</span>
            <span className="text-gray-400 dark:text-gray-500 hidden sm:inline">| Satış: {product.sell_count}</span>
          </div>
        </div>
      </Link>
    );
  }

  // Eski format (HomePage için)
  return (
    <Link to={`/product/${id}`} className="bg-white dark:bg-gray-800 group cursor-pointer w-full block">
      <div className="relative aspect-[4/5] bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <img 
          src={image || "/images/placeholder.jpg"} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="py-4 sm:py-6 px-3 sm:px-4 text-center">
        <h3 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg mb-1 sm:mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">{department}</p>
        
        <div className="flex justify-center items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
          <span className="text-gray-400 font-bold text-sm sm:text-base">${originalPrice}</span>
          <span className="text-green-800 dark:text-green-400 font-bold text-sm sm:text-base">${salePrice}</span>
        </div>
        
        {colors.length > 0 && (
          <div className="flex justify-center space-x-1 sm:space-x-2">
            {colors.map((color, index) => (
              <div 
                key={index}
                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;