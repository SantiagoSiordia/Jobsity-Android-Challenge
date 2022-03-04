import { Loading, Show } from '@components';
import { useAppSelector, useShowSearchResult } from '@services';
import React, { FC } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const Search: FC = () => {
  const searchQuery = useAppSelector(state => state.search.query);
  const {
    data: queriedShows,
    isLoading,
    isError,
  } = useShowSearchResult(searchQuery);

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

  if (queriedShows === undefined || queriedShows === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Search a show or person by name on the header input!
        </Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.showsContainer}>
        {queriedShows.map(({ show }, showIndex) => (
          <Show key={'show-' + showIndex} show={show} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  instructions: {
    textAlign: 'center',
  },
  showsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
  },
});
