import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Grid, List, Search } from 'lucide-react';
import { fetchProducts } from '../store/actions/productActions';
import ReactPaginate from 'react-paginate';
import ProductCard from '../components/ProductCard';
import { ProductGridSkeleton } from '../components/Skeleton';

const Shop = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { gender, categoryName, categoryId } = useParams();
  
  // URL'den search parametresini al
  const searchParams = new URLSearchParams(location.search);
  const urlSearchQuery = searchParams.get('search') || '';
  
  const [sortBy, setSortBy] = useState('');
  const [filterText, setFilterText] = useState(urlSearchQuery);
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 25;

  const { productList, total, fetchState, categories } = useSelector(state => state.product);
  
  const totalPages = Math.ceil(total / limit);

  // URL search parametresi değiştiğinde filterText'i güncelle
  useEffect(() => {
    setFilterText(urlSearchQuery);
    setCurrentPage(1);
  }, [urlSearchQuery]);
  
  useEffect(() => {
    const params = {
      limit,
      offset: (currentPage - 1) * limit,
    };
    
    
    if (categoryId) {
      params.categoryId = categoryId;
    }
    
   
    if (sortBy) {
      params.sort = sortBy;
    }
    
    
    if (filterText) {
      params.filter = filterText;
    }
    
    dispatch(fetchProducts(params));
  }, [dispatch, categoryId, currentPage, sortBy, filterText, limit]);

  const currentCategory = categories.find(cat => cat.id === parseInt(categoryId));

 
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[çç]/g, 'c')
      .replace(/[ğ]/g, 'g')
      .replace(/[ıİ]/g, 'i')
      .replace(/[öÖ]/g, 'o')
      .replace(/[şŞ]/g, 's')
      .replace(/[üÜ]/g, 'u')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  
  const getGenderCode = (product) => {
    const category = categories.find(cat => cat.id === product.category_id);
    if (category) {
      return category.gender === 'k' ? 'kadin' : 'erkek';
    }
    return gender || 'kadin';
  };

  
  const getCategoryInfo = (product) => {
    const category = categories.find(cat => cat.id === product.category_id);
    if (category) {
      return {
        name: createSlug(category.title),
        id: category.id
      };
    }
    return { name: categoryName || 'kategori', id: categoryId || product.category_id };
  };

  // Ürünün kategorisine göre URL oluştur
  const getProductUrl = (product) => {
    const productGender = getGenderCode(product);
    const categoryInfo = getCategoryInfo(product);
    const productSlug = createSlug(product.name);
    return `/shop/${productGender}/${categoryInfo.name}/${categoryInfo.id}/${productSlug}/${product.id}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {currentCategory ? currentCategory.title : 'Shop'}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Home / Shop 
              {gender && ` / ${gender.charAt(0).toUpperCase() + gender.slice(1)}`}
              {categoryName && ` / ${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}`}
            </p>
          </div>
          
          {categories.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories
                .slice()
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 5)
                .map((category) => (
                  <Link
                    key={category.id}
                    to={`/shop/${category.gender === 'k' ? 'kadin' : 'erkek'}/${category.code.split(':')[1]}/${category.id}`}
                    className="relative h-32 md:h-48 rounded-lg overflow-hidden group cursor-pointer"
                  >
                    <img 
                      src={category.img}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <span className="text-white font-bold text-sm md:text-lg">{category.title}</span>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            {/* Üst satır - Sonuç sayısı ve Görünüm (mobilde gizli) */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Toplam <span className="font-semibold">{total}</span> ürün bulundu
              </div>
              
              <div className="hidden md:flex items-center gap-2">
                <span className="text-gray-600 dark:text-gray-300">Görünüm:</span>
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 dark:text-gray-300'}`}
                >
                  <Grid size={16} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 dark:text-gray-300'}`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
            
            {/* Alt satır - Arama ve Sıralama */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Arama kutusu */}
              <div className="relative flex-1 sm:max-w-xs">
                <input
                  type="text"
                  placeholder="Ürün ara..."
                  value={filterText}
                  onChange={(e) => {
                    setFilterText(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded px-4 py-2.5 pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              
              {/* Sıralama */}
              <select 
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded px-4 py-2.5 bg-white w-full sm:w-auto"
              >
                <option value="">Varsayılan Sıralama</option>
                <option value="price:asc">Fiyat: Düşükten Yükseğe</option>
                <option value="price:desc">Fiyat: Yüksekten Düşüğe</option>
                <option value="rating:asc">Puan: Düşükten Yükseğe</option>
                <option value="rating:desc">Puan: Yüksekten Düşüğe</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {fetchState === 'FETCHING' ? (
            <ProductGridSkeleton count={8} />
          ) : fetchState === 'FAILED' ? (
            <div className="text-center py-20">
              <p className="text-red-500 dark:text-red-400 text-lg mb-4">Ürünler yüklenirken bir hata oluştu.</p>
              <button 
                onClick={() => dispatch(fetchProducts())}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Tekrar Dene
              </button>
            </div>
          ) : productList.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400 text-lg">Bu kategoride ürün bulunamadı.</p>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {productList.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  productUrl={getProductUrl(product)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {totalPages > 1 && fetchState === 'FETCHED' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              onPageChange={({ selected }) => setCurrentPage(selected + 1)}
              forcePage={currentPage - 1}
              previousLabel="Önceki"
              nextLabel="Sonraki"
              breakLabel="..."
              containerClassName="flex justify-center items-center gap-2 flex-wrap"
              pageClassName="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
              activeClassName="!bg-blue-500 !text-white !border-blue-500"
              previousClassName="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
              nextClassName="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
              disabledClassName="opacity-50 cursor-not-allowed"
              breakClassName="px-4 py-2 text-gray-500 dark:text-gray-400"
            />
          </div>
        </section>
      )}

      {/* Big Companies Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Big Companies Are Here
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img 
              src="/images/shoppage/Vector.png" 
              alt="Hooli" 
              className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale dark:invert"
            />
            <img 
              src="/images/shoppage/Vector (1).png" 
              alt="Lyft" 
              className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale dark:invert"
            />
            <img 
              src="/images/shoppage/Vector (2).png" 
              alt="Leaf" 
              className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale dark:invert"
            />
            <img 
              src="/images/shoppage/Vector (3).png" 
              alt="Stripe" 
              className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale dark:invert"
            />
            <img 
              src="/images/shoppage/Vector (4).png" 
              alt="AWS" 
              className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale dark:invert"
            />
            <img 
              src="/images/shoppage/Vector (5).png" 
              alt="Reddit" 
              className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale dark:invert"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;