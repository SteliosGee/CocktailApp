import React, { useEffect, useRef, useState } from 'react';
import {
  View, Text, TouchableOpacity, Modal, Animated, Dimensions, TouchableWithoutFeedback, Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { makeStyles, useTheme } from '../context/ThemeContext';
import { s } from '../utils/responsive';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const useStyles = makeStyles((c) => ({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  spacer: {
    flex: 1,
  },
  sheet: {
    backgroundColor: c.surfaceCard,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: SCREEN_HEIGHT * 0.7,
  },
  handle: {
    width: s(36),
    height: s(4),
    borderRadius: s(2),
    backgroundColor: c.border,
    alignSelf: 'center',
    marginTop: s(10),
    marginBottom: s(6),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: s(20),
    paddingTop: s(10),
    paddingBottom: s(14),
    borderBottomWidth: 1,
    borderBottomColor: c.separator,
  },
  title: {
    fontSize: s(17),
    fontWeight: '700',
    color: c.text,
    letterSpacing: -0.3,
  },
  closeBtn: {
    width: s(30),
    height: s(30),
    borderRadius: s(15),
    backgroundColor: c.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionList: {
    paddingHorizontal: s(12),
    paddingTop: s(8),
    paddingBottom: s(4),
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: s(14),
    paddingHorizontal: s(16),
    borderRadius: 14,
    marginVertical: 2,
  },
  optionActive: {
    backgroundColor: c.primaryAlpha,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  optionIconWrap: {
    width: s(32),
    height: s(32),
    borderRadius: s(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionLabel: {
    fontSize: s(15),
    fontWeight: '500',
    color: c.text,
  },
  optionLabelActive: {
    fontWeight: '600',
    color: c.primary,
  },
  checkmark: {
    width: s(22),
    height: s(22),
    borderRadius: s(11),
    backgroundColor: c.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  destructiveSection: {
    paddingHorizontal: s(12),
    paddingTop: s(4),
    marginTop: s(4),
    borderTopWidth: 1,
    borderTopColor: c.separator,
  },
  destructiveOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: s(14),
    borderRadius: 14,
    marginVertical: 2,
    backgroundColor: c.errorLight,
  },
  destructiveLabel: {
    fontSize: s(15),
    fontWeight: '600',
    color: c.error,
  },
}));

const OptionSheet = ({
  visible,
  onClose,
  title,
  options,
  selectedKey,
  onSelect,
  destructive,
  destructiveLabel,
  destructiveOnPress,
}) => {
  const styles = useStyles();
  const { colors: c } = useTheme();
  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (visible) {
      setShowModal(true);
      slideAnim.setValue(SCREEN_HEIGHT);
      fadeAnim.setValue(0);
      requestAnimationFrame(() => {
        Animated.parallel([
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }),
        ]).start();
      });
    } else if (showModal) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: SCREEN_HEIGHT,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowModal(false);
      });
    }
  }, [visible]);

  return (
    <Modal
      transparent
      visible={showModal}
      onRequestClose={onClose}
      statusBarTranslucent
      hardwareAccelerated
      animationType="none"
    >
      <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.spacer} />
        </TouchableWithoutFeedback>

        <Animated.View
          style={[
            styles.sheet,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <View style={styles.handle} />

          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={16} color={c.textMuted} />
            </TouchableOpacity>
          </View>

          <View style={styles.optionList}>
            {options.map((opt) => {
              const isActive = selectedKey === opt.key;
              return (
                <TouchableOpacity
                  key={opt.key}
                  style={[styles.option, isActive && styles.optionActive]}
                  onPress={() => {
                    onSelect(opt.key);
                    onClose();
                  }}
                  activeOpacity={0.6}
                >
                  <View style={styles.optionLeft}>
                    {opt.icon && (
                      <View style={[styles.optionIconWrap, { backgroundColor: opt.iconBg || c.inputBg }]}>
                        <Ionicons name={opt.icon} size={16} color={opt.iconColor || c.textMuted} />
                      </View>
                    )}
                    <Text style={[styles.optionLabel, isActive && styles.optionLabelActive]}>
                      {opt.label}
                    </Text>
                  </View>
                  {isActive && (
                    <View style={styles.checkmark}>
                      <Ionicons name="checkmark" size={14} color={c.white} />
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          {destructive && (
            <View style={styles.destructiveSection}>
              <TouchableOpacity
                style={styles.destructiveOption}
                onPress={destructiveOnPress}
                activeOpacity={0.6}
              >
                <Ionicons name="log-out-outline" size={18} color={c.error} />
                <Text style={styles.destructiveLabel}>{destructiveLabel || 'Log Out'}</Text>
              </TouchableOpacity>
            </View>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default OptionSheet;
