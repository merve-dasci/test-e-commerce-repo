import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../store/actions';
import { setAuthHeader } from '../utils/auth';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  
  const { isLoading, loginError } = useSelector(state => state.client);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const { email, password, rememberMe } = data;
    
    dispatch(loginUser({ email, password }, rememberMe))
      .then((response) => {
        const { token } = response;
        
       
        if (token) {
          setAuthHeader(token);
        }
        
        toast.success('Login successful!');
        
       
        const redirectTo = location.state?.from?.pathname || '/';
        history.push(redirectTo);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Toaster position="top-right" />
      
     
      <nav className="py-4 px-4 bg-white border-b border-gray-200">
        <div className="max-w-1440 mx-auto">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">Login</span>
        </div>
      </nav>

      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          
        
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          
          {loginError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm">{loginError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: { 
                    value: /^\S+@\S+$/i, 
                    message: 'Please enter a valid email' 
                  }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
            </div>

           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register('password', { 
                    required: 'Password is required'
                  })}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
            </div>

          
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register('rememberMe')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

           
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-md text-white font-medium text-sm ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
              }`}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;