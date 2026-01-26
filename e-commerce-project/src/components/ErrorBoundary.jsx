import { Component } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null 
    };
  }

  static getDerivedStateFromError() {
    // Bir sonraki render'da fallback UI göster
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Hata bilgilerini state'e kaydet
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Burada hata loglama servisi çağrılabilir (örn: Sentry, LogRocket)
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      // Özel fallback UI
      return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
          <div className="max-w-lg w-full text-center">
            {/* İkon */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle className="w-12 h-12 text-red-500" />
              </div>
            </div>

            {/* Başlık */}
            <h1 className="text-2xl lg:text-3xl font-bold text-[#252B42] dark:text-white mb-4">
              Bir Şeyler Ters Gitti
            </h1>

            {/* Açıklama */}
            <p className="text-[#737373] dark:text-gray-400 mb-8 leading-relaxed">
              Üzgünüz, beklenmeyen bir hata oluştu. Lütfen sayfayı yenileyin veya 
              ana sayfaya dönün. Sorun devam ederse bizimle iletişime geçin.
            </p>

            {/* Hata Detayları (Development modda) */}
            {import.meta.env.DEV && this.state.error && (
              <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-left">
                <p className="text-sm font-mono text-red-700 dark:text-red-400 mb-2">
                  <strong>Hata:</strong> {this.state.error.toString()}
                </p>
                {this.state.errorInfo && (
                  <details className="text-xs text-red-600 dark:text-red-400">
                    <summary className="cursor-pointer hover:text-red-800 dark:hover:text-red-300">
                      Stack Trace
                    </summary>
                    <pre className="mt-2 overflow-auto max-h-40 p-2 bg-red-100 dark:bg-red-900/30 rounded">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            {/* Butonlar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={this.handleReload}
                className="inline-flex items-center justify-center gap-2 bg-[#23A6F0] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1a8cd8] transition-colors shadow-md"
              >
                <RefreshCw className="w-5 h-5" />
                Sayfayı Yenile
              </button>
              
              <Link 
                to="/"
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#23A6F0] text-[#23A6F0] px-8 py-4 rounded-lg font-bold hover:bg-[#23A6F0] hover:text-white transition-colors"
              >
                <Home className="w-5 h-5" />
                Ana Sayfa
              </Link>
            </div>

            {/* İletişim Linki */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-[#737373] dark:text-gray-400">
                Sorun devam ediyor mu?{' '}
                <Link to="/contact" onClick={this.handleReset} className="text-[#23A6F0] hover:underline font-medium">
                  Bizimle iletişime geçin
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
    }

    // Hata yoksa children'ı render et
    return this.props.children;
  }
}

export default ErrorBoundary;
