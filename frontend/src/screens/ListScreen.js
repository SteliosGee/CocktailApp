import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View, Text, FlatList, SafeAreaView, StatusBar,
  TouchableOpacity, TextInput, ActivityIndicator, RefreshControl, Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, makeStyles } from '../context/ThemeContext';
import { dataService } from '../services/dataService';
import { s } from '../utils/responsive';
import CocktailSvgIcon from '../components/CocktailSvgIcon';
import { useLanguage } from '../i18n/LanguageContext';
import { translateCocktail } from '../utils/translateCocktail';

const useStyles = makeStyles((c) => ({
  safeArea: { flex: 1, backgroundColor: c.backgroundGray },
  container: { flex: 1, backgroundColor: c.backgroundGray },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: c.backgroundGray,
  },
  greeting: {
    fontSize: s(14),
    fontWeight: '500',
    color: c.textMuted,
  },
  title: {
    fontSize: s(28),
    fontWeight: '800',
    color: c.text,
    letterSpacing: -0.7,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: c.inputBg,
    borderRadius: 14,
    paddingHorizontal: 14,
    height: s(44),
    borderWidth: 1,
    borderColor: c.inputBorder,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: s(15),
    color: c.text,
  },
  filterBtn: {
    width: s(44),
    height: s(44),
    borderRadius: s(14),
    backgroundColor: c.primaryAlpha,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  filterBtnActive: {
    backgroundColor: c.primary,
  },
  filterBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: s(18),
    height: s(18),
    borderRadius: s(9),
    backgroundColor: c.error,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterBadgeText: {
    fontSize: s(10),
    fontWeight: '700',
    color: c.white,
  },
  loadingWrap: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: c.backgroundGray },
  list: { flexGrow: 1, paddingBottom: 20, paddingTop: 4 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: c.surfaceCard,
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 5,
    paddingHorizontal: 14,
    paddingVertical: 14,
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
    paddingHorizontal: 40,
    paddingTop: 60,
  },
  emptyIconWrap: {
    width: s(80),
    height: s(80),
    borderRadius: s(40),
    backgroundColor: c.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: s(18),
    fontWeight: '700',
    color: c.text,
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  emptyText: {
    fontSize: s(14),
    color: c.textLight,
    textAlign: 'center',
    lineHeight: 20,
  },
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

const ListScreen = ({ navigation }) => {
  const { colors: c, isDark } = useTheme();
  const { t, language } = useLanguage();
  const styles = useStyles();
  const [searchQuery, setSearchQuery] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const fadeAnim = useState(new Animated.Value(0))[0];
  const [filters, setFilters] = useState({
    is_alcoholic: null,
    base_spirit: null,
    ingredient: null,
  });
  const filtersRef = useRef(filters);

  const fetchCocktails = async (showLoader = true, currentFilters = null) => {
    if (showLoader) setLoading(true);
    setError(null);
    try {
      const f = currentFilters || filtersRef.current;
      const params = {};
      if (f.is_alcoholic !== null) params.is_alcoholic = f.is_alcoholic;
      if (f.base_spirit) params.base_spirit = f.base_spirit;
      if (f.ingredient) params.ingredient = f.ingredient;

      const response = await dataService.getAll(
        Object.keys(params).length > 0 ? params : {}
      );
      setCocktails(response.data);
    } catch (err) {
      setError(t('failedLoadCocktails'));
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => { fetchCocktails(); }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchCocktails(false);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    });
    return unsubscribe;
  }, [navigation]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchCocktails(false);
  }, []);

  const handleFilterApply = (newFilters) => {
    setFilters(newFilters);
    filtersRef.current = newFilters;
    fetchCocktails(false, newFilters);
  };

  const filteredCocktails = cocktails.filter(
    (cocktail) => {
      const q = searchQuery.toLowerCase();
      if (cocktail.name.toLowerCase().includes(q)) return true;
      if ((cocktail.description || '').toLowerCase().includes(q)) return true;
      if (cocktail.base_spirit && cocktail.base_spirit.toLowerCase().includes(q)) return true;
      if (cocktail.ingredients && cocktail.ingredients.some(ing => ing.name.toLowerCase().includes(q))) return true;
      return false;
    }
  );

  const activeFilterCount =
    (filters.is_alcoholic !== null ? 1 : 0) +
    (filters.base_spirit ? filters.base_spirit.split(',').length : 0) +
    (filters.ingredient ? filters.ingredient.split(',').length : 0);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return t('goodMorning');
    if (hour < 17) return t('goodAfternoon');
    return t('goodEvening');
  };

  const renderEmpty = () => {
    if (loading) return null;
    if (error) {
      return (
        <View style={styles.emptyState}>
          <View style={styles.emptyIconWrap}>
            <Ionicons name="alert-circle-outline" size={40} color={c.error} />
          </View>
          <Text style={styles.emptyTitle}>{t('oops')}</Text>
          <Text style={styles.emptyText}>{error}</Text>
          <TouchableOpacity style={styles.retryBtn} onPress={() => fetchCocktails()}>
            <Ionicons name="refresh" size={16} color={c.white} />
            <Text style={styles.retryBtnText}>{t('retry')}</Text>
          </TouchableOpacity>
        </View>
      );
    }
    if (searchQuery) {
      return (
        <View style={styles.emptyState}>
          <View style={styles.emptyIconWrap}>
            <Ionicons name="search-outline" size={40} color={c.textMuted} />
          </View>
          <Text style={styles.emptyTitle}>{t('noCocktailsFound')}</Text>
          <Text style={styles.emptyText}>{t('tryDifferentSearch')}</Text>
        </View>
      );
    }
    return (
      <View style={styles.emptyState}>
        <CocktailSvgIcon name="Mojito" size={72} />
        <Text style={styles.emptyTitle}>{t('noCocktailsYet')}</Text>
        <Text style={styles.emptyText}>{t('cocktailsAppear')}</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    const tc = translateCocktail(item, language);
    return (
      <Animated.View style={{ opacity: fadeAnim }}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Detail', { cocktailId: item.id })}
          activeOpacity={0.7}
        >
          <View style={styles.itemLeft}>
            <CocktailSvgIcon name={item.name} size={42} />
            <View style={styles.itemText}>
              <View style={styles.nameRow}>
                <Text style={styles.itemName} numberOfLines={1}>{tc.name}</Text>
                {item.is_favorited && <Ionicons name="star" size={12} color={c.star} style={styles.starIcon} />}
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
          <Ionicons name="chevron-forward" size={16} color={c.textMuted} />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>{t('cocktails')}</Text>
          <Text style={styles.greeting}>{getGreeting()}</Text>
        </View>

        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} color={c.textMuted} />
            <TextInput
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder={t('searchPlaceholder')}
              placeholderTextColor={c.textMuted}
              returnKeyType="search"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                <Ionicons name="close-circle" size={18} color={c.textMuted} />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={[styles.filterBtn, activeFilterCount > 0 && styles.filterBtnActive]}
            onPress={() => navigation.navigate('Filter', { filters, onApply: handleFilterApply })}
          >
            <Ionicons name="options" size={20} color={activeFilterCount > 0 ? c.white : c.primary} />
            {activeFilterCount > 0 && (
              <View style={styles.filterBadge}>
                <Text style={styles.filterBadgeText}>{activeFilterCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {loading && !refreshing ? (
          <View style={styles.loadingWrap}>
            <ActivityIndicator size="large" color={c.primary} />
          </View>
        ) : (
          <FlatList
            data={filteredCocktails}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            style={{ backgroundColor: c.backgroundGray }}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[c.primary]}
                tintColor={c.primary}
              />
            }
            ListEmptyComponent={renderEmpty}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;
