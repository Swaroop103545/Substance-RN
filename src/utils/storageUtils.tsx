import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToStorage = async (key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to storage:', error);
  }
};

export const loadFromStorage = async (key: string) => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result ? JSON.parse(result) : null;
  } catch (error) {
    console.error('Error loading from storage:', error);
    return null;
  }
};
