import { Button, Loading, Show } from '@components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { deletePIN, QUERIES, useInfiniteShows, usePIN } from '@services';
import React, { FC } from 'react';
import {
  NativeScrollEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useQueryClient } from 'react-query';
import { SCREENS } from '../screens';

const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: NativeScrollEvent) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

export const SeriesList: FC = () => {
  const { data: shows, isLoading, isError, fetchNextPage } = useInfiniteShows();
  const { push } = useNavigation<StackNavigationProp<any>>();

  const { data: PIN } = usePIN();

  const queryClient = useQueryClient();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <View>
        <Text>Is error</Text>
      </View>
    );
  }

  if (shows === undefined) {
    return null;
  }

  const handleOnCreatePIN = () => {
    push(SCREENS.PIN);
  };

  const handleDeletePIN = () => {
    deletePIN();
    queryClient.invalidateQueries(QUERIES.PIN);
  };

  const handleSeeFavorites = () => {
    push(SCREENS.FAVORITES);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          fetchNextPage();
        }
      }}
      scrollEventThrottle={400}>
      <View style={styles.PINcontainer}>
        {PIN === null && (
          <View style={{ marginRight: 8 }}>
            <Button
              onPress={handleOnCreatePIN}
              title="Create PIN"
              variant="white"
            />
          </View>
        )}
        {typeof PIN === 'string' && (
          <View style={{ marginRight: 8 }}>
            <Button
              onPress={handleDeletePIN}
              title="Delete PIN"
              variant="white"
            />
          </View>
        )}
        <Button
          onPress={handleSeeFavorites}
          title="See favorites"
          variant="white"
        />
        <View style={styles.filler} />
      </View>
      {shows.pages.map((showsGroup, showsGroupIndex) => {
        return (
          <View
            key={'shows-group-' + showsGroupIndex}
            style={styles.showsContainer}>
            {showsGroup.map((show, showIndex) => {
              return <Show key={'show-' + showIndex} show={show} />;
            })}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  showsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  PIN: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
    marginRight: 8,
  },
  PINcontainer: {
    flexDirection: 'row',
  },
  filler: {
    flex: 1,
  },
  buttonText: {
    color: 'black',
  },
});
