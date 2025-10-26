import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuthToken } from './utils/auth';
import { verifyToken } from './store/actions';
import Header from './layout/Header.jsx';
import PageContent from './layout/PageContent.jsx';
import Footer from './layout/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Contact from './pages/Contact.jsx';
import Team from './pages/Team.jsx';
import About from './pages/About.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';

function App() {
  const dispatch = useDispatch();

 
  useEffect(() => {
    const token = getAuthToken();
    
    if (token) {
    
      dispatch(verifyToken(token))
        .then(() => {
          console.log('Token verified successfully');
        })
        .catch((error) => {
          console.log('Token verification failed:', error.message);
        });
    }
  }, [dispatch]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <PageContent>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/product/:id" component={ProductDetail} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </PageContent>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
