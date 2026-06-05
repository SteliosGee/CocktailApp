import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, FlatList, SafeAreaView, StatusBar,
  TouchableOpacity, ActivityIndicator, RefreshControl, Alert, Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';
import { useTheme, makeStyles } from '../context/ThemeContext';
import { cocktailService } from '../services/api';
import CocktailSvgIcon from '../components/CocktailSvgIcon';
import { s } from '../utils/responsive';
import { useLanguage } from '../i18n/LanguageContext';
import { translateCocktail } from '../utils/translateCocktail';

const useStyles = makeStyles((c) => ({
  safeArea: { flex: 1, backgroundColor: c.backgroundGray },
  container: { flex: 1, backgroundColor: c.backgroundGray },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingHorizontal: s(20),
    paddingTop: s(16),
    paddingBottom: s(8),
  },
  title: {
    fontSize: s(28),
    fontWeight: '800',
    color: c.text,
    letterSpacing: -0.7,
  },
  count: {
    fontSize: s(14),
    fontWeight: '500',
    color: c.textMuted,
  },
  loadingWrap: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  list: { flexGrow: 1, paddingBottom: 20, paddingTop: 4 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: c.surfaceCard,
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 5,
    paddingHorizontal: s(14),
    paddingVertical: s(14),
    shadowColor: c.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  itemLeft: { flexDirection: 'row', alignItems: 'center', flex: 1, gap: 14 },
  itemText: { flex: 1 },
  nameRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 3 },
  itemName: { fontSize: s(16), fontWeight: '600', color: c.text, flex: 1, letterSpacing: -0.2 },
  starIcon: { marginLeft: 6 },
  itemDesc: { fontSize: s(13), color: c.textLight, lineHeight: 18, marginBottom: 4 },
  spiritTag: {
    alignSelf: 'flex-start',
    backgroundColor: c.primaryAlpha,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  spiritTagText: { fontSize: s(11), fontWeight: '600', color: c.primaryDark },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: s(40),
    paddingTop: s(60),
  },
  emptyIconWrap: {
    width: s(80),
    height: s(80),
    borderRadius: s(40),
    backgroundColor: c.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: s(16),
  },
  emptyTitle: {
    fontSize: s(18),
    fontWeight: '700',
    color: c.text,
    marginBottom: s(8),
    letterSpacing: -0.3,
  },
  emptyText: {
    fontSize: s(14),
    color: c.textLight,
    textAlign: 'center',
    lineHeight: 20,
  },
  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: s(20),
    backgroundColor: c.primary,
    paddingHorizontal: s(28),
    paddingVertical: s(13),
    borderRadius: 12,
  },
  loginBtnText: { color: c.white, fontSize: s(15), fontWeight: '600' },
  retryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 20,
    backgroundColor: c.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  retryBtnText: { color: c.white, fontSize: s(14), fontWeight: '600' },
}));

const FavoritesScreen = ({ navigation }) => {
  const { colors: c, isDark } = useTheme();
  const styles = useStyles();
  const { user } = useAuth();
  const { t, language } = useLanguage();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (user) fetchFavorites();
  }, [user]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (user) fetchFavorites(false);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    });
    return unsubscribe;
  }, [navigation, user]);

  const fetchFavorites = async (showLoader = true) => {
    if (showLoader) setLoading(true);
    try {
      const response = await cocktailService.getFavorites();
      setFavorites(response.data.results || response.data);
      setError(null);
    } catch (error) {
      setError(t('failedLoadFavs'));
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchFavorites(false);
  }, []);

  const removeFavorite = async (favId) => {
    Alert.alert(t('removeFavorite'), t('removeFavConfirm'), [
      { text: t('cancel'), style: 'cancel' },
      {
        text: t('remove'),
        style: 'destructive',
        onPress: async () => {
          try {
            await cocktailService.removeFavorite(favId);
            setFavorites((prev) => prev.filter((f) => f.id !== favId));
          } catch (error) {
            Alert.alert(t('error'), t('failedRemoveFav'));
          }
        },
      },
    ]);
  };

  if (!user) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={c.backgroundGray} />
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <Text style={styles.title}>{t('favorites')}</Text>
          </View>
          <View style={styles.emptyState}>
            <View style={styles.emptyIconWrap}>
              <Ionicons name="heart-outline" size={36} color={c.textMuted} />
            </View>
            <Text style={styles.emptyTitle}>{t('signInViewFavs')}</Text>
            <Text style={styles.emptyText}>
              {t('favsDescription')}
            </Text>
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
              <Ionicons name="log-in" size={18} color={c.white} />
              <Text style={styles.loginBtnText}>{t('logIn')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  const renderItem = ({ item }) => {
    const cocktail = item.cocktail || item;
    const tc = translateCocktail(cocktail, language);
    return (
      <Animated.View style={{ opacity: fadeAnim }}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Detail', { cocktailId: cocktail.id })}
          onLongPress={() => removeFavorite(item.id)}
          activeOpacity={0.7}
        >
          <View style={styles.itemLeft}>
            <CocktailSvgIcon name={cocktail.name} size={42} />
            <View style={styles.itemText}>
              <View style={styles.nameRow}>
                <Text style={styles.itemName} numberOfLines={1}>{tc.name}</Text>
                <Ionicons name="star" size={12} color={c.star} style={styles.starIcon} />
              </View>
              <Text style={styles.itemDesc} numberOfLines={1}>
                {tc.description || t('classicFallback')}
              </Text>
              {tc.base_spirit ? (
                <View style={styles.spiritTag}>
                  <Text style={styles.spiritTagText}>{tc.base_spirit}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={c.backgroundGray} />
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>{t('favorites')}</Text>
          {favorites.length > 0 && (
            <Text style={styles.count}>{favorites.length} {t('saved')}</Text>
          )}
        </View>

        {error && !loading ? (
          <View style={styles.emptyState}>
            <View style={styles.emptyIconWrap}>
              <Ionicons name="alert-circle-outline" size={36} color={c.error} />
            </View>
            <Text style={styles.emptyTitle}>{t('oops')}</Text>
            <Text style={styles.emptyText}>{error}</Text>
            <TouchableOpacity style={styles.retryBtn} onPress={() => fetchFavorites()}>
              <Ionicons name="refresh" size={16} color={c.white} />
              <Text style={styles.retryBtnText}>{t('retry')}</Text>
            </TouchableOpacity>
          </View>
        ) : loading && !refreshing ? (
          <View style={styles.loadingWrap}>
            <ActivityIndicator size="large" color={c.primary} />
          </View>
        ) : (
          <FlatList
            data={favorites}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[c.primary]}
                tintColor={c.primary}
              />
            }
            ListEmptyComponent={
              <View style={styles.emptyState}>
                <View style={styles.emptyIconWrap}>
                  <Ionicons name="heart-outline" size={36} color={c.textMuted} />
                </View>
                <Text style={styles.emptyTitle}>{t('noFavoritesYet')}</Text>
                <Text style={styles.emptyText}>
                  {t('tapStar')}
                </Text>
              </View>
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
