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
      // Token'ı Bearer olmadan gönder (API bu şekilde bekliyor)
      config.headers.Authorization = token;
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
    // 401 hatası aldığımızda sadece hatayı döndür
    // Token silme işlemi manuel logout'ta yapılacak
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