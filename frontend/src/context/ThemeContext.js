import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import { Appearance, StyleSheet } from 'react-native';
import { colors, darkColors, gradients, darkGradients } from '../theme/colors';
import { useAuth } from './AuthContext';
import { authService } from '../services/api';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const { user } = useAuth();
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    if (user) loadTheme();
  }, [user]);

  useEffect(() => {
    if (themeName === 'system') {
      const sub = Appearance.addChangeListener(() => {});
      return () => sub?.remove();
    }
  }, [themeName]);

  const loadTheme = async () => {
    try {
      const response = await authService.getProfile();
      const t = response.data?.theme;
      if (t) setThemeName(t);
    } catch (err) {
      // ignore
    }
  };

  const setTheme = async (name) => {
    setThemeName(name);
    try {
      await authService.updateProfile({ theme: name });
    } catch (err) {
      // ignore
    }
  };

  let resolvedTheme = themeName;
  if (themeName === 'system') {
    resolvedTheme = Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';
  }

  const isDark = resolvedTheme === 'dark';
  const colorTokens = isDark ? darkColors : colors;
  const gradientTokens = isDark ? darkGradients : gradients;

  return (
    <ThemeContext.Provider value={{
      themeName,
      isDark,
      colors: colorTokens,
      gradients: gradientTokens,
      setTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return { isDark: false, colors, gradients, themeName: 'light', setTheme: () => {} };
  }
  return context;
};

export const makeStyles = (factory) => {
  const useStyles = () => {
    const { colors: c, gradients: g, isDark } = useTheme();
    return useMemo(() => StyleSheet.create(factory(c, g, isDark)), [c, g, isDark]);
  };
  return useStyles;
};

export default ThemeContext;
