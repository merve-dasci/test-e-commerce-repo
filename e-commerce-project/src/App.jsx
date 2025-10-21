import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header.jsx';
import PageContent from './layout/PageContent.jsx';
import Footer from './layout/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import Shop from './pages/Shop.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <PageContent>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={Shop} />
          </Switch>
        </PageContent>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
