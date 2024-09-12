import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import RepelButton from '../../Components/RepelButton';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Styles';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome</Text>
      <RepelButton
        title="Go To Home Screen"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default WelcomeScreen;
