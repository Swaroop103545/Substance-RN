import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {styles} from './Styles';

interface Props {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    rating?: {
      rate: number;
      count: number;
    };
  };
  index: number;
  scrollY: Animated.Value;
  onPress: () => void;
}

const Card = ({item, index, scrollY, onPress}: Props) => {
  const inputRange = [-1, 0, index * 300, (index + 2) * 300];

  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0.95],
    extrapolate: 'clamp',
  });

  const opacity = scrollY.interpolate({
    inputRange: [index * 300 - 200, index * 300, (index + 2) * 300],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  // Set default values if rating is undefined
  const ratingRate = item.rating?.rate || 0;
  const ratingCount = item.rating?.count || 0;

  return (
    <Animated.View
      style={[styles.cardContainer, {opacity, transform: [{scale}]}]}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View style={styles.content}>
          <View style={styles.info}>
            <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <Text style={styles.rating}>
              Rating: {ratingRate} ({ratingCount})
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={{uri: item.image}} style={styles.image} />
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Card;
