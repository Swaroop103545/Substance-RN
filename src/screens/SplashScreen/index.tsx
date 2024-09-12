import React, {useEffect, useRef} from 'react';
import {View, Text, Image, Animated, StyleSheet, Easing} from 'react-native';

import {styles} from './Styles';

const SplashScreen = ({onAnimationEnd}: {onAnimationEnd: () => void}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000, // Duration of the animation
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(onAnimationEnd, 1000); // Duration before navigating
    });
  }, [fadeAnim, onAnimationEnd]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/Logo.png')}
        style={[styles.logo, {opacity: fadeAnim}]}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
