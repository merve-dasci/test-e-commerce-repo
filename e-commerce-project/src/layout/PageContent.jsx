const PageContent = ({ children }) => {
  return (
    <main className="flex-1 w-full">
      <div className="max-w-1440 mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
};

export default PageContent;