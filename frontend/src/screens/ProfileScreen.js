import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, SafeAreaView, StatusBar, ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AppContext';
import { useTheme, makeStyles } from '../context/ThemeContext';
import OptionSheet from '../components/OptionSheet';
import { s } from '../utils/responsive';
import { useLanguage } from '../i18n/LanguageContext';

const useStyles = makeStyles((c, g) => ({
  safeArea: { flex: 1, backgroundColor: c.backgroundGray },
  container: { flex: 1, backgroundColor: c.backgroundGray },
  headerSection: {
    paddingHorizontal: s(20),
    paddingTop: s(16),
    paddingBottom: s(8),
  },
  title: { fontSize: s(28), fontWeight: '800', color: c.text },
  settingsGroup: { marginTop: s(16), paddingHorizontal: s(20) },
  groupLabel: {
    fontSize: s(12), fontWeight: '700', color: c.textMuted,
    textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: s(8), marginLeft: s(4),
  },
  settingsCard: {
    backgroundColor: c.card, borderRadius: s(16),
    overflow: 'hidden', ...c.shadowCard,
  },
  settingItem: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingVertical: s(14), paddingHorizontal: s(16),
  },
  settingLeft: { flexDirection: 'row', alignItems: 'center', gap: s(12) },
  settingIcon: {
    width: s(36), height: s(36), borderRadius: s(10),
    alignItems: 'center', justifyContent: 'center',
  },
  settingLabel: { fontSize: s(15), fontWeight: '600', color: c.text },
  settingRight: { flexDirection: 'row', alignItems: 'center', gap: s(4) },
  settingValue: { fontSize: s(13), color: c.textMuted, marginRight: s(2) },
  itemDivider: { height: 1, backgroundColor: c.divider, marginHorizontal: s(16) },
}));

const ProfileScreen = () => {
  const { colors: c, gradients: g, isDark, themeName, setTheme } = useTheme();
  const { units, setUnits } = useAuth();
  const { t, language, setLanguage } = useLanguage();
  const styles = useStyles();
  const [saving, setSaving] = useState(false);

  const [selectedTheme, setSelectedTheme] = useState(
    themeName ? themeName.charAt(0).toUpperCase() + themeName.slice(1) : 'Light'
  );
  const [selectedUnits, setSelectedUnits] = useState(units || 'milliliters');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const [themeSheetVisible, setThemeSheetVisible] = useState(false);
  const [unitsSheetVisible, setUnitsSheetVisible] = useState(false);
  const [languageSheetVisible, setLanguageSheetVisible] = useState(false);

  useEffect(() => {
    const langMap = { en: 'English', el: 'Ελληνικά' };
    setSelectedLanguage(langMap[language] || language);
  }, [language]);

  const handleThemeSelect = (key) => {
    setSelectedTheme(key);
    setTheme(key.toLowerCase());
  };

  const handleUnitsSelect = (key) => {
    setSelectedUnits(key);
    setUnits(key);
  };

  const handleLanguageSelect = (key) => {
    setSelectedLanguage(key);
    const langMap = { English: 'en', 'Ελληνικά': 'el' };
    const code = langMap[key] || key;
    setLanguage(code);
  };

  const themeOptions = [
    { key: 'Light', label: t('light'), icon: 'sunny', iconBg: '#FEF5E7', iconColor: '#F39C12' },
    { key: 'Dark', label: t('dark'), icon: 'moon', iconBg: '#1A2E3E', iconColor: '#5DADE2' },
    { key: 'System', label: t('system'), icon: 'phone-portrait', iconBg: '#E8F8F5', iconColor: '#27AE60' },
  ];

  const unitsOptions = [
    { key: 'milliliters', label: t('milliliters'), icon: 'flask', iconBg: '#EBF5FB', iconColor: '#3498DB' },
    { key: 'ounces', label: t('ounces'), icon: 'wine', iconBg: '#FEF5E7', iconColor: '#F39C12' },
  ];

  const languageOptions = [
    { key: 'English', label: 'English', icon: 'globe', iconBg: '#EBF5FB', iconColor: '#3498DB' },
    { key: 'Ελληνικά', label: 'Ελληνικά', icon: 'globe', iconBg: '#E8F8F5', iconColor: '#27AE60' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>{t('profile')}</Text>
        </View>

        <View style={styles.settingsGroup}>
          <Text style={styles.groupLabel}>{t('preferences')}</Text>
          <View style={styles.settingsCard}>
            <TouchableOpacity style={styles.settingItem} onPress={() => setThemeSheetVisible(true)} disabled={saving}>
              <View style={styles.settingLeft}>
                <View style={[styles.settingIcon, { backgroundColor: isDark ? '#1A2E3E' : '#EBF5FB' }]}>
                  <Ionicons name="color-palette" size={18} color={isDark ? '#5DADE2' : '#3498DB'} />
                </View>
                <Text style={styles.settingLabel}>{t('theme')}</Text>
              </View>
              <View style={styles.settingRight}>
                <Text style={styles.settingValue}>{selectedTheme}</Text>
                <Ionicons name="chevron-forward" size={16} color={c.textMuted} />
              </View>
            </TouchableOpacity>

            <View style={styles.itemDivider} />

            <TouchableOpacity style={styles.settingItem} onPress={() => setUnitsSheetVisible(true)} disabled={saving}>
              <View style={styles.settingLeft}>
                <View style={[styles.settingIcon, { backgroundColor: isDark ? '#2E2518' : '#FEF5E7' }]}>
                  <Ionicons name="resize" size={18} color={isDark ? '#F5B041' : '#F39C12'} />
                </View>
                <Text style={styles.settingLabel}>{t('units')}</Text>
              </View>
              <View style={styles.settingRight}>
                <Text style={styles.settingValue}>{selectedUnits}</Text>
                <Ionicons name="chevron-forward" size={16} color={c.textMuted} />
              </View>
            </TouchableOpacity>

            <View style={styles.itemDivider} />

            <TouchableOpacity style={styles.settingItem} onPress={() => setLanguageSheetVisible(true)} disabled={saving}>
              <View style={styles.settingLeft}>
                <View style={[styles.settingIcon, { backgroundColor: isDark ? '#1A2E22' : '#E8F8F5' }]}>
                  <Ionicons name="globe" size={18} color={isDark ? '#58D68D' : '#27AE60'} />
                </View>
                <Text style={styles.settingLabel}>{t('language')}</Text>
              </View>
              <View style={styles.settingRight}>
                <Text style={styles.settingValue}>{selectedLanguage}</Text>
                <Ionicons name="chevron-forward" size={16} color={c.textMuted} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <OptionSheet
        visible={themeSheetVisible}
        onClose={() => setThemeSheetVisible(false)}
        title={t('theme')}
        options={themeOptions}
        selectedKey={selectedTheme}
        onSelect={handleThemeSelect}
      />

      <OptionSheet
        visible={unitsSheetVisible}
        onClose={() => setUnitsSheetVisible(false)}
        title={t('units')}
        options={unitsOptions}
        selectedKey={selectedUnits}
        onSelect={handleUnitsSelect}
      />

      <OptionSheet
        visible={languageSheetVisible}
        onClose={() => setLanguageSheetVisible(false)}
        title={t('language')}
        options={languageOptions}
        selectedKey={selectedLanguage}
        onSelect={handleLanguageSelect}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
