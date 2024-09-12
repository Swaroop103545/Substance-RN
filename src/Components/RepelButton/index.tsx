import React, { useRef, useState } from 'react';
import { View, Animated, TouchableOpacity, Text, StyleSheet, Easing } from 'react-native';
import { styles } from './Styles';

const RepelButton = ({ title, onPress }: any) => {
  const [animation] = useState(new Animated.Value(0));
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(scale, {
      toValue: 1.1,
      duration: 150,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 150,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale }],
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      style={styles.button}
    >
      <Animated.View style={[styles.buttonContent, animatedStyle]}>
        <Text style={styles.buttonText}>{title}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default RepelButton;
