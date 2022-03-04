import { Loading } from '@components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Episode,
  Favorites,
  FavoritesHeader,
  Image,
  PersonDetails,
  PersonDetailsHeader,
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
import { usePIN } from '../queries';

const Stack = createNativeStackNavigator();

export const Navigator: FC = () => {
  const { data: pin, isLoading } = usePIN();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={pin === null ? SCREENS.SERIES_LIST : SCREENS.PIN}
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
        <Stack.Screen
          component={Favorites}
          name={SCREENS.FAVORITES}
          options={{
            header: headerProps => <FavoritesHeader {...headerProps} />,
          }}
        />
        <Stack.Screen
          component={PersonDetails}
          name={SCREENS.PERSON_DETAILS}
          options={{
            header: headerProps => <PersonDetailsHeader {...headerProps} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
