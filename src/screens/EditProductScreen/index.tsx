import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { updateProduct } from '../../redux/productSlice';
import { styles } from './Styles';
import { Header } from '../../Components';

const EditProductScreen = ({ route, navigation }: any) => {
  const { product } = route.params;
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price.toString());
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  const [rating, setRating] = useState(product.rating.rate.toString());
  const dispatch = useDispatch<AppDispatch>();

  const handleSave = () => {
    if (!title || !price || !description || !category || !rating) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    dispatch(updateProduct({
      ...product,
      title,
      price: parseFloat(price),
      description,
      category,
      rating: { ...product.rating, rate: parseFloat(rating) }
    }));

    navigation.goBack();
  };

  return (
    <>
    <Header showBack />
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter product title"
          />
        <Text style={styles.label}>Price:</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          value={price}
          onChangeText={setPrice}
          placeholder="Enter product price"
          />
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          multiline
          value={description}
          onChangeText={setDescription}
          placeholder="Enter product description"
          />
        <Text style={styles.label}>Category:</Text>
        <TextInput
          style={styles.input}
          value={category}
          onChangeText={setCategory}
          placeholder="Enter product category"
        />
        <Text style={styles.label}>Rating:</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          value={rating}
          onChangeText={setRating}
          placeholder="Enter product rating"
          />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
          </>
  );
};

export default EditProductScreen;
