import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext(null);

const UNITS_KEY = 'appUnits';

export const AppProvider = ({ children }) => {
  const [units, setUnitsState] = useState('milliliters');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(UNITS_KEY);
        if (stored) setUnitsState(stored);
      } catch {}
      setLoading(false);
    })();
  }, []);

  const setUnits = async (newUnits) => {
    setUnitsState(newUnits);
    await AsyncStorage.setItem(UNITS_KEY, newUnits);
  };

  return (
    <AppContext.Provider value={{ units, setUnits, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAuth must be used within an AppProvider');
  return context;
};

export default AppContext;
