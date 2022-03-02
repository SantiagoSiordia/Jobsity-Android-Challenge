import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SeriesList } from './src/screens';
import { SeriesHeader } from './src/screens/SeriesList/SeriesHeader';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={
              {
                // headerShown: false,
              }
            }>
            <Stack.Screen
              name="Series"
              component={SeriesList}
              options={{
                header: headerProps => <SeriesHeader {...headerProps} />,
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
