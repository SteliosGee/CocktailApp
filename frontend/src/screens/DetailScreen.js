import React, { useState, useEffect } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, SafeAreaView,
  StatusBar, ActivityIndicator, Alert, Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { dataService } from '../services/dataService';
import { useAuth } from '../context/AppContext';
import { useTheme, makeStyles } from '../context/ThemeContext';
import { convertQuantity, formatQuantity } from '../utils/units';
import IngredientIcon from '../components/IngredientIcon';
import CocktailSvgIcon from '../components/CocktailSvgIcon';
import { s } from '../utils/responsive';
import { useLanguage } from '../i18n/LanguageContext';
import { translateCocktail } from '../utils/translateCocktail';
import { translateIngredient } from '../i18n/ingredientTranslations';

const { width } = Dimensions.get('window');
const INGREDIENT_SIZE = (width - s(80)) / 3;

const useStyles = makeStyles((c, g) => ({
  safeArea: { flex: 1, backgroundColor: c.backgroundGray },
  container: { flex: 1, backgroundColor: c.backgroundGray },
  centered: { alignItems: 'center', justifyContent: 'center' },
  backBtn: {
    position: 'absolute',
    top: 12,
    left: 16,
    zIndex: 10,
  },
  backBtnBg: {
    width: s(40),
    height: s(40),
    borderRadius: 12,
    backgroundColor: c.surfaceOverlay,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: c.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  scroll: { paddingBottom: s(40) },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: s(36),
    marginBottom: 0,
  },
  heroIconWrap: {
    shadowColor: c.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  infoSection: {
    backgroundColor: c.backgroundGray,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -16,
    paddingHorizontal: s(20),
    paddingTop: s(24),
    paddingBottom: s(16),
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: s(10),
  },
  name: {
    fontSize: s(26),
    fontWeight: '800',
    color: c.text,
    flex: 1,
    letterSpacing: -0.5,
  },
  favBtn: { padding: s(6), marginLeft: s(8) },
  desc: {
    fontSize: s(14),
    color: c.textLight,
    lineHeight: 21,
    marginBottom: s(14),
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: c.primaryAlpha,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  badgeText: {
    fontSize: s(12),
    color: c.primaryDark,
    fontWeight: '600',
  },
  section: {
    paddingHorizontal: s(20),
    marginBottom: s(24),
  },
  sectionTitle: {
    fontSize: s(18),
    fontWeight: '700',
    color: c.text,
    marginBottom: s(14),
    letterSpacing: -0.3,
  },
  ingredientsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  ingredientCard: {
    width: INGREDIENT_SIZE,
    alignItems: 'center',
    backgroundColor: c.surfaceCard,
    borderRadius: 14,
    paddingVertical: s(14),
    paddingHorizontal: s(6),
    marginBottom: s(10),
    shadowColor: c.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  ingredientName: {
    fontSize: s(11),
    fontWeight: '600',
    color: c.text,
    textAlign: 'center',
    marginBottom: s(6),
    marginTop: 6,
  },
  qtyBadge: {
    backgroundColor: c.primaryAlpha,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  qtyText: {
    fontSize: s(10),
    color: c.primaryDark,
    fontWeight: '600',
  },
  stepsContainer: {
    paddingLeft: 4,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 0,
  },
  stepIndicator: {
    alignItems: 'center',
    width: s(32),
    marginRight: s(14),
  },
  stepNum: {
    width: s(28),
    height: s(28),
    borderRadius: 14,
    backgroundColor: c.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  stepNumText: {
    fontSize: s(12),
    fontWeight: '700',
    color: c.white,
  },
  stepLine: {
    width: s(2),
    flex: 1,
    backgroundColor: c.primaryAlphaStrong,
    marginVertical: 4,
    minHeight: 16,
  },
  stepContent: {
    flex: 1,
    backgroundColor: c.surfaceCard,
    borderRadius: 12,
    paddingHorizontal: s(14),
    paddingVertical: s(12),
    marginBottom: s(10),
    shadowColor: c.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  stepText: {
    fontSize: s(14),
    color: c.textLight,
    lineHeight: 21,
  },
  bottomSpacer: { height: s(20) },
  errorTitle: {
    fontSize: s(18),
    fontWeight: '600',
    color: c.text,
    marginTop: s(12),
  },
  retryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: s(16),
    backgroundColor: c.primary,
    paddingHorizontal: s(24),
    paddingVertical: s(12),
    borderRadius: 12,
  },
  retryBtnText: { color: c.white, fontSize: s(14), fontWeight: '600' },
}));

const DetailScreen = ({ route, navigation }) => {
  const { cocktailId } = route.params;
  const { units } = useAuth();
  const { colors: c, gradients: g, isDark } = useTheme();
  const { t, language } = useLanguage();
  const styles = useStyles();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteId, setFavoriteId] = useState(null);
  const [toggleLoading, setToggleLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => { fetchCocktail(); }, [cocktailId]);

  const fetchCocktail = async () => {
    try {
      const response = await dataService.getById(cocktailId);
      const data = response.data;
      setCocktail(data);
      setFetchError(null);
      if (data.is_favorited !== undefined) {
        setIsFavorite(data.is_favorited);
        setFavoriteId(data.favorite_id || null);
      }
    } catch (error) {
      setFetchError(t('failedLoadDetails'));
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = async () => {
    setToggleLoading(true);
    try {
      if (isFavorite && favoriteId) {
        await dataService.removeFavorite(favoriteId);
        setIsFavorite(false);
        setFavoriteId(null);
      } else {
        const response = await dataService.addFavorite(cocktailId);
        setIsFavorite(true);
        setFavoriteId(response.data.id);
      }
    } catch (error) {
      Alert.alert(t('error'), t('failedUpdateFavs'));
    } finally {
      setToggleLoading(false);
    }
  };

  const parseSteps = (steps) => {
    if (!steps) return [];
    if (Array.isArray(steps)) return steps;
    return steps
      .split(/\n/)
      .map((s) => s.trim().replace(/^\d+[\.\)]\s*/, '').trim())
      .filter(Boolean);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.container, styles.centered]}>
          <ActivityIndicator size="large" color={c.primary} />
        </View>
      </SafeAreaView>
    );
  }

  if (fetchError) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.container, styles.centered]}>
          <Ionicons name="alert-circle-outline" size={48} color={c.error} />
          <Text style={{ fontSize: s(16), color: c.error, marginTop: 12 }}>{fetchError}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 16 }}>
            <Text style={{ fontSize: s(14), color: c.primary }}>{t('goBack')}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (!cocktail) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.container, styles.centered]}>
          <Ionicons name="alert-circle-outline" size={48} color={c.textMuted} />
          <Text style={styles.errorTitle}>{t('cocktailNotFound')}</Text>
          <TouchableOpacity style={styles.retryBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.retryBtnText}>{t('goBack')}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const tc = translateCocktail(cocktail, language) || cocktail;
  const steps = parseSteps(tc?.steps);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden />
      <View style={styles.container}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <View style={styles.backBtnBg}>
            <Ionicons name="chevron-back" size={22} color={c.text} />
          </View>
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          <LinearGradient
            colors={g.hero}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroSection}
          >
            <View style={styles.heroIconWrap}>
              <CocktailSvgIcon name={cocktail.name} size={90} />
            </View>
          </LinearGradient>

          <View style={styles.infoSection}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>{tc.name}</Text>
              <TouchableOpacity onPress={toggleFavorite} disabled={toggleLoading} style={styles.favBtn}>
                {toggleLoading ? (
                  <ActivityIndicator size="small" color={c.primary} />
                ) : (
                  <Ionicons
                    name={isFavorite ? 'star' : 'star-outline'}
                    size={26}
                    color={isFavorite ? c.star : c.starEmpty}
                  />
                )}
              </TouchableOpacity>
            </View>

            <Text style={styles.desc}>{tc.description || t('classicFallback')}</Text>

            <View style={styles.badgeRow}>
              {cocktail.base_spirit ? (
                <View style={styles.badge}>
                  <Ionicons name="wine" size={14} color={c.primaryDark} />
                  <Text style={styles.badgeText}>{tc.base_spirit}</Text>
                </View>
              ) : null}
              {cocktail.preparation_time > 0 && (
                <View style={styles.badge}>
                  <Ionicons name="time-outline" size={14} color={c.primaryDark} />
                  <Text style={styles.badgeText}>{cocktail.preparation_time}{t('min')}</Text>
                </View>
              )}
              {cocktail.cocktail_ingredients?.length > 0 && (
                <View style={styles.badge}>
                  <Ionicons name="list" size={14} color={c.primaryDark} />
                  <Text style={styles.badgeText}>{cocktail.cocktail_ingredients?.length}{t('items')}</Text>
                </View>
              )}
            </View>
          </View>

          {cocktail.cocktail_ingredients?.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t('ingredients')}</Text>
              <View style={styles.ingredientsGrid}>
                {cocktail.cocktail_ingredients.map((item, index) => (
                  <View key={item.id || index} style={styles.ingredientCard}>
                    <IngredientIcon name={item.ingredient?.name || item.name} size={48} />
                    <Text style={styles.ingredientName} numberOfLines={2}>
                      {language === 'el' ? translateIngredient(item.ingredient?.name || item.name) : (item.ingredient?.name || item.name)}
                    </Text>
                    <View style={styles.qtyBadge}>
                      <Text style={styles.qtyText}>{(() => {
                        const converted = convertQuantity(item.quantity, item.unit, units);
                        return formatQuantity(converted.quantity, converted.unit);
                      })()}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )}

          {steps.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t('preparation')}</Text>
              <View style={styles.stepsContainer}>
                {steps.map((step, index) => (
                  <View key={index} style={styles.stepItem}>
                    <View style={styles.stepIndicator}>
                      <View style={styles.stepNum}>
                        <Text style={styles.stepNumText}>{index + 1}</Text>
                      </View>
                      {index < steps.length - 1 && <View style={styles.stepLine} />}
                    </View>
                    <View style={styles.stepContent}>
                      <Text style={styles.stepText}>{step}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )}

          <View style={styles.bottomSpacer} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
