// Skeleton bileşenleri - Yükleme sırasında gösterilen placeholder'lar

// Temel Skeleton Box
export const SkeletonBox = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

// Ürün Kartı Skeleton
export const ProductCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    {/* Resim alanı */}
    <SkeletonBox className="w-full h-64" />
    
    {/* İçerik */}
    <div className="p-4">
      {/* Başlık */}
      <SkeletonBox className="h-5 w-3/4 mb-3" />
      
      {/* Açıklama */}
      <SkeletonBox className="h-4 w-full mb-2" />
      <SkeletonBox className="h-4 w-2/3 mb-4" />
      
      {/* Fiyat ve Rating */}
      <div className="flex justify-between items-center">
        <SkeletonBox className="h-6 w-20" />
        <SkeletonBox className="h-4 w-16" />
      </div>
    </div>
  </div>
);

// Ürün Grid Skeleton (Birden fazla kart)
export const ProductGridSkeleton = ({ count = 8 }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, index) => (
      <ProductCardSkeleton key={index} />
    ))}
  </div>
);

// Ürün Detay Skeleton
export const ProductDetailSkeleton = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Sol - Resim */}
      <div>
        <SkeletonBox className="w-full aspect-square mb-4" />
        <div className="flex gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonBox key={i} className="w-20 h-20" />
          ))}
        </div>
      </div>
      
      {/* Sağ - Detaylar */}
      <div>
        <SkeletonBox className="h-8 w-3/4 mb-4" />
        <div className="flex gap-2 mb-6">
          <SkeletonBox className="h-5 w-24" />
          <SkeletonBox className="h-5 w-20" />
        </div>
        <SkeletonBox className="h-10 w-32 mb-6" />
        <SkeletonBox className="h-5 w-40 mb-8" />
        <SkeletonBox className="h-4 w-full mb-2" />
        <SkeletonBox className="h-4 w-full mb-2" />
        <SkeletonBox className="h-4 w-2/3 mb-8" />
        <div className="flex gap-4">
          <SkeletonBox className="h-12 w-40" />
          <SkeletonBox className="h-12 w-12" />
          <SkeletonBox className="h-12 w-12" />
        </div>
      </div>
    </div>
  </div>
);

// Kategori Kartı Skeleton
export const CategoryCardSkeleton = () => (
  <div className="relative overflow-hidden rounded-lg">
    <SkeletonBox className="w-full h-48 lg:h-64" />
  </div>
);

// Kategori Grid Skeleton
export const CategoryGridSkeleton = ({ count = 5 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
    {Array.from({ length: count }).map((_, index) => (
      <CategoryCardSkeleton key={index} />
    ))}
  </div>
);

// Liste Satırı Skeleton
export const ListItemSkeleton = () => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
    <SkeletonBox className="w-16 h-16 rounded" />
    <div className="flex-1">
      <SkeletonBox className="h-5 w-3/4 mb-2" />
      <SkeletonBox className="h-4 w-1/2" />
    </div>
    <SkeletonBox className="h-8 w-24" />
  </div>
);

// Sepet Ürün Skeleton
export const CartItemSkeleton = () => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100">
    <SkeletonBox className="w-6 h-6 rounded" />
    <SkeletonBox className="w-20 h-20 rounded" />
    <div className="flex-1">
      <SkeletonBox className="h-5 w-48 mb-2" />
      <SkeletonBox className="h-4 w-32" />
    </div>
    <div className="flex items-center gap-2">
      <SkeletonBox className="w-8 h-8 rounded" />
      <SkeletonBox className="w-8 h-8" />
      <SkeletonBox className="w-8 h-8 rounded" />
    </div>
    <SkeletonBox className="h-6 w-20" />
    <SkeletonBox className="w-8 h-8 rounded" />
  </div>
);

// Blog Kartı Skeleton
export const BlogCardSkeleton = () => (
  <div className="bg-white border border-gray-100 rounded-lg overflow-hidden">
    <SkeletonBox className="w-full h-56 lg:h-64" />
    <div className="p-6 lg:p-8">
      <div className="flex gap-3 mb-3">
        <SkeletonBox className="h-4 w-12" />
        <SkeletonBox className="h-4 w-16" />
        <SkeletonBox className="h-4 w-10" />
      </div>
      <SkeletonBox className="h-6 w-3/4 mb-3" />
      <SkeletonBox className="h-4 w-full mb-2" />
      <SkeletonBox className="h-4 w-2/3 mb-4" />
      <div className="flex justify-between pt-4 border-t border-gray-100">
        <SkeletonBox className="h-4 w-24" />
        <SkeletonBox className="h-4 w-20" />
      </div>
    </div>
  </div>
);

// Blog Grid Skeleton
export const BlogGridSkeleton = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
    {Array.from({ length: count }).map((_, index) => (
      <BlogCardSkeleton key={index} />
    ))}
  </div>
);

// Sipariş Kartı Skeleton
export const OrderCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
    <div className="flex justify-between items-start mb-4">
      <div>
        <SkeletonBox className="h-5 w-32 mb-2" />
        <SkeletonBox className="h-4 w-24" />
      </div>
      <SkeletonBox className="h-6 w-20 rounded-full" />
    </div>
    <div className="flex gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <SkeletonBox key={i} className="w-16 h-16 rounded" />
      ))}
    </div>
  </div>
);

// Text Satırları Skeleton
export const TextSkeleton = ({ lines = 3 }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, index) => (
      <SkeletonBox 
        key={index} 
        className={`h-4 ${index === lines - 1 ? 'w-2/3' : 'w-full'}`} 
      />
    ))}
  </div>
);

// Avatar Skeleton
export const AvatarSkeleton = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };
  
  return <SkeletonBox className={`${sizes[size]} rounded-full`} />;
};

// Tam Sayfa Loading Skeleton
export const PageSkeleton = () => (
  <div className="min-h-screen bg-gray-50 py-8">
    <div className="max-w-7xl mx-auto px-4">
      {/* Başlık */}
      <div className="mb-8">
        <SkeletonBox className="h-8 w-48 mb-2" />
        <SkeletonBox className="h-4 w-64" />
      </div>
      
      {/* Grid */}
      <ProductGridSkeleton count={8} />
    </div>
  </div>
);

export default {
  SkeletonBox,
  ProductCardSkeleton,
  ProductGridSkeleton,
  ProductDetailSkeleton,
  CategoryCardSkeleton,
  CategoryGridSkeleton,
  ListItemSkeleton,
  CartItemSkeleton,
  BlogCardSkeleton,
  BlogGridSkeleton,
  OrderCardSkeleton,
  TextSkeleton,
  AvatarSkeleton,
  PageSkeleton
};
