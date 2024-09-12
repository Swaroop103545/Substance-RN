import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addProduct } from '../../redux/productSlice';
import { Input } from '../../Components';
import { CustomModal } from '../../Components';
import { styles } from './Styles';

const AddProductScreen = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [ratingRate, setRatingRate] = useState('');
  const [ratingCount, setRatingCount] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [modalOnConfirm, setModalOnConfirm] = useState<(() => void) | undefined>();
  
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (
      !title ||
      !price ||
      !description ||
      !category ||
      !image ||
      !ratingRate ||
      !ratingCount
    ) {
      setModalTitle('Error');
      setModalContent('Please fill out all fields');
      setModalVisible(true);
      return;
    }

    const newProduct = {
      id: Date.now(),
      title,
      price: parseFloat(price),
      description,
      category,
      image,
      rating: {
        rate: parseFloat(ratingRate),
        count: parseInt(ratingCount, 10),
      },
    };

    dispatch(addProduct(newProduct));
    setModalTitle('Success');
    setModalContent('Product added successfully');
    setModalOnConfirm(() => () => navigation.navigate('Home'));
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    if (modalOnConfirm) {
      modalOnConfirm();
    }
  };

  // Create refs for each TextInput
  const priceRef = useRef<TextInput>(null);
  const descriptionRef = useRef<TextInput>(null);
  const categoryRef = useRef<TextInput>(null);
  const imageRef = useRef<TextInput>(null);
  const ratingRateRef = useRef<TextInput>(null);
  const ratingCountRef = useRef<TextInput>(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Add New Product</Text>
      <View style={styles.divider} />

      <Input
        value={title}
        label="Title"
        onChangeText={setTitle}
        returnKeyType="next"
        onSubmitEditing={() => priceRef.current?.focus()}
      />
      <Input
        ref={priceRef}
        value={price}
        label="Price"
        onChangeText={setPrice}
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => descriptionRef.current?.focus()}
      />
      <Input
        ref={descriptionRef}
        value={description}
        label="Description"
        onChangeText={setDescription}
        returnKeyType="next"
        multiline
        numberOfLines={3}
        onSubmitEditing={() => categoryRef.current?.focus()}
      />
      <Input
        ref={categoryRef}
        value={category}
        label="Category"
        onChangeText={setCategory}
        returnKeyType="next"
        onSubmitEditing={() => imageRef.current?.focus()}
      />
      <Input
        ref={imageRef}
        value={image}
        label="Image URL"
        onChangeText={setImage}
        returnKeyType="next"
        onSubmitEditing={() => ratingRateRef.current?.focus()}
      />
      <Input
        ref={ratingRateRef}
        value={ratingRate}
        label="Rating (Rate)"
        onChangeText={setRatingRate}
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => ratingCountRef.current?.focus()}
      />
      <Input
        ref={ratingCountRef}
        value={ratingCount}
        label="Rating (Count)"
        onChangeText={setRatingCount}
        keyboardType="numeric"
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>

      <CustomModal
        visible={modalVisible}
        onClose={handleCloseModal}
        title={modalTitle}
        content={modalContent}
        onConfirm={modalOnConfirm}
        confirmText="OK"
        cancelText="OK"
      />
    </ScrollView>
  );
};

export default AddProductScreen;
