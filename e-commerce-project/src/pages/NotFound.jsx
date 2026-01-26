import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Numarası */}
        <div className="relative">
          <h1 className="text-[150px] lg:text-[200px] font-bold text-gray-200 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#23A6F0] text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
              Sayfa Bulunamadı
            </div>
          </div>
        </div>

        {/* Mesaj */}
        <div className="mt-8 mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#252B42] mb-4">
            Oops! Bir şeyler ters gitti
          </h2>
          <p className="text-[#737373] leading-relaxed">
            Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
            Endişelenmeyin, sizi doğru yere yönlendirelim!
          </p>
        </div>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-[#23A6F0] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1a8cd8] transition-colors shadow-md"
          >
            <Home className="w-5 h-5" />
            Ana Sayfaya Dön
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border-2 border-[#23A6F0] text-[#23A6F0] px-8 py-4 rounded-lg font-bold hover:bg-[#23A6F0] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Geri Git
          </button>
        </div>

        {/* Hızlı Linkler */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-[#737373] mb-4">Belki bunlar yardımcı olabilir:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/shop" className="text-[#23A6F0] hover:underline font-medium">
              Mağaza
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/about" className="text-[#23A6F0] hover:underline font-medium">
              Hakkımızda
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/contact" className="text-[#23A6F0] hover:underline font-medium">
              İletişim
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/blog" className="text-[#23A6F0] hover:underline font-medium">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
