import { ChevronLeft, ChevronRight, Calendar, MessageCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  
  const featuredProducts = [
    {
      id: 1,
      image: "/images/products/product-cover-1.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 2,
      image: "/images/products/product-cover-2.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 3,
      image: "/images/products/product-cover-3.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 4,
      image: "/images/products/product-cover-4.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 5,
      image: "/images/products/product-cover-5.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 6,
      image: "/images/products/product-cover-6.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 7,
      image: "/images/products/product-cover-7.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 8,
      image: "/images/products/product-cover-8.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    }
  ];

  return (
    <div className="w-full">
     
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
       
        <div className="absolute inset-0">
          <img 
            src="/images/hero/shop-hero-1-product-slide-1.png" 
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
         
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/80 to-blue-500/80"></div>
        </div>

      
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
        
       
        <div className="relative z-10 px-6 py-12 text-center text-white">
         
          <p className="text-sm font-medium mb-4 tracking-wider">
            SUMMER 2020
          </p>
          
        
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            NEW COLLECTION
          </h2>
          
        
          <p className="text-lg mb-8 max-w-xs mx-auto md:max-w-md leading-relaxed">
            We know how large objects will act, but things on a small scale.
          </p>
          
        
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-md text-lg transition-colors duration-300">
            SHOP NOW
          </button>
        </div>
      </section>

     
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            EDITOR'S PICK
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Problems trying to resolve the conflict between 
          </p>
        </div>

      
        <div className="max-w-1440 mx-auto px-4">
         
          <div className="space-y-16 md:grid md:grid-cols-4 md:gap-6 md:space-y-0">
          
            <div className="md:col-span-2 relative group cursor-pointer">
              <div className="aspect-[4/5] md:aspect-[2/3] bg-gray-200 overflow-hidden relative rounded-lg">
                <img 
                  src="/images/categories/media-man.png" 
                  alt="Men"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-10 left-6 z-50">
                <button className="bg-white px-8 py-4 font-bold text-black shadow-xl rounded">
                  MEN
                </button>
              </div>
            </div>

          
            <div className="relative group cursor-pointer">
              <div className="aspect-[4/5] md:aspect-[1/1.5] bg-gray-200 overflow-hidden relative rounded-lg">
                <img 
                  src="/images/categories/media-women.png" 
                  alt="Women"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-10 left-6 z-50">
                <button className="bg-white px-8 py-4 font-bold text-black shadow-xl rounded">
                  WOMEN
                </button>
              </div>
            </div>

           
            <div className="relative group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden relative rounded-lg">
                <img 
                  src="/images/categories/media-accessories.png" 
                  alt="Accessories"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-8 left-4 z-50">
                <button className="bg-white px-6 py-3 font-bold text-black shadow-xl rounded text-sm">
                  ACCESSORIES
                </button>
              </div>
            </div>
            
          
            <div className="relative group cursor-pointer ">
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden relative rounded-lg">
                <img 
                  src="/images/categories/media-kids.png" 
                  alt="Kids"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-10 left-4 z-50">
                <button className="bg-white px-6 py-3 font-bold text-black shadow-xl rounded text-sm">
                  KIDS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <p className="text-gray-500 mb-2">Featured Products</p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Problems trying to resolve the conflict between 
          </p>
        </div>

       
        <div className="flex flex-col space-y-6 max-w-sm mx-auto md:max-w-1440 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:space-y-0 px-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
 
      <section className="py-12">
        <div className="max-w-1440 mx-auto px-4">
          <div className="rounded-xl shadow-lg bg-teal-700 p-6 md:p-12 relative">
           
            <button className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-teal-200 transition-colors duration-200 z-10">
              <ChevronLeft size={30} className="md:w-8 md:h-8" />
            </button>
            <button className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-teal-200 transition-colors duration-200 z-10">
              <ChevronRight size={30} className="md:w-8 md:h-8" />
            </button>
            
            <div className="block md:hidden text-center">
              <p className="text-sm font-medium mb-2 tracking-wider text-white">
                SUMMER 2020
              </p>
              <h2 className="text-3xl font-bold mb-4 leading-tight text-white">
                Vita Classic<br />
                Product
              </h2>
              <p className="text-sm mb-6 max-w-md mx-auto leading-relaxed text-white">
                We know how large objects will act, but things on a small scale.
              </p>
              <div className="flex flex-col items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-white">$16.48</span>
                <button className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-3 px-8 rounded transition-colors duration-200 mb-4">
                  ADD TO CART
                </button>
                <div className="w-full max-w-xs">
                  <img 
                    src="/images/hero/shop-hero-2-png-picture-1.png" 
                    alt="Vita Classic Product"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            
            <div className="hidden md:flex md:items-center md:justify-between">
              
              <div className="md:w-1/2 md:pr-8">
                <p className="text-base font-medium mb-4 tracking-wider text-white">
                  SUMMER 2020
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                  Vita Classic<br />
                  Product
                </h2>
                <p className="text-lg mb-8 max-w-md leading-relaxed text-white">
                  We know how large objects will act, but things on a small scale.
                </p>
                <div className="flex flex-col items-start gap-6">
                  <span className="text-3xl font-bold text-white">$16.48</span>
                  <button className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-3 px-8 rounded transition-colors duration-200">
                    ADD TO CART
                  </button>
                </div>
              </div>

              
              <div className="md:w-1/2 md:pl-8 flex justify-center">
                <div className="max-w-sm lg:max-w-md">
                  <img 
                    src="/images/hero/shop-hero-2-png-picture-1.png" 
                    alt="Vita Classic Product"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="py-16 bg-white">
        <div className="max-w-1440 mx-auto px-4">
          
          <div className="block md:hidden text-center">
            <p className="text-sm font-medium mb-4 tracking-wider text-blue-500">
              SUMMER 2020
            </p>
            <h2 className="text-3xl font-bold mb-6 leading-tight text-gray-900">
              Part of the<br />
              Neural Universe
            </h2>
            <p className="text-lg mb-8 max-w-md mx-auto leading-relaxed text-gray-600">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex flex-col items-center">
              <button className="border-2 border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded transition-colors duration-200 mb-6">
                BUY NOW
              </button>
              <button className="border-2 border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded transition-colors duration-200 mb-8">
                Learn More
              </button>
              <div className="w-full max-w-md">
                <img 
                  src="/images/hero/hero-cover-1.png" 
                  alt="Hero Cover"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

        
          <div className="hidden md:flex md:items-center md:justify-between">
           
            <div className="md:w-1/2 md:pr-8 flex justify-center">
              <div className="max-w-sm lg:max-w-md">
                <img 
                  src="/images/hero/hero-cover-1.png" 
                  alt="Hero Cover"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

          
            <div className="md:w-1/2 md:pl-8">
              <p className="text-base font-medium mb-4 tracking-wider text-blue-500">
                SUMMER 2020
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Part of the<br />
                Neural Universe
              </h2>
              <p className="text-lg mb-8 max-w-md leading-relaxed text-gray-600">
                We know how large objects will act, but things on a small scale.
              </p>
              <div className="flex flex-col items-start gap-6">
                <button className="border-2 border-green-500 bg-green-500 text-white hover:bg-green-600 hover:border-green-600 font-bold py-3 px-8 rounded transition-colors duration-200">
                  BUY NOW
                </button>
                <button className="border-2 border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded transition-colors duration-200">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-16 bg-gray-50">
        <div className="max-w-1440 mx-auto px-4 text-center">
          <p className="text-sm md:text-base font-medium mb-4 tracking-wider text-blue-500">
            Practice Advice
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Featured Products
          </h2>
          <p className="text-lg mb-12 max-w-md mx-auto leading-relaxed text-gray-600">
            Problems trying to resolve the conflict between the two major.
          </p>
          
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-1440 mx-auto">
        
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
             
              <div className="relative">
                <img 
                  src="/images/categories/fixed-height.png" 
                  alt="Fixed Height"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  NEW
                </span>
              </div>
              
            
              <div className="p-6 text-left">
              
                <div className="flex space-x-4 mb-4 text-sm">
                  <a href="#" className="text-blue-500 hover:text-blue-700">Google</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">Trending</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">New</a>
                </div>
                
              
                <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">
                  Loudest à la Madison #1 (L'integral)
                </h3>
                
              
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                
             
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    22 April 2021
                  </span>
                  <span className="flex items-center">
                    <MessageCircle size={16} className="mr-1" />
                    10 comments
                  </span>
                </div>
                
             
                <a href="#" className="text-blue-500 hover:text-blue-700 font-medium flex items-center">
                  Learn More
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
          
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
           
              <div className="relative">
                <img 
                  src="/images/categories/fixed-height (1).png" 
                  alt="Fixed Height"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  NEW
                </span>
              </div>
              
            
              <div className="p-6 text-left">
              
                <div className="flex space-x-4 mb-4 text-sm">
                  <a href="#" className="text-blue-500 hover:text-blue-700">Google</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">Trending</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">New</a>
                </div>
                
               
                <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">
                  Loudest à la Madison #1 (L'integral)
                </h3>
                
               
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                
              
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    22 April 2021
                  </span>
                  <span className="flex items-center">
                    <MessageCircle size={16} className="mr-1" />
                    10 comments
                  </span>
                </div>
                
             
                <a href="#" className="text-blue-500 hover:text-blue-700 font-medium flex items-center">
                  Learn More
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
         
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
          
              <div className="relative">
                <img 
                  src="/images/categories/fixed-height (2).png" 
                  alt="Fixed Height"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  NEW
                </span>
              </div>
              
             
              <div className="p-6 text-left">
             
                <div className="flex space-x-4 mb-4 text-sm">
                  <a href="#" className="text-blue-500 hover:text-blue-700">Google</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">Trending</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">New</a>
                </div>
                
             
                <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">
                  Loudest à la Madison #1 (L'integral)
                </h3>
                
               
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                
              
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    22 April 2021
                  </span>
                  <span className="flex items-center">
                    <MessageCircle size={16} className="mr-1" />
                    10 comments
                  </span>
                </div>
                
            
                <a href="#" className="text-blue-500 hover:text-blue-700 font-medium flex items-center">
                  Learn More
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;