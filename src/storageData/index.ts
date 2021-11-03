import AsyncStorage from '@react-native-async-storage/async-storage';

export const tokenKey = '@token';
export const cartKey = '@cart';

export const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log(error);
  }
};

export const removeData = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
