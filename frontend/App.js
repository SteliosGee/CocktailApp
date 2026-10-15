import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { AppProvider } from './src/context/AppContext';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { LanguageProvider } from './src/i18n/LanguageContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { s } from './src/utils/responsive';
import LoadingScreen from './src/components/LoadingScreen';

import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FilterScreen from './src/screens/FilterScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabIcon = ({ name, focused, color, size, gradient }) => {
  const iconName = focused ? name : `${name}-outline`;
  return (
    <View style={styles.tabIconWrap}>
      {focused ? (
        <LinearGradient
          colors={gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.tabIconActive}
        >
          <Ionicons name={iconName} size={26} color="#FFFFFF" />
        </LinearGradient>
      ) : (
        <View style={styles.tabIconInactive}>
          <Ionicons name={iconName} size={28} color={color} />
        </View>
      )}
    </View>
  );
};

const TabNavigator = () => {
  const { colors: c, gradients: g } = useTheme();
  const insets = useSafeAreaInsets();
  const tabBarHeight = s(64) + insets.bottom;

  const CustomTabBarButton = ({ children, onPress, accessibilityState }) => {
    const focused = accessibilityState?.selected;
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => ({
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: pressed ? 0.7 : 1,
        })}
      >
        {children}
      </Pressable>
    );
  };

  return (
    <View style={[styles.tabContainer, { backgroundColor: c.backgroundGray }]}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'List') iconName = 'grid';
            else if (route.name === 'Favorites') iconName = 'heart';
            else if (route.name === 'Profile') iconName = 'person';

            return (
              <TabIcon name={iconName} focused={focused} color={color} size={size} gradient={g.primary} />
            );
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: c.backgroundGray,
            borderTopWidth: 0,
            elevation: 0,
            height: tabBarHeight,
            shadowColor: c.shadow,
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.06,
            shadowRadius: 12,
          },
          tabBarLabel: () => null,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarHideOnKeyboard: true,
          safeAreaInsets: { bottom: 0, top: 0 },
          tabBarActiveTintColor: c.primary,
          tabBarInactiveTintColor: c.textMuted,
        })}
      >
        <Tab.Screen name="List" component={ListScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
};

const AppNavigator = () => {
  const { colors: c } = useTheme();
  return (
    <>
      <StatusBar hidden />
      <View style={{ flex: 1, backgroundColor: c.backgroundGray }}>
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: c.backgroundGray },
        }}
      >
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ animation: 'none' }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
        />
        <Stack.Screen
          name="Filter"
          component={FilterScreen}
          options={{ presentation: 'modal' }}
        />
      </Stack.Navigator>
      </NavigationContainer>
      </View>
    </>
  );
};

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!ready) return <LoadingScreen />;

  return (
    <AppProvider>
      <ThemeProvider>
        <LanguageProvider>
          <AppNavigator />
        </LanguageProvider>
      </ThemeProvider>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
  tabIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabIconActive: {
    width: s(64),
    height: s(40),
    borderRadius: s(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIconInactive: {
    alignItems: 'center',
    justifyContent: 'center',
    height: s(40),
  },
});
