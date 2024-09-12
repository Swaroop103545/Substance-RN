import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import {
  HomeScreen,
  Welcome,
  DetailScreen,
  AddProductScreen,
  EditProductScreen,
  SplashScreen,
} from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  const handleAnimationEnd = () => {
    setSplashVisible(false);
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isSplashVisible ? (
          <SplashScreen onAnimationEnd={handleAnimationEnd} />
        ) : (
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerShown: false,
              cardStyleInterpolator: ({ current, next, layouts }: any) => {
                const translateX = current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.width, 0],
                });

                const opacity = current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                });

                return {
                  cardStyle: {
                    transform: [{ translateX }],
                    opacity,
                  },
                };
              },
            }}
          >
            <Stack.Screen component={Welcome} name="Welcome" />
            <Stack.Screen component={HomeScreen} name="Home" />
            <Stack.Screen component={DetailScreen} name="Details" />
            <Stack.Screen component={AddProductScreen} name="AddProductsScreen" />
            <Stack.Screen component={EditProductScreen} name="Update" />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
