import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  

  
  const product = {
    id: 1,
    title: "Floating Phone",
    rating: 4.5,
    reviewCount: 10,
    price: "$1,139.33",
    availability: "In Stock",
    description: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    images: [
      "/images/shoppage/card-cover-11.jpg",
      "/images/shoppage/card-cover-22.jpg",
      "/images/shoppage/card-cover-33.jpg"
    ]
  };

 
  const bestsellerProducts = [
    {
      id: 1,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-11.jpg"
    },
    {
      id: 2,
      title: "Graphic Design", 
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-22.jpg"
    },
    {
      id: 3,
      title: "Graphic Design",
      department: "English Department", 
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-33.jpg"
    },
    {
      id: 4,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48", 
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-44.jpg"
    },
    {
      id: 5,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-55.jpg"
    },
    {
      id: 6,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48", 
      image: "/images/shoppage/card-cover-11.jpg"
    },
    {
      id: 7,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-22.jpg"
    },
    {
      id: 8,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-33.jpg"
    }
  ];

  const BestsellerCard = ({ product }) => (
    <div className="bg-white group cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg mb-2 text-gray-900">{product.title}</h3>
        <p className="text-gray-500 text-sm mb-4">{product.department}</p>
        <div className="flex justify-center items-center gap-2">
          <span className="text-gray-400 line-through">{product.originalPrice}</span>
          <span className="text-green-600 font-bold">{product.salePrice}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
     
      <nav className="py-4 px-4 bg-gray-50">
        <div className="max-w-1440 mx-auto">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/shop" className="text-gray-600 hover:text-gray-800">Shop</Link>
        </div>
      </nav>

     
      <div className="block lg:hidden">
    
        <div className="relative">
          <div className="aspect-square bg-gray-100">
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          
            <button 
              onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full"
              disabled={selectedImage === 0}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => setSelectedImage(Math.min(product.images.length - 1, selectedImage + 1))}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full"
              disabled={selectedImage === product.images.length - 1}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
        
          <div className="flex gap-2 p-4 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden ${
                  selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

      
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>
          
        
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">{product.reviewCount} Reviews</span>
          </div>

       
          <div className="mb-4">
            <span className="text-2xl font-bold text-gray-900">{product.price}</span>
          </div>

       
          <div className="mb-6">
            <span className="text-sm text-gray-600">Availability: </span>
            <span className="text-sm font-medium text-blue-600">{product.availability}</span>
          </div>

       
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

        
          <div className="mb-6">
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === index ? 'border-gray-800' : 'border-gray-200'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

       
          <div className="flex flex-col gap-3">
            <button className="bg-blue-500 text-white py-3 px-6 rounded font-medium hover:bg-blue-600 transition-colors">
              Select Options
            </button>
            
            <div className="flex gap-2">
              <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded hover:bg-gray-50">
                <Heart size={20} />
              </button>
              <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded hover:bg-gray-50">
                <ShoppingCart size={20} />
              </button>
              <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded hover:bg-gray-50">
                <Eye size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

    
      <div className="hidden lg:block">
        <div className="max-w-1440 mx-auto px-4 py-8">
          <div className="grid grid-cols-2 gap-12">
          
            <div>
              <div className="aspect-square bg-gray-100 mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded border-2 overflow-hidden ${
                      selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

           
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              
         
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">{product.reviewCount} Reviews</span>
              </div>

            
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">{product.price}</span>
              </div>

            
              <div className="mb-8">
                <span className="text-gray-600">Availability: </span>
                <span className="font-medium text-blue-600">{product.availability}</span>
              </div>

          
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {product.description}
              </p>

            
              <div className="mb-8">
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`w-10 h-10 rounded-full border-2 ${
                        selectedColor === index ? 'border-gray-800' : 'border-gray-200'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

          
              <div className="flex items-center gap-4">
                <button className="bg-blue-500 text-white py-3 px-8 rounded font-medium hover:bg-blue-600 transition-colors">
                  Select Options
                </button>
                
                <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded hover:bg-gray-50">
                  <Heart size={24} />
                </button>
                <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded hover:bg-gray-50">
                  <ShoppingCart size={24} />
                </button>
                <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded hover:bg-gray-50">
                  <Eye size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="border-t border-gray-200 mt-8">
        <div className="max-w-1440 mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
            <div>
              <h3 className="text-xl font-bold mb-4">Description</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                the quick fox jumps over the lazy dog
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                the quick fox jumps over the lazy dog. The quick fox jumps over the lazy dog. The quick fox jumps over the lazy dog.
              </p>
              <p className="text-gray-600 leading-relaxed">
                the quick fox jumps over the lazy dog. The quick fox jumps over the lazy dog. The quick fox jumps over the lazy dog.
              </p>
            </div>

         
            <div>
              <h3 className="text-xl font-bold mb-4">Additional Information</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                the quick fox jumps over the lazy dog
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                the quick fox jumps over the lazy dog. The quick fox jumps over the lazy dog. The quick fox jumps over the lazy dog.
              </p>
              <p className="text-gray-600 leading-relaxed">
                the quick fox jumps over the lazy dog. The quick fox jumps over the lazy dog. The quick fox jumps over the lazy dog.
              </p>
            </div>

           
            <div>
              <h3 className="text-xl font-bold mb-4">Reviews ({product.reviewCount})</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                the quick fox jumps over the lazy dog
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                the quick fox jumps over the lazy dog. The quick fox jumps over the lazy dog. The quick fox jumps over the lazy dog.
              </p>
              <p className="text-gray-600 leading-relaxed">
                the quick fox jumps over the lazy dog. The quick fox jumps over the lazy dog. The quick fox jumps over the lazy dog.
              </p>
            </div>
          </div>
        </div>
      </div>

    
      <section className="py-12 bg-gray-50">
        <div className="max-w-1440 mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">BESTSELLER PRODUCTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellerProducts.map((product) => (
              <BestsellerCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;