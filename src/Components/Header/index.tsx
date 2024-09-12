import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Styles';

interface Props {
  onPressLeft?: () => void;
  onPressRight?: () => void;
  showBack?: boolean;
}

const Header = ({onPressLeft, onPressRight, showBack}: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.leftButton}
        onPress={() => navigation.goBack()}>
        {showBack ? (
          <TouchableOpacity onPress={onPressLeft}>
            <Image source={require('../../assets/Back.png')} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
          <Image
            source={require('../../assets/hamBurger.png')}
            style={styles.icon}
          />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      <Image source={require('../../assets/Logo.png')} style={styles.logo} />
    </View>
  );
};

export default Header;
