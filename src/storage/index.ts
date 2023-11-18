import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@history', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@history');
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log(e);
  }
};

export const clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};
