import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, SafeAreaView, StatusBar, ActivityIndicator,
  Modal, TextInput, KeyboardAvoidingView, Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';
import { useTheme, makeStyles } from '../context/ThemeContext';
import { authService } from '../services/api';
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
  title: {
    fontSize: s(28),
    fontWeight: '800',
    color: c.text,
    letterSpacing: -0.7,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: s(32),
    paddingHorizontal: s(20),
    borderBottomLeftRadius: s(28),
    borderBottomRightRadius: s(28),
    marginBottom: s(24),
  },
  avatarWrap: {
    width: s(72),
    height: s(72),
    borderRadius: s(36),
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: s(12),
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  avatarText: {
    fontSize: s(28),
    fontWeight: '700',
    color: c.white,
  },
  username: {
    fontSize: s(20),
    fontWeight: '700',
    color: c.white,
    marginBottom: 4,
  },
  email: {
    fontSize: s(14),
    color: 'rgba(255,255,255,0.8)',
  },
  settingsGroup: {
    paddingHorizontal: s(16),
    marginBottom: s(16),
  },
  groupLabel: {
    fontSize: s(13),
    fontWeight: '700',
    color: c.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    paddingHorizontal: s(4),
    marginBottom: s(10),
  },
  settingsCard: {
    backgroundColor: c.surfaceCard,
    borderRadius: 16,
    shadowColor: c.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: s(16),
    paddingVertical: s(14),
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingIcon: {
    width: s(34),
    height: s(34),
    borderRadius: s(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingLabel: {
    fontSize: s(15),
    fontWeight: '500',
    color: c.text,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  settingValue: {
    fontSize: s(14),
    color: c.textMuted,
  },
  itemDivider: {
    height: 1,
    backgroundColor: c.separator,
    marginLeft: s(62),
  },
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
  registerLink: {
    marginTop: s(14),
  },
  registerLinkText: {
    fontSize: s(14),
    color: c.primary,
    fontWeight: '600',
  },
  deleteOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  deleteSheet: {
    backgroundColor: c.surfaceCard,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: s(20),
    paddingTop: s(20),
    paddingBottom: s(34),
  },
  deleteHandle: {
    width: s(36),
    height: s(4),
    borderRadius: s(2),
    backgroundColor: c.separator,
    alignSelf: 'center',
    marginBottom: s(16),
  },
  deleteTitle: {
    fontSize: s(18),
    fontWeight: '700',
    color: c.error,
    marginBottom: s(8),
  },
  deleteDesc: {
    fontSize: s(14),
    color: c.textLight,
    lineHeight: 20,
    marginBottom: s(20),
  },
  deleteInput: {
    backgroundColor: c.inputBg,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: c.inputBorder,
    paddingHorizontal: s(16),
    paddingVertical: s(14),
    fontSize: s(15),
    color: c.text,
    marginBottom: s(16),
  },
  deleteActions: {
    flexDirection: 'row',
    gap: 12,
  },
  deleteCancelBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: s(14),
    borderRadius: 12,
    backgroundColor: c.inputBg,
    borderWidth: 1,
    borderColor: c.inputBorder,
  },
  deleteCancelText: {
    fontSize: s(15),
    fontWeight: '600',
    color: c.text,
  },
  deleteConfirmBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: s(14),
    borderRadius: 12,
    backgroundColor: c.error,
  },
  deleteConfirmText: {
    fontSize: s(15),
    fontWeight: '600',
    color: c.white,
  },
  deleteError: {
    fontSize: s(13),
    color: c.error,
    marginBottom: s(12),
    textAlign: 'center',
  },
}));

const ProfileScreen = ({ navigation }) => {
  const { user, logout, loading, units: authUnits, setUnits: setAuthUnits } = useAuth();
  const { colors: c, gradients: g, isDark, themeName, setTheme } = useTheme();
  const styles = useStyles();
  const { t, setLanguage } = useLanguage();
  const [loggingOut, setLoggingOut] = useState(false);
  const [saving, setSaving] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(themeName ? themeName.charAt(0).toUpperCase() + themeName.slice(1) : 'Light');
  const [selectedUnits, setSelectedUnits] = useState(authUnits || 'milliliters');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const [themeSheetVisible, setThemeSheetVisible] = useState(false);
  const [unitsSheetVisible, setUnitsSheetVisible] = useState(false);
  const [languageSheetVisible, setLanguageSheetVisible] = useState(false);
  const [logoutSheetVisible, setLogoutSheetVisible] = useState(false);
  const [deleteSheetVisible, setDeleteSheetVisible] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (user) loadProfile();
  }, [user]);

  const loadProfile = async () => {
    try {
      const response = await authService.getProfile();
      const p = response.data;
      if (p.theme) setSelectedTheme(p.theme.charAt(0).toUpperCase() + p.theme.slice(1));
      if (p.units) setSelectedUnits(p.units);
      if (p.language) {
        const langMap = { en: 'English', el: 'Ελληνικά' };
        setSelectedLanguage(langMap[p.language] || p.language);
        setLanguage(p.language);
      }
    } catch (err) {
      // Profile might not exist yet, that's fine
    }
  };

  const saveProfile = async (updates) => {
    setSaving(true);
    try {
      await authService.updateProfile(updates);
    } catch (err) {
      // silently handle
    } finally {
      setSaving(false);
    }
  };

  const handleThemeSelect = (key) => {
    setSelectedTheme(key);
    setTheme(key.toLowerCase());
    saveProfile({ theme: key.toLowerCase() });
  };

  const handleUnitsSelect = (key) => {
    setSelectedUnits(key);
    setAuthUnits(key);
    saveProfile({ units: key });
  };

  const handleLanguageSelect = (key) => {
    setSelectedLanguage(key);
    const langMap = { English: 'en', 'Ελληνικά': 'el' };
    const code = langMap[key] || key;
    setLanguage(code);
    saveProfile({ language: code });
  };

  const handleLogout = async () => {
    setLogoutSheetVisible(false);
    setLoggingOut(true);
    await logout();
    setLoggingOut(false);
  };

  const handleDeleteAccount = async () => {
    if (!deletePassword) {
      setDeleteError(t('passwordRequired'));
      return;
    }
    setDeleteError('');
    setDeleting(true);
    try {
      await authService.deleteAccount(deletePassword);
      setDeleteSheetVisible(false);
      setDeletePassword('');
      await logout();
    } catch (err) {
      setDeleteError(err.response?.data?.error || t('failedDeleteAccount'));
    } finally {
      setDeleting(false);
    }
  };

  const openDeleteSheet = () => {
    setDeletePassword('');
    setDeleteError('');
    setDeleteSheetVisible(true);
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

  if (!user) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={c.backgroundGray} />
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <Text style={styles.title}>{t('profile')}</Text>
          </View>
          <View style={styles.emptyState}>
            <View style={styles.emptyIconWrap}>
              <Ionicons name="person-outline" size={36} color={c.textMuted} />
            </View>
            <Text style={styles.emptyTitle}>{t('signInAccount')}</Text>
            <Text style={styles.emptyText}>
              {t('profileDescription')}
            </Text>
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
              <Ionicons name="log-in" size={18} color={c.white} />
              <Text style={styles.loginBtnText}>{t('logIn')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerLinkText}>{t('orCreateAccount')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={c.primary} />
      <View style={styles.container}>
        <LinearGradient
          colors={g.primary}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.profileHeader}
        >
          <View style={styles.avatarWrap}>
            <Text style={styles.avatarText}>
              {(user.username || user.email || '?').charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={styles.username}>{user.username || 'User'}</Text>
          <Text style={styles.email}>{user.email || ''}</Text>
        </LinearGradient>

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

        <View style={styles.settingsGroup}>
          <Text style={styles.groupLabel}>{t('account')}</Text>
          <View style={styles.settingsCard}>
            <TouchableOpacity
              style={[styles.settingItem, loggingOut && { opacity: 0.5 }]}
              onPress={() => setLogoutSheetVisible(true)}
              disabled={loggingOut}
            >
              <View style={styles.settingLeft}>
                <View style={[styles.settingIcon, { backgroundColor: isDark ? '#2E1518' : '#FDEDEC' }]}>
                  <Ionicons name="log-out" size={18} color={c.error} />
                </View>
                <Text style={[styles.settingLabel, { color: c.error }]}>{t('logOut')}</Text>
              </View>
              {loggingOut ? (
                <ActivityIndicator size="small" color={c.error} />
              ) : (
                <Ionicons name="chevron-forward" size={16} color={c.textMuted} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.settingsGroup}>
          <Text style={styles.groupLabel}>{t('dangerZone')}</Text>
          <View style={styles.settingsCard}>
            <TouchableOpacity
              style={styles.settingItem}
              onPress={openDeleteSheet}
              disabled={deleting}
            >
              <View style={styles.settingLeft}>
                <View style={[styles.settingIcon, { backgroundColor: isDark ? '#2E1518' : '#FDEDEC' }]}>
                  <Ionicons name="trash" size={18} color={c.error} />
                </View>
                <Text style={[styles.settingLabel, { color: c.error }]}>{t('deleteAccount')}</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color={c.textMuted} />
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

      <OptionSheet
        visible={logoutSheetVisible}
        onClose={() => setLogoutSheetVisible(false)}
        title={t('logOut')}
        destructive
        destructiveLabel={t('logOut')}
        destructiveOnPress={handleLogout}
        options={[]}
      />

      <Modal
        visible={deleteSheetVisible}
        transparent
        animationType="slide"
        onRequestClose={() => { if (!deleting) setDeleteSheetVisible(false); }}
      >
        <TouchableOpacity
          style={styles.deleteOverlay}
          activeOpacity={1}
          onPress={() => { if (!deleting) setDeleteSheetVisible(false); }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          >
            <TouchableOpacity activeOpacity={1} onPress={() => {}}>
              <View style={styles.deleteSheet}>
                <View style={styles.deleteHandle} />
                <Text style={styles.deleteTitle}>{t('deleteAccount')}</Text>
                <Text style={styles.deleteDesc}>
                  {t('deleteAccountDesc')}
                </Text>
                {deleteError ? <Text style={styles.deleteError}>{deleteError}</Text> : null}
                <TextInput
                  style={styles.deleteInput}
                  placeholder={t('enterPassword')}
                  placeholderTextColor={c.textMuted}
                  value={deletePassword}
                  onChangeText={setDeletePassword}
                  secureTextEntry
                  autoFocus
                  editable={!deleting}
                />
                <View style={styles.deleteActions}>
                  <TouchableOpacity
                    style={styles.deleteCancelBtn}
                    onPress={() => setDeleteSheetVisible(false)}
                    disabled={deleting}
                  >
                    <Text style={styles.deleteCancelText}>{t('cancel')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.deleteConfirmBtn, deleting && { opacity: 0.6 }]}
                    onPress={handleDeleteAccount}
                    disabled={deleting}
                  >
                    {deleting ? (
                      <ActivityIndicator size="small" color={c.white} />
                    ) : (
                      <Text style={styles.deleteConfirmText}>{t('delete')}</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default ProfileScreen;
