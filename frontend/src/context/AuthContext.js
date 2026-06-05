import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api, { authService } from '../services/api';

const AuthContext = createContext(null);

const AUTH_TOKEN_KEY = 'authToken';
const USER_KEY = 'user';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [units, setUnitsState] = useState('milliliters');

  useEffect(() => {
    loadStoredAuth();
  }, []);

  const loadStoredAuth = async () => {
    try {
      const [storedToken, storedUser] = await Promise.all([
        AsyncStorage.getItem(AUTH_TOKEN_KEY),
        AsyncStorage.getItem(USER_KEY),
      ]);

      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
        api.defaults.headers.common['Authorization'] = `Token ${storedToken}`;
        try {
          const profile = await authService.getProfile();
          if (profile.data?.units) setUnitsState(profile.data.units);
        } catch (e) {
          // profile may not exist yet
        }
      }
    } catch (err) {

    } finally {
      setLoading(false);
    }
  };

  const storeAuthData = async (authToken, userData) => {
    await Promise.all([
      AsyncStorage.setItem(AUTH_TOKEN_KEY, authToken),
      AsyncStorage.setItem(USER_KEY, JSON.stringify(userData)),
    ]);
    setToken(authToken);
    setUser(userData);
    api.defaults.headers.common['Authorization'] = `Token ${authToken}`;
    try {
      const profile = await authService.getProfile();
      if (profile.data?.units) setUnitsState(profile.data.units);
    } catch (e) {
      // profile may not exist yet
    }
  };

  const clearAuthData = async () => {
    await Promise.all([
      AsyncStorage.removeItem(AUTH_TOKEN_KEY),
      AsyncStorage.removeItem(USER_KEY),
    ]);
    setToken(null);
    setUser(null);
    delete api.defaults.headers.common['Authorization'];
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/auth/login/', { email, password });
      const { token: authToken, user: userData } = response.data;
      await storeAuthData(authToken, userData);
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.error
        || err.response?.data?.detail
        || 'Login failed. Please check your credentials.';
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (username, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/auth/register/', {
        username,
        email,
        password,
      });
      const { token: authToken, user: userData } = response.data;
      await storeAuthData(authToken, userData);
      return { success: true };
    } catch (err) {
      const data = err.response?.data;
      let message = 'Registration failed. Please try again.';
      if (data) {
        if (typeof data === 'object') {
          message = Object.values(data).flat().join(' ');
        }
      }
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      if (token) {
        await api.post('/auth/logout/').catch(() => {});
      }
    } catch (err) {
      // Silently handle logout API errors
    } finally {
      await clearAuthData();
    }
  };

  const clearError = () => setError(null);

  const setUnits = (newUnits) => {
    setUnitsState(newUnits);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        units,
        setUnits,
        login,
        register,
        logout,
        clearError,
        isAuthenticated: !!token && !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
