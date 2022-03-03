import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import TouchID from 'react-native-touch-id';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();
import { Provider } from 'react-redux';
import { Navigator, store } from "./src/services"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Require cycle:']);

TouchID.authenticate('to demo this react-native component')
  .then(success => {
    console.log(success);
  })
  .catch(error => {
    console.log(error)
  });

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </Provider>
  );
};

export default () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};
