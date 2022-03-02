import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useInfiniteShows } from '../../services';

export const SeriesList: FC = () => {
  const { data: shows, isLoading, isError } = useInfiniteShows();

  if (isLoading) {
    return (
      <View>
        <Text>Is loading</Text>
      </View>
    );
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

  return (
    <View style={styles.container}>
      <Text>Loaded pages: {shows.pages.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
