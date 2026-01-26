const LoadingSpinner = ({ message = 'Yükleniyor...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mb-4"></div>
      <p className="text-gray-600 text-lg">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
