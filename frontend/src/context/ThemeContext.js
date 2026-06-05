import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import { Appearance, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, darkColors, gradients, darkGradients } from '../theme/colors';

const ThemeContext = createContext(null);
const THEME_KEY = 'appTheme';

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(THEME_KEY);
        if (stored) setThemeName(stored);
      } catch {}
    })();
  }, []);

  useEffect(() => {
    if (themeName === 'system') {
      const sub = Appearance.addChangeListener(() => {});
      return () => sub?.remove();
    }
  }, [themeName]);

  const setTheme = async (name) => {
    setThemeName(name);
    await AsyncStorage.setItem(THEME_KEY, name);
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
