import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { s } from '../utils/responsive';

export default function LoadingScreen() {
  const fillAnim = useRef(new Animated.Value(0)).current;
  const bubble1 = useRef(new Animated.Value(0)).current;
  const bubble2 = useRef(new Animated.Value(0)).current;
  const bubble3 = useRef(new Animated.Value(0)).current;
  const glassShake = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Liquid fill animation
    Animated.timing(fillAnim, {
      toValue: 1,
      duration: 1800,
      useNativeDriver: false,
    }).start();

    // Glass shake (bartender shake effect)
    Animated.sequence([
      Animated.delay(600),
      Animated.loop(
        Animated.sequence([
          Animated.timing(glassShake, { toValue: 1, duration: 80, useNativeDriver: true }),
          Animated.timing(glassShake, { toValue: -1, duration: 80, useNativeDriver: true }),
          Animated.timing(glassShake, { toValue: 0, duration: 80, useNativeDriver: true }),
          Animated.delay(400),
        ])
      ),
    ]).start();

    // Bubble loops
    const bubbleLoop = (anim, delay, duration) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(anim, { toValue: 1, duration, useNativeDriver: true }),
          Animated.timing(anim, { toValue: 0, duration: 0, useNativeDriver: true }),
        ])
      ).start();
    };
    bubbleLoop(bubble1, 800, 1400);
    bubbleLoop(bubble2, 1200, 1200);
    bubbleLoop(bubble3, 1600, 1600);
  }, []);

  const liquidHeight = fillAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80],
  });

  const bubbleY = (anim) =>
    anim.interpolate({ inputRange: [0, 1], outputRange: [60, -10] });
  const bubbleOpacity = (anim) =>
    anim.interpolate({ inputRange: [0, 0.2, 0.8, 1], outputRange: [0, 0.8, 0.8, 0] });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.glassWrap, { transform: [{ translateX: glassShake }] }]}
      >
        {/* Glass body */}
        <View style={styles.glass}>
          {/* Liquid */}
          <View style={styles.liquidClip}>
            <Animated.View
              style={[styles.liquid, { height: liquidHeight }]}
            />
          </View>

          {/* Bubbles */}
          <Animated.View
            style={[
              styles.bubble,
              {
                left: '30%',
                transform: [{ translateY: bubbleY(bubble1) }],
                opacity: bubbleOpacity(bubble1),
              },
            ]}
          />
          <Animated.View
            style={[
              styles.bubble,
              {
                left: '55%',
                width: s(5),
                height: s(5),
                transform: [{ translateY: bubbleY(bubble2) }],
                opacity: bubbleOpacity(bubble2),
              },
            ]}
          />
          <Animated.View
            style={[
              styles.bubble,
              {
                left: '42%',
                width: s(4),
                height: s(4),
                transform: [{ translateY: bubbleY(bubble3) }],
                opacity: bubbleOpacity(bubble3),
              },
            ]}
          />
        </View>

        {/* Stem */}
        <View style={styles.stem} />

        {/* Base */}
        <View style={styles.base} />
      </Animated.View>

      {/* Loading text */}
      <Animated.View style={styles.textWrap}>
        <Animated.Text
          style={[styles.loadingText, { opacity: fillAnim }]}
        >
          Mixing your cocktails...
        </Animated.Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glassWrap: {
    alignItems: 'center',
  },
  glass: {
    width: s(70),
    height: s(90),
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
    borderBottomLeftRadius: s(6),
    borderBottomRightRadius: s(6),
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  liquidClip: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  liquid: {
    width: '100%',
    backgroundColor: '#5BBCBF',
    opacity: 0.85,
  },
  bubble: {
    position: 'absolute',
    width: s(6),
    height: s(6),
    borderRadius: s(3),
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  stem: {
    width: s(6),
    height: s(30),
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  base: {
    width: s(50),
    height: s(5),
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: s(2),
  },
  textWrap: {
    marginTop: s(24),
  },
  loadingText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: s(15),
    fontWeight: '500',
    letterSpacing: 0.5,
  },
});
