import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRoles } from '../store/actions';
import axios from 'axios';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  
  
  const roles = useSelector(state => state.client.roles);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const selectedRoleId = watch('role_id');
  const password = watch('password');

  
  useEffect(() => {
    if (roles.length === 0) {
      dispatch(fetchRoles())
        .catch(() => {
          setError('Could not load roles');
        });
    }
  }, [dispatch, roles.length]);

 
  const isStore = () => {
    const role = roles.find(r => r.id == selectedRoleId);
    return role && role.name.toLowerCase() === 'store';
  };


  const onSubmit = (data) => {
    setLoading(true);
    setError('');

    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: Number(data.role_id)
    };

    if (isStore()) {
      formData.store = {
        name: data.storeName,
        phone: data.storePhone,
        tax_no: data.taxId,
        bank_account: data.bankAccount
      };
    }

    axios.post('https://workintech-fe-ecommerce.onrender.com/signup', formData)
      .then(() => {
        toast.success('Kayıt başarılı! Lütfen e-postanızı kontrol edin.');
        history.push('/');
      })
      .catch(() => {
        toast.error('Kayıt başarısız. Lütfen tekrar deneyin.');
        setError('Sign up failed. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 sm:py-12 px-4">
     
      <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700 text-sm sm:text-base">
        <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Home</Link>
        <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
        <span className="text-gray-900 dark:text-white">Sign Up</span>
      </div>

      <div className="max-w-md mx-auto mt-6 sm:mt-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 sm:p-8">
          
        
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Create Account
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Join us today and start shopping</p>
          </div>

          
          {error && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-800 dark:text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            
           
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                Full Name *
              </label>
              <input
                type="text"
                {...register('name', { 
                  required: 'Name is required',
                  minLength: { value: 3, message: 'Name must be at least 3 characters' }
                })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-600 dark:text-red-400 text-xs sm:text-sm mt-1">{errors.name.message}</p>}
            </div>

          
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                Email Address *
              </label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Please enter a valid email' }
                })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-600 dark:text-red-400 text-xs sm:text-sm mt-1">{errors.email.message}</p>}
            </div>

         
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                Account Type *
              </label>
              <select
                {...register('role_id', { required: 'Please select a role' })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
              >
                <option value="">Select account type</option>
                {roles.map(role => (
                  <option key={role.id} value={role.id}>{role.name}</option>
                ))}
              </select>
              {errors.role_id && <p className="text-red-600 dark:text-red-400 text-xs sm:text-sm mt-1">{errors.role_id.message}</p>}
            </div>

          
            {isStore() && (
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 sm:pt-6">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Store Information
                </h3>
                
               
                <div className="mb-3 sm:mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                    Store Name *
                  </label>
                  <input
                    type="text"
                    {...register('storeName', { 
                      required: isStore() ? 'Store name is required' : false,
                      minLength: { value: 3, message: 'Store name must be at least 3 characters' }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
                    placeholder="Enter your store name"
                  />
                  {errors.storeName && <p className="text-red-600 dark:text-red-400 text-xs sm:text-sm mt-1">{errors.storeName.message}</p>}
                </div>

          
                <div className="mb-3 sm:mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                    Store Phone *
                  </label>
                  <input
                    type="tel"
                    {...register('storePhone', { 
                      required: isStore() ? 'Store phone is required' : false,
                      pattern: { value: /^(\+90|0)?[5][0-9]{9}$/, message: 'Please enter a valid Turkish phone number' }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
                    placeholder="05XXXXXXXXX"
                  />
                  {errors.storePhone && <p className="text-red-600 dark:text-red-400 text-xs sm:text-sm mt-1">{errors.storePhone.message}</p>}
                </div>

              
                <div className="mb-3 sm:mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                    Tax ID *
                  </label>
                  <input
                    type="text"
                    {...register('taxId', { 
                      required: isStore() ? 'Tax ID is required' : false,
                      pattern: { value: /^T\d{4}V\d{6}$/, message: 'Tax ID must match pattern TXXXXVXXXXXX' }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
                    placeholder="TXXXXVXXXXXX"
                  />
                  {errors.taxId && <p className="text-red-600 dark:text-red-400 text-xs sm:text-sm mt-1">{errors.taxId.message}</p>}
                </div>

               
                <div className="mb-3 sm:mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                    Bank Account (IBAN) *
                  </label>
                  <input
                    type="text"
                    {...register('bankAccount', { 
                      required: isStore() ? 'Bank account is required' : false,
                      pattern: { value: /^TR\d{2}\d{4}\d{4}\d{4}\d{4}\d{4}\d{2}$/, message: 'Please enter a valid Turkish IBAN' }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
                    placeholder="TR00 0000 0000 0000 0000 0000 00"
                  />
                  {errors.bankAccount && <p className="text-red-600 dark:text-red-400 text-xs sm:text-sm mt-1">{errors.bankAccount.message}</p>}
                </div>
              </div>
            )}

           
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                Password *
              </label>
              <input
                type="password"
                {...register('password', { 
                  required: 'Password is required',
                  minLength: { value: 8, message: 'Password must be at least 8 characters' },
                  pattern: { 
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
                    message: 'Password must contain uppercase, lowercase, number and special character' 
                  }
                })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-600 dark:text-red-400 text-xs sm:text-sm mt-1">{errors.password.message}</p>}
            </div>

           
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                {...register('confirmPassword', { 
                  required: 'Please confirm your password',
                  validate: value => value === password || 'Passwords do not match'
                })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <p className="text-red-600 dark:text-red-400 text-xs sm:text-sm mt-1">{errors.confirmPassword.message}</p>}
            </div>

           
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2.5 sm:py-3 px-4 rounded-md text-white font-medium text-sm ${
                loading 
                  ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
              }`}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;