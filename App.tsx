import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  SearchHeader,
  Search,
  SCREENS,
  SeriesHeader,
  SeriesList,
} from './src/screens';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
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
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: { flex: 1 },
});

export default App;
