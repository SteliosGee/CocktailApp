import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  SafeAreaView, StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, makeStyles } from '../context/ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';
import { s } from '../utils/responsive';

const baseSpirits = [
  { key: 'Vodka', labelKey: 'vodka' },
  { key: 'Rum', labelKey: 'rum' },
  { key: 'Gin', labelKey: 'gin' },
  { key: 'Whiskey', labelKey: 'whiskey' },
  { key: 'Tequila', labelKey: 'tequila' },
  { key: 'Brandy', labelKey: 'brandy' },
  { key: 'Bourbon', labelKey: 'bourbon' },
  { key: 'Scotch', labelKey: 'scotch' },
  { key: 'Cognac', labelKey: 'cognac' },
  { key: 'Mezcal', labelKey: 'mezcal' },
  { key: 'Pisco', labelKey: 'pisco' },
  { key: 'Cachaca', labelKey: 'cachaca' },
  { key: 'Irish Whiskey', labelKey: 'irishWhiskey' },
  { key: 'Aperol', labelKey: 'aperol' },
  { key: 'Campari', labelKey: 'campari' },
];
const ingredientsList = [
  { key: 'Lime juice', labelKey: 'limeJuice' },
  { key: 'Lemon juice', labelKey: 'lemonJuice' },
  { key: 'Orange juice', labelKey: 'orangeJuice' },
  { key: 'Soda', labelKey: 'soda' },
  { key: 'Tonic water', labelKey: 'tonicWater' },
  { key: 'Sugar', labelKey: 'sugar' },
  { key: 'Bitters', labelKey: 'bitters' },
  { key: 'Mint leaves', labelKey: 'mintLeaves' },
  { key: 'Coconut cream', labelKey: 'coconutCream' },
];

const useStyles = makeStyles((c) => ({
  safeArea: { flex: 1, backgroundColor: c.background },
  container: { flex: 1, backgroundColor: c.backgroundGray },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: s(16),
    paddingVertical: s(14),
    backgroundColor: c.background,
    borderBottomWidth: 1,
    borderBottomColor: c.separator,
  },
  closeBtn: {
    width: s(36),
    height: s(36),
    borderRadius: s(10),
    backgroundColor: c.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: s(17),
    fontWeight: '700',
    color: c.text,
    letterSpacing: -0.3,
  },
  countBadge: {
    width: s(24),
    height: s(24),
    borderRadius: s(12),
    backgroundColor: c.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countBadgeText: {
    fontSize: s(12),
    fontWeight: '700',
    color: c.white,
  },
  scroll: {
    paddingHorizontal: s(20),
    paddingTop: s(16),
    paddingBottom: s(60),
  },
  sectionLabel: {
    fontSize: s(12),
    fontWeight: '700',
    color: c.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: s(12),
    marginTop: s(8),
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: s(20),
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: c.surfaceCard,
    borderRadius: s(20),
    paddingHorizontal: s(14),
    paddingVertical: s(9),
    borderWidth: 1,
    borderColor: c.border,
  },
  chipActive: {
    backgroundColor: c.primary,
    borderColor: c.primary,
  },
  chipText: {
    fontSize: s(13),
    fontWeight: '500',
    color: c.textLight,
  },
  chipTextActive: {
    color: c.white,
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: s(16),
    paddingVertical: s(14),
    paddingBottom: s(28),
    backgroundColor: c.background,
    borderTopWidth: 1,
    borderTopColor: c.separator,
    gap: 12,
  },
  resetBtn: {
    flex: 1,
    paddingVertical: s(15),
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: c.surfaceCard,
    borderWidth: 1.5,
    borderColor: c.border,
  },
  resetBtnText: { fontSize: s(15), color: c.text, fontWeight: '600' },
  applyBtn: {
    flex: 2,
    paddingVertical: s(15),
    alignItems: 'center',
    backgroundColor: c.primary,
    borderRadius: 14,
    shadowColor: c.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  applyBtnText: { fontSize: s(15), color: c.white, fontWeight: '700' },
}));

const FilterScreen = ({ navigation, route }) => {
  const { colors: c, isDark } = useTheme();
  const { t } = useLanguage();
  const styles = useStyles();
  const filters = route.params?.filters || {};
  const [isAlcoholic, setIsAlcoholic] = useState(filters.is_alcoholic !== false);
  const [isNonAlcoholic, setIsNonAlcoholic] = useState(filters.is_alcoholic !== true);
  const [selectedSpirits, setSelectedSpirits] = useState(
    filters.base_spirit ? filters.base_spirit.split(',').map(s => s.trim()) : []
  );
  const [selectedIngredients, setSelectedIngredients] = useState(
    filters.ingredient ? filters.ingredient.split(',').map(i => i.trim()) : []
  );

  const toggleSpirit = (spirit) => {
    setSelectedSpirits((prev) =>
      prev.includes(spirit) ? prev.filter(s => s !== spirit) : [...prev, spirit]
    );
  };

  const toggleIngredient = (ing) => {
    setSelectedIngredients((prev) =>
      prev.includes(ing) ? prev.filter(i => i !== ing) : [...prev, ing]
    );
  };

  const handleApply = () => {
    let isAlcVal = null;
    if (isAlcoholic && !isNonAlcoholic) isAlcVal = true;
    else if (!isAlcoholic && isNonAlcoholic) isAlcVal = false;

    if (route.params?.onApply) {
      route.params.onApply({
        is_alcoholic: isAlcVal,
        base_spirit: selectedSpirits.length > 0 ? selectedSpirits.join(',') : null,
        ingredient: selectedIngredients.length > 0 ? selectedIngredients.join(',') : null,
      });
    }
    navigation.goBack();
  };

  const handleReset = () => {
    setIsAlcoholic(true);
    setIsNonAlcoholic(true);
    setSelectedSpirits([]);
    setSelectedIngredients([]);
  };

  const activeFilterCount =
    (!isAlcoholic || !isNonAlcoholic ? 1 : 0) +
    selectedSpirits.length +
    selectedIngredients.length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeBtn}>
            <Ionicons name="close" size={22} color={c.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{t('filters')}</Text>
          {activeFilterCount > 0 ? (
            <View style={styles.countBadge}>
              <Text style={styles.countBadgeText}>{activeFilterCount}</Text>
            </View>
          ) : (
            <View style={{ width: s(24) }} />
          )}
        </View>

        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionLabel}>{t('type')}</Text>
          <View style={styles.chipRow}>
            <TouchableOpacity
              style={[styles.chip, isAlcoholic && styles.chipActive]}
              onPress={() => setIsAlcoholic(!isAlcoholic)}
            >
              <Ionicons
                name={isAlcoholic ? 'wine' : 'wine-outline'}
                size={16}
                color={isAlcoholic ? c.white : c.textLight}
              />
              <Text style={[styles.chipText, isAlcoholic && styles.chipTextActive]}>
                {t('alcoholic')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.chip, isNonAlcoholic && styles.chipActive]}
              onPress={() => setIsNonAlcoholic(!isNonAlcoholic)}
            >
              <Ionicons
                name={isNonAlcoholic ? 'water' : 'water-outline'}
                size={16}
                color={isNonAlcoholic ? c.white : c.textLight}
              />
              <Text style={[styles.chipText, isNonAlcoholic && styles.chipTextActive]}>
                {t('nonAlcoholic')}
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionLabel}>{t('baseSpirit')}</Text>
          <View style={styles.chipRow}>
            {baseSpirits.map((item) => {
              const active = selectedSpirits.includes(item.key);
              return (
                <TouchableOpacity
                  key={item.key}
                  style={[styles.chip, active && styles.chipActive]}
                  onPress={() => toggleSpirit(item.key)}
                >
                  <Text style={[styles.chipText, active && styles.chipTextActive]}>
                    {t(item.labelKey)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.sectionLabel}>{t('ingredientsFilter')}</Text>
          <View style={styles.chipRow}>
            {ingredientsList.map((item) => {
              const active = selectedIngredients.includes(item.key);
              return (
                <TouchableOpacity
                  key={item.key}
                  style={[styles.chip, active && styles.chipActive]}
                  onPress={() => toggleIngredient(item.key)}
                >
                  <Text style={[styles.chipText, active && styles.chipTextActive]}>
                    {t(item.labelKey)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
            <Text style={styles.resetBtnText}>{t('reset')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.applyBtn} onPress={handleApply}>
            <Text style={styles.applyBtnText}>{t('applyFilters')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FilterScreen;
