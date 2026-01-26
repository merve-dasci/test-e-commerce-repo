import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
     
      <div className="bg-gray-100 dark:bg-gray-900">
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
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Company Info</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Carrier</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">We are hiring</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Blog</a></li>
            </ul>
          </div>

       
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Legal</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">User Agreement</a></li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Features</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Business Marketing</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">User Analytic</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Live Chat</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Unlimited Support</a></li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">iOS & Android</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Watch a Demo</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Customers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">API</a></li>
            </ul>
          </div>

       
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h4>
            <div className="flex mb-3">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="bg-white dark:bg-gray-700 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-r-md transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Lorem imp sum dolor Amit</p>
          </div>
        </div>

       
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 px-8 py-6 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0 font-bold">
              Made With Love By Finland All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;