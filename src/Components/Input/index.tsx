import React, { useState, RefObject } from 'react';
import {
  View,
  TextInput,
  Animated,
  ViewStyle,
  TextStyle,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData
} from 'react-native';
import { COLORS } from '../../utils/Colors';
import { styles } from './Styles';

interface Props {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  customStyles?: ViewStyle;
  keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  ref?: RefObject<TextInput>; // Optional ref to forward the ref
}

const Input = ({ 
  label, 
  value, 
  onChangeText, 
  customStyles, 
  keyboardType, 
  returnKeyType = 'done', // Default to 'done' if not specified
  onSubmitEditing,
  ...props 
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabelPosition = new Animated.Value(value || isFocused ? 1 : 0);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedLabelPosition, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
      Animated.timing(animatedLabelPosition, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  const labelStyle: TextStyle = {
    position: 'absolute',
    left: 10,
    top: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [20, -8],
    }),
    fontSize: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [COLORS.GREY, COLORS.APP_THEME_COLOR],
    }),
    backgroundColor: 'white',
    paddingHorizontal: 5,
    zIndex: 9999,
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Animated.Text style={labelStyle}>{label}</Animated.Text>}
      <View style={[
        styles.inputWrapper,
        (isFocused || value) && styles.focusedInput,
        customStyles,
      ]}>
        <TextInput
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType} // Set the return key type here
          onSubmitEditing={onSubmitEditing} // Handle submission
          style={styles.input}
          {...props}
        />
      </View>
    </View>
  );
};

export default Input;
