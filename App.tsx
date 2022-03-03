import React from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { Navigator, store } from './src/services';

LogBox.ignoreLogs(['Require cycle:']);

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Navigator />
        </QueryClientProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
