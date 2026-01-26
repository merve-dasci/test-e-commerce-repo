import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuthToken } from './utils/auth';
import { verifyToken } from './store/actions';
import { fetchCategories } from './store/actions/productActions';
import Header from './layout/Header.jsx';
import PageContent from './layout/PageContent.jsx';
import Footer from './layout/Footer.jsx';
import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomePage = React.lazy(() => import('./pages/HomePage.jsx'));
const Shop = React.lazy(() => import('./pages/Shop.jsx'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Team = React.lazy(() => import('./pages/Team.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const SignUp = React.lazy(() => import('./pages/SignUp.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const Cart = React.lazy(() => import('./pages/Cart.jsx'));
const CreateOrder = React.lazy(() => import('./pages/CreateOrder.jsx'));
const Orders = React.lazy(() => import('./pages/Orders.jsx'));
const Blog = React.lazy(() => import('./pages/Blog.jsx'));
const Pricing = React.lazy(() => import('./pages/Pricing.jsx'));
const Favorites = React.lazy(() => import('./pages/Favorites.jsx'));
const NotFound = React.lazy(() => import('./pages/NotFound.jsx'));
import ProtectedRoute from './components/ProtectedRoute.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { loadFavorites } from './store/actions/favoritesActions';

function App() {
  const dispatch = useDispatch();

 
  useEffect(() => {
    const token = getAuthToken();
    
    
    const isValidToken = token && token !== 'null' && token !== 'undefined' && token !== '';
    
    if (isValidToken) {
      dispatch(verifyToken(token));
    }

    
    dispatch(fetchCategories());
    dispatch(loadFavorites());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
          <Header />
          <PageContent>
            <Suspense fallback={<div className="flex justify-center items-center h-96 text-gray-400 dark:text-gray-500">Yükleniyor...</div>}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/shop/:gender/:categoryName/:categoryId" component={Shop} />
                <Route exact path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" component={ProductDetail} />
                <Route exact path="/product/:id" component={ProductDetail} />
                <Route exact path="/cart" component={Cart} />
                <ProtectedRoute exact path="/order">
                  <CreateOrder />
                </ProtectedRoute>
                <ProtectedRoute exact path="/orders">
                  <Orders />
                </ProtectedRoute>
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/about" component={About} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />
               
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </PageContent>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
