// Loader.js
import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { styles } from './Styles';

const Loader = () => {
  const rotate = new Animated.Value(0);

  Animated.loop(
    Animated.timing(rotate, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    })
  ).start();

  const rotateInterpolation = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.loader,
          {
            transform: [{ rotate: rotateInterpolation }],
          },
        ]}
      />
    </View>
  );
};

export default Loader;
