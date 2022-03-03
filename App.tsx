import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  SearchHeader,
  Search,
  SCREENS,
  SeriesHeader,
  SeriesList,
  ShowDetails,
  ShowDetailsHeader,
  Image,
  Episode,
} from './src/screens';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();
import { Provider } from 'react-redux';
import { store } from './src/services/redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              animation: 'fade',
            }}>
            <Stack.Screen
              name={SCREENS.SERIES_LIST}
              component={SeriesList}
              options={{
                header: headerProps => <SeriesHeader {...headerProps} />,
              }}
            />
            <Stack.Screen
              name={SCREENS.SEARCH_SHOWS}
              component={Search}
              options={{
                header: headerProps => <SearchHeader {...headerProps} />,
              }}
            />
            <Stack.Screen
              name={SCREENS.SHOW_DETAILS}
              component={ShowDetails}
              options={{
                header: headerProps => <ShowDetailsHeader {...headerProps} />,
              }}
            />
            <Stack.Screen
              name={SCREENS.IMAGE}
              component={Image}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={SCREENS.EPISODE_DETAILS}
              component={Episode}
              options={{
                header: headerProps => <ShowDetailsHeader {...headerProps} />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
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
