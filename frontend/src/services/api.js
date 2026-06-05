import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

const API_BASE_URL = Constants.expoConfig?.extra?.apiUrl || 'http://192.168.1.237:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    if (config.method === 'get') {
      const lang = await AsyncStorage.getItem('appLanguage') || 'en';
      config.params = { ...config.params, lang };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      AsyncStorage.multiRemove(['authToken', 'user']);
    }
    return Promise.reject(error);
  }
);

export const cocktailService = {
  getAll: (params) => api.get('/cocktails/', { params }),
  getById: (id) => api.get(`/cocktails/${id}/`),
  search: (query) => api.get('/cocktails/', { params: { search: query } }),
  filter: (filters) => api.get('/cocktails/', { params: filters }),
  getCategories: () => api.get('/categories/'),
  getIngredients: () => api.get('/ingredients/'),
  getFavorites: () => api.get('/favorites/'),
  addFavorite: (cocktailId) => api.post('/favorites/', { cocktail_id: cocktailId }),
  removeFavorite: (id) => api.delete(`/favorites/${id}/`),
};

export const authService = {
  login: (email, password) => api.post('/auth/login/', { email, password }),
  register: (username, email, password) =>
    api.post('/auth/register/', { username, email, password }),
  logout: () => api.post('/auth/logout/'),
  getProfile: () => api.get('/user/profile/'),
  updateProfile: (data) => api.put('/user/profile/', data),
  deleteAccount: (password) => api.post('/auth/delete-account/', { password }),
};

export default api;
