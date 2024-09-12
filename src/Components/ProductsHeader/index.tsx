import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
  Keyboard,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setSearchQuery} from '../../redux/productSlice';
import {styles} from './Styles';

const {width: screenWidth} = Dimensions.get('window');

const ProductHeader = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [buttonText, setButtonText] = useState('Add Products');
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const searchBarWidth = useRef(new Animated.Value(40)).current;
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.products.searchQuery);
  const navigation = useNavigation();

  const toggleSearch = () => {
    setIsSearching(!isSearching);
    setButtonText(isSearching ? 'Add Products' : 'X');
    setIsButtonVisible(isSearching); // Toggle button visibility

    Animated.timing(searchBarWidth, {
      toValue: isSearching ? 40 : screenWidth * 0.75, // Responsive width
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeSearch = () => {
    setIsSearching(false);
    setButtonText('Add Products');
    setIsButtonVisible(true);
    dispatch(setSearchQuery('')); // Clear search query

    Animated.timing(searchBarWidth, {
      toValue: 40,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const onSearchChange = (query: any) => {
    dispatch(setSearchQuery(query));
    setIsButtonVisible(query.length === 0); // Show button if search input is empty
  };

  const onButtonPress = () => {
    if (isSearching) {
      closeSearch();
      console.log('Searching...');
      // Additional logic for search functionality can be added here
    } else {
      console.log('Adding products...');
      // Navigate to "Add Products" screen
      navigation.navigate('AddProductsScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.searchContainer, {width: searchBarWidth}]}>
        {isButtonVisible && (
          <TouchableOpacity style={styles.searchButton} onPress={toggleSearch}>
            <Image
              source={require('../../assets/search.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
        {isSearching && (
          <>
            <TextInput
              placeholder="Search products..."
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={onSearchChange}
              autoFocus
              onSubmitEditing={() => Keyboard.dismiss()} // Hide keyboard on submit
            />
          </>
        )}
      </Animated.View>

      <TouchableOpacity onPress={onButtonPress} style={styles.addButton}>
        <Text style={styles.addButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductHeader;
