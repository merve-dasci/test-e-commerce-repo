import axios from 'axios';


const api = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
   
    if (error.response?.status === 401) {
   
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);


export const apiEndpoints = {
 
  signup: '/signup',
  login: '/login',
  roles: '/roles',
  
 
  profile: '/profile',
  
 
  products: '/products',
  categories: '/categories',
};


export const apiMethods = {
  
  signup: (data) => api.post(apiEndpoints.signup, data),
  login: (data) => api.post(apiEndpoints.login, data),
  getRoles: () => api.get(apiEndpoints.roles),
  

  getProfile: () => api.get(apiEndpoints.profile),
  

  getProducts: (params) => api.get(apiEndpoints.products, { params }),
  getCategories: () => api.get(apiEndpoints.categories),
};

export default api;