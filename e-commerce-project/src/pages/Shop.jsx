import { useState } from 'react';
import { ChevronDown, Grid, List, Search } from 'lucide-react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Shop = () => {
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);

 
  const products = [
    {
      id: 1,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-11.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 2,
      title: "Graphic Design",
      department: "English Department", 
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-22.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 3,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48", 
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-33.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 4,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48", 
      image: "/images/shoppage/card-cover-44.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 5,
      title: "Graphic Design", 
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-55.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 6,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-11.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 7,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-22.jpg", 
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 8,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-33.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 9,
      title: "Graphic Design",
      department: "English Department", 
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-44.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 10,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-55.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 11,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48", 
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-11.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      id: 12,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      salePrice: "$6.48",
      image: "/images/shoppage/card-cover-22.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    }
  ];

  const ProductCard = ({ product }) => (
    <div className="bg-white group cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={product.image}
          alt={product.title}
          className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="font-bold text-lg mb-2 text-gray-900">{product.title}</h3>
        <p className="text-gray-500 text-sm mb-4">{product.department}</p>
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-gray-400 line-through">{product.originalPrice}</span>
          <span className="text-green-600 font-bold">{product.salePrice}</span>
        </div>
        <div className="flex justify-center gap-1">
          {product.colors.map((color, index) => (
            <div 
              key={index}
              className="w-4 h-4 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
     
      <section className="bg-gray-100 py-8">
        <div className="max-w-1440 mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Shop</h1>
            <p className="text-gray-600">Home / Shop</p>
          </div>
          
      
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
         
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="/images/shoppage/card-cover-11.jpg"
                alt="Category 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="text-white font-bold text-lg">CLOTHS</span>
              </div>
            </div>
            
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="/images/shoppage/card-cover-22.jpg"
                alt="Category 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="text-white font-bold text-lg">CLOTHS</span>
              </div>
            </div>
            
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="/images/shoppage/card-cover-33.jpg"
                alt="Category 3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="text-white font-bold text-lg">CLOTHS</span>
              </div>
            </div>
            
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="/images/shoppage/card-cover-44.jpg"
                alt="Category 4"  
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="text-white font-bold text-lg">CLOTHS</span>
              </div>
            </div>
            
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="/images/shoppage/card-cover-55.jpg"
                alt="Category 5"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="text-white font-bold text-lg">CLOTHS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-1440 mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        
            <div className="text-gray-600">
              Showing all 12 results
            </div>
            
         
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Views:</span>
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                >
                  <Grid size={16} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                >
                  <List size={16} />
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 bg-white"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
              
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                Filter
              </button>
            </div>

            
            <div className="md:hidden">
              <button className="w-full bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors">
                Filter & Sort
              </button>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-12">
        <div className="max-w-1440 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-8">
        <div className="max-w-1440 mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="px-3 py-2 text-gray-500 hover:text-gray-700"
                disabled={currentPage === 1}
              >
                First
              </button>
              
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded ${
                    currentPage === page 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button 
                onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
                className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                disabled={currentPage === 3}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-12 bg-gray-50">
        <div className="max-w-1440 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          
            <div className="flex items-center justify-center p-4">
              <i className="fab fa-discord text-5xl md:text-6xl text-gray-400"></i>
            </div>
            
         
            <div className="flex items-center justify-center p-4">
              <i className="fab fa-lyft text-5xl md:text-6xl text-gray-400"></i>
            </div>
            
         
            <div className="flex items-center justify-center p-4">
              <i className="fas fa-leaf text-5xl md:text-6xl text-gray-400"></i>
            </div>
            
       
            <div className="flex items-center justify-center p-4">
              <i className="fab fa-stripe text-5xl md:text-6xl text-gray-400"></i>
            </div>
            
          
            <div className="flex items-center justify-center p-4">
              <i className="fab fa-aws text-5xl md:text-6xl text-gray-400"></i>
            </div>
            
         
            <div className="flex items-center justify-center p-4">
              <i className="fab fa-reddit text-5xl md:text-6xl text-gray-400"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;