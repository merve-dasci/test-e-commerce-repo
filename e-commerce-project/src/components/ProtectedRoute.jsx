import { Route, Redirect, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
  const location = useLocation();
  
  // localStorage'dan token al
  const token = localStorage.getItem('token');
  
  // Token var mı?
  const hasToken = token && token.length > 10;

  if (!hasToken) {
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  }

  return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
