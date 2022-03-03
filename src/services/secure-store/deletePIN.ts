import * as SecureStore from 'expo-secure-store';

export const deletePIN = () => {
  SecureStore.deleteItemAsync('PIN');
};
