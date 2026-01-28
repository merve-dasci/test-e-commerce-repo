import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
     
      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-1440 mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">Bandage</h3>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-blue-600 cursor-pointer hover:text-blue-800" />
              <Instagram className="w-6 h-6 text-pink-600 cursor-pointer hover:text-pink-800" />
              <Twitter className="w-6 h-6 text-blue-400 cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-1440 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
         
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('footer.companyInfo')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('nav.about')}</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Carrier</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">We are hiring</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('nav.blog')}</a></li>
            </ul>
          </div>

       
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('footer.privacyPolicy')}</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('footer.termsOfService')}</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('footer.legal')}</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">User Agreement</a></li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('footer.features')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('footer.businessMarketing')}</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('footer.userAnalytic')}</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('footer.liveChat')}</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('footer.unlimitedSupport')}</a></li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">iOS & Android</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Watch a Demo</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Customers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">API</a></li>
            </ul>
          </div>

       
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('footer.subscribe')}</h4>
            <div className="flex mb-3">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="bg-white dark:bg-gray-700 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-r-md transition-colors duration-200 font-medium">
                {t('footer.subscribe')}
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{t('footer.subscribeText')}</p>
          </div>
        </div>

       
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 px-8 py-6 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0 font-bold">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;