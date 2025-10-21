import { Heart, ShoppingCart, Eye } from 'lucide-react';

const ProductCard = ({ 
  image, 
  title, 
  department, 
  originalPrice, 
  salePrice, 
  colors = []
}) => {
  return (
    <div className="bg-white group cursor-pointer w-full">
      
      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
        <img 
          src={image || "/api/placeholder/300/300"} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 hidden md:flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
            <button className="p-2 bg-white rounded-full hover:bg-gray-100">
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 bg-white rounded-full hover:bg-gray-100">
              <ShoppingCart className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 bg-white rounded-full hover:bg-gray-100">
              <Eye className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      
     
      <div className="py-6 px-4 text-center">
       
        <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
        
       
        <p className="text-gray-500 text-sm font-medium mb-4">{department}</p>
        
      
        <div className="flex justify-center items-center space-x-3 mb-4">
          <span className="text-gray-400 font-bold text-base">${originalPrice}</span>
          <span className="text-green-800 font-bold text-base">${salePrice}</span>
        </div>
        
    
        {colors.length > 0 && (
          <div className="flex justify-center space-x-2">
            {colors.map((color, index) => (
              <div 
                key={index}
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;