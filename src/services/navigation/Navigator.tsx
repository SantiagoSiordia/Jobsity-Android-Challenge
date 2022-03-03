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
        initialRouteName={SCREENS.SERIES_LIST}
        screenOptions={{
          animation: 'fade',
        }}>
        <Stack.Screen
          component={PIN}
          name={SCREENS.PIN}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={SeriesList}
          name={SCREENS.SERIES_LIST}
          options={{
            header: headerProps => <SeriesHeader {...headerProps} />,
          }}
        />
        <Stack.Screen
          component={Search}
          name={SCREENS.SEARCH_SHOWS}
          options={{
            header: headerProps => <SearchHeader {...headerProps} />,
          }}
        />
        <Stack.Screen
          component={ShowDetails}
          name={SCREENS.SHOW_DETAILS}
          options={{
            header: headerProps => <ShowDetailsHeader {...headerProps} />,
          }}
        />
        <Stack.Screen
          component={Image}
          name={SCREENS.IMAGE}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={Episode}
          name={SCREENS.EPISODE_DETAILS}
          options={{
            header: headerProps => <ShowDetailsHeader {...headerProps} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
