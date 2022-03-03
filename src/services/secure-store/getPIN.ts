import * as SecureStore from 'expo-secure-store';

export const getPIN = async () => {
  try {
    const PIN = (await SecureStore.getItemAsync('PIN')) as string | null;
    return PIN;
  } catch (error) {
    throw error;
  }
};
