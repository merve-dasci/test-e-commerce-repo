import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { loginUser } from '../store/actions';
import { setAuthHeader } from '../utils/auth';
import { toast } from 'react-toastify';

const Login = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  
  const { isLoading, loginError } = useSelector(state => state.client);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    let hasError = false;
    if (!email) {
      toast.error(t('validation.required'));
      hasError = true;
    }
    if (!password) {
      toast.error(t('validation.required'));
      hasError = true;
    }
    if (hasError) return;

    dispatch(loginUser({ email, password }))
      .then((response) => {
        const { token } = response;
        if (token) {
          setAuthHeader(token);
        }
        toast.success(t('auth.loginSuccess'));
        const redirectTo = location.state?.from?.pathname || '/';
        history.push(redirectTo);
      })
      .catch((error) => {
        toast.error(error.message || t('auth.invalidCredentials'));
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 sm:py-12 px-4">
      <nav className="py-3 sm:py-4 px-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-1440 mx-auto text-sm sm:text-base">
          <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">{t('nav.home')}</Link>
          <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
          <span className="text-gray-900 dark:text-white">{t('nav.login')}</span>
        </div>
      </nav>

      <div className="max-w-md mx-auto mt-6 sm:mt-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 sm:p-8">
          
        
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {t('auth.welcomeBack')}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{t('auth.signInAccount')}</p>
          </div>

          
          {loginError && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-800 dark:text-red-400 text-sm">{loginError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            
           
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                {t('auth.email')} *
              </label>
              <input
                type="email"
                {...register('email', { 
                  required: t('validation.required'),
                  pattern: { 
                    value: /^\S+@\S+$/i, 
                    message: t('validation.invalidEmail')
                  }
                })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
                placeholder={t('auth.email')}
              />
              {errors.email && <p className="text-red-600 dark:text-red-400 text-xs sm:text-sm mt-1">{errors.email.message}</p>}
            </div>

           
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                {t('auth.password')} *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register('password', { 
                    required: t('validation.required')
                  })}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
                  placeholder={t('auth.password')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && <p className="text-red-600 dark:text-red-400 text-xs sm:text-sm mt-1">{errors.password.message}</p>}
            </div>

          
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register('rememberMe')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700"
              />
              <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                {t('auth.rememberMe')}
              </label>
            </div>

           
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2.5 sm:py-3 px-4 rounded-md text-white font-medium text-sm ${
                isLoading 
                  ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
              }`}
            >
              {isLoading ? t('common.loading') : t('nav.login')}
            </button>
          </form>

          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('auth.noAccount')}{' '}
              <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                {t('nav.signup')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;