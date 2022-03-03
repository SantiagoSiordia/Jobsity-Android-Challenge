import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Episode,
  Image,
  PIN,
  SCREENS,
  Search,
  SearchHeader,
  SeriesHeader,
  SeriesList,
  ShowDetails,
  ShowDetailsHeader,
} from '@screens';
import React, { FC } from 'react';

const Stack = createNativeStackNavigator();

export const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'fade',
        }}>
        <Stack.Screen
          name={SCREENS.PIN}
          component={PIN}
          options={{
            headerShown: false,
          }}
        />
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
  );
};
