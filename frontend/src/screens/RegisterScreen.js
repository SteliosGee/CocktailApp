import React, { useState, useEffect } from 'react';
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
    paddingBottom: s(32),
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
  logoSection: { alignItems: 'center', paddingTop: s(6) },
  logo: { fontSize: s(50), marginBottom: s(10) },
  title: { fontSize: s(24), fontWeight: '800', color: c.white, marginBottom: s(6), letterSpacing: -0.5 },
  subtitle: { fontSize: s(14), color: 'rgba(255,255,255,0.85)' },
  formSection: {
    flex: 1,
    backgroundColor: c.backgroundGray,
    borderTopLeftRadius: s(24),
    borderTopRightRadius: s(24),
    marginTop: -16,
    paddingTop: s(20),
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
    marginBottom: s(12),
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
    marginBottom: s(12),
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
    marginTop: s(6),
    shadowColor: c.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  btnDisabled: { opacity: 0.7 },
  btnText: { color: c.white, fontSize: s(16), fontWeight: '700' },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: s(22) },
  footerText: { fontSize: s(14), color: c.textLight },
  link: { fontSize: s(14), color: c.primary, fontWeight: '600' },
}));

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  const { register, loading, error, clearError } = useAuth();
  const { colors: c, gradients: g } = useTheme();
  const { t } = useLanguage();
  const styles = useStyles();

  useEffect(() => { if (error) clearError(); }, []);

  const handleChange = (setter) => (text) => {
    setter(text);
    if (error) clearError();
    if (localError) setLocalError('');
  };

  const handleRegister = async () => {
    if (!username.trim() || !email.trim() || !password) {
      setLocalError(t('fillAllFields'));
      return;
    }
    if (password.length < 6) {
      setLocalError(t('passwordMinLength'));
      return;
    }
    if (password !== confirmPassword) {
      setLocalError(t('passwordsNoMatch'));
      return;
    }
    const result = await register(username.trim(), email.trim(), password);
    if (result.success) navigation.popToTop();
  };

  const displayError = localError || error;

  const getInputIcon = (field) => {
    switch (field) {
      case 'username': return 'person-outline';
      case 'email': return 'mail-outline';
      case 'password': return 'lock-closed-outline';
      case 'confirmPassword': return 'lock-closed-outline';
      default: return 'ellipse-outline';
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={c.primary} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <LinearGradient
          colors={g.warm}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerGradient}
        >
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color={c.white} />
          </TouchableOpacity>
          <View style={styles.logoSection}>
            <Text style={styles.logo}>🍹</Text>
            <Text style={styles.title}>{t('createAccount')}</Text>
            <Text style={styles.subtitle}>{t('registerSubtitle')}</Text>
          </View>
        </LinearGradient>

        <View style={styles.formSection}>
          {displayError ? (
            <View style={styles.errorBanner}>
              <Ionicons name="alert-circle" size={18} color={c.error} />
              <Text style={styles.errorText}>{displayError}</Text>
            </View>
          ) : null}

          <View style={styles.form}>
            {[
              { field: 'username', value: username, setter: setUsername, placeholder: t('username'), keyboardType: 'default', autoCapitalize: 'none' },
              { field: 'email', value: email, setter: setEmail, placeholder: t('email'), keyboardType: 'email-address', autoCapitalize: 'none' },
              { field: 'password', value: password, setter: setPassword, placeholder: t('password'), secure: true },
              { field: 'confirmPassword', value: confirmPassword, setter: setConfirmPassword, placeholder: t('confirmPassword'), secure: true },
            ].map(({ field, value, setter, placeholder, keyboardType, autoCapitalize, secure }) => (
              <View
                key={field}
                style={[
                  styles.inputWrap,
                  focusedField === field && styles.inputWrapFocused,
                ]}
              >
                <Ionicons
                  name={getInputIcon(field)}
                  size={18}
                  color={focusedField === field ? c.primary : c.textMuted}
                />
                <TextInput
                  style={styles.input}
                  value={value}
                  onChangeText={handleChange(setter)}
                  onFocus={() => setFocusedField(field)}
                  onBlur={() => setFocusedField(null)}
                  placeholder={placeholder}
                  placeholderTextColor={c.textMuted}
                  keyboardType={keyboardType}
                  autoCapitalize={autoCapitalize || 'sentences'}
                  secureTextEntry={secure ? !showPassword : false}
                />
                {secure && (
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
                )}
              </View>
            ))}

            <TouchableOpacity
              style={[styles.btn, loading && styles.btnDisabled]}
              onPress={handleRegister}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color={c.white} />
              ) : (
                <Text style={styles.btnText}>{t('register')}</Text>
              )}
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerText}>{t('hasAccount')}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>{t('logIn')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
