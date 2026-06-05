import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  SafeAreaView, StatusBar, KeyboardAvoidingView, Platform, ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';
import { useTheme, makeStyles } from '../context/ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';
import { s } from '../utils/responsive';

const useStyles = makeStyles((c, g) => ({
  safeArea: { flex: 1, backgroundColor: c.backgroundGray },
  container: { flex: 1, backgroundColor: c.backgroundGray },
  headerGradient: {
    paddingTop: s(16),
    paddingBottom: s(36),
    borderBottomLeftRadius: s(28),
    borderBottomRightRadius: s(28),
  },
  backBtn: {
    width: s(40),
    height: s(40),
    borderRadius: s(12),
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: s(16),
    marginBottom: s(8),
  },
  logoSection: { alignItems: 'center', paddingTop: s(10) },
  logo: { fontSize: s(56), marginBottom: s(12) },
  title: { fontSize: s(24), fontWeight: '800', color: c.white, marginBottom: s(6), letterSpacing: -0.5 },
  subtitle: { fontSize: s(14), color: 'rgba(255,255,255,0.85)' },
  formSection: {
    flex: 1,
    backgroundColor: c.backgroundGray,
    borderTopLeftRadius: s(24),
    borderTopRightRadius: s(24),
    marginTop: -16,
    paddingTop: s(24),
  },
  errorBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: c.errorLight,
    marginHorizontal: s(20),
    paddingHorizontal: s(14),
    paddingVertical: s(12),
    borderRadius: 12,
    marginBottom: s(16),
  },
  errorText: { fontSize: s(13), color: c.errorText, flex: 1, fontWeight: '500' },
  form: { paddingHorizontal: s(20) },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: c.inputBg,
    borderRadius: 14,
    paddingHorizontal: s(16),
    paddingVertical: s(14),
    marginBottom: s(14),
    borderWidth: 1.5,
    borderColor: c.inputBorder,
  },
  inputWrapFocused: {
    borderColor: c.primary,
    backgroundColor: c.inputBgFocused,
  },
  input: { flex: 1, marginLeft: s(12), fontSize: s(15), color: c.text },
  btn: {
    backgroundColor: c.primary,
    borderRadius: 14,
    paddingVertical: s(16),
    alignItems: 'center',
    marginTop: s(8),
    shadowColor: c.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  btnDisabled: { opacity: 0.7 },
  btnText: { color: c.white, fontSize: s(16), fontWeight: '700' },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: s(24) },
  footerText: { fontSize: s(14), color: c.textLight },
  link: { fontSize: s(14), color: c.primary, fontWeight: '600' },
}));

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const { login, loading, error, clearError } = useAuth();
  const { colors: c, gradients: g } = useTheme();
  const { t } = useLanguage();
  const styles = useStyles();

  const handleChange = (setter) => (text) => {
    setter(text);
    if (error) clearError();
  };

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) return;
    const result = await login(email.trim(), password);
    if (result.success) navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={c.primary} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <LinearGradient
          colors={g.primary}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerGradient}
        >
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color={c.white} />
          </TouchableOpacity>
          <View style={styles.logoSection}>
            <Text style={styles.logo}>🍹</Text>
            <Text style={styles.title}>{t('welcomeBack')}</Text>
            <Text style={styles.subtitle}>{t('signInSubtitle')}</Text>
          </View>
        </LinearGradient>

        <View style={styles.formSection}>
          {error ? (
            <View style={styles.errorBanner}>
              <Ionicons name="alert-circle" size={18} color={c.error} />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}

          <View style={styles.form}>
            <View style={[
              styles.inputWrap,
              focusedField === 'email' && styles.inputWrapFocused,
            ]}>
              <Ionicons
                name="mail-outline"
                size={18}
                color={focusedField === 'email' ? c.primary : c.textMuted}
              />
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={handleChange(setEmail)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                placeholder={t('email')}
                placeholderTextColor={c.textMuted}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={[
              styles.inputWrap,
              focusedField === 'password' && styles.inputWrapFocused,
            ]}>
              <Ionicons
                name="lock-closed-outline"
                size={18}
                color={focusedField === 'password' ? c.primary : c.textMuted}
              />
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={handleChange(setPassword)}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                placeholder={t('password')}
                placeholderTextColor={c.textMuted}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Ionicons
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={18}
                  color={c.textMuted}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[styles.btn, loading && styles.btnDisabled]}
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color={c.white} />
              ) : (
                <Text style={styles.btnText}>{t('logIn')}</Text>
              )}
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerText}>{t('noAccount')}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>{t('register')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
