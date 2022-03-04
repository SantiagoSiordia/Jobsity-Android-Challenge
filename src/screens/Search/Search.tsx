import { Loading, Person, Show } from '@components';
import { useAppSelector, useSearchResults } from '@services';
import React, { FC } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const Search: FC = () => {
  const searchQuery = useAppSelector(state => state.search.query);
  const {
    data: queriedResults,
    isLoading,
    isError,
  } = useSearchResults(searchQuery);

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

  if (queriedResults === undefined || queriedResults === null) {
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
        {queriedResults.map(({ show, person }, resultIndex) => {
          if (show !== undefined) {
            return <Show key={'show-' + resultIndex} show={show} />;
          }
          return <Person key={'person-' + resultIndex} person={person} />;
        })}
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
    color: 'black',
  },
  showsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
  },
});
