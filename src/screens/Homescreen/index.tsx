import React, {useEffect, useState, useRef} from 'react';
import {View, Animated} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {loadProductsFromStorage, fetchProducts} from '../../redux/productSlice';
import {Styles} from './Styles';
import {
  Card,
  Header,
  ProductHeader,
  Loader,
  CustomModal,
} from '../../Components';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const scrollY = useRef(new Animated.Value(0)).current;
  const {filteredProducts, loading, error} = useAppSelector(
    state => state.products,
  );

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(loadProductsFromStorage()).unwrap();

        await dispatch(fetchProducts()).unwrap();
      } catch (err) {
        console.error('Error fetching data:', err);
        setIsModalVisible(true);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <View style={{flex: 1}}>
      <Header />
      <ProductHeader />
      {loading && <Loader />}
      <Animated.FlatList
        data={filteredProducts}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={Styles.contentContainer}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => (
          <Card
            item={item}
            index={index}
            scrollY={scrollY}
            onPress={() => navigation.navigate('Details', {product: item})}
          />
        )}
      />

      {/* Error Modal */}
      <CustomModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        title="Error"
        content={error || 'An unexpected error occurred.'}
        cancelText="Close"
      />
    </View>
  );
};

export default HomeScreen;
