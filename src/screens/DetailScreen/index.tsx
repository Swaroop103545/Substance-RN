import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../Components';
import { styles } from './Styles';

const ProductDetailsScreen = ({ route }: any) => {
  const { product } = route.params;
  const navigation = useNavigation();

  const handleEditPress = () => {
    navigation.navigate('Update', { product });
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        {/* Scrollable content */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Image source={{ uri: product.image }} style={styles.image} />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.category}>Category: {product.category}</Text>
            <Text style={styles.rating}>
              Rating: {product.rating && typeof product.rating === 'object'
                ? `${product.rating.rate} / ${product.rating.count}`
                : product.rating} / 5
            </Text>
          </View>
        </ScrollView>

        {/* Fixed button at the bottom */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ProductDetailsScreen;
