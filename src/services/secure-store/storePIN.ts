import * as SecureStore from 'expo-secure-store';

export const storePIN = (pin: string) => {
  if (pin.length !== 4) {
    throw new Error('PIN should be 4 digits only');
  }
  SecureStore.setItemAsync('PIN', pin);
};
