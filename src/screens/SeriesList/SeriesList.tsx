import React, { FC } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useInfiniteShows } from '../../services';
import { Show } from './Show';

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
    <ScrollView>
      <Text>Loaded pages: {shows.pages.length}</Text>
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
  showsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
  },
});
