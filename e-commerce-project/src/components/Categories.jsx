import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const Categories = () => {
  const categories = useSelector((state) => state.product.categories);
  const fetchState = useSelector((state) => state.product.fetchState);

  // Sort by rating and get top 5
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  // Helper function to get gender string for URL
  const getGenderString = (gender) => {
    return gender === 'k' ? 'kadin' : 'erkek';
  };

  // Helper function to get category name from code (e.g., "k:tisort" -> "tisort")
  const getCategorySlug = (code) => {
    return code.split(':')[1] || code;
  };

  if (fetchState === 'FETCHING') {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Top Kategoriler</h2>
          <LoadingSpinner message="Kategoriler yükleniyor..." />
        </div>
      </div>
    );
  }

  if (fetchState === 'FAILED') {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-red-500">
            Kategoriler yüklenirken hata oluştu
          </h2>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">En Popüler Kategoriler</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {topCategories.map((category) => (
            <Link
              key={category.id}
              to={`/shop/${getGenderString(category.gender)}/${getCategorySlug(category.code)}/${category.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm">{category.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-sm text-gray-300 capitalize">
                    {getGenderString(category.gender)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
