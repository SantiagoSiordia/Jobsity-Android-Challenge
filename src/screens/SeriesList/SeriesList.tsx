import { Loading, Show } from '@components';
import { useInfiniteShows } from '@services';
import React, { FC } from 'react';
import {
  NativeScrollEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
    console.log('Create PIN');
  };

  return (
    <ScrollView
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          fetchNextPage();
        }
      }}
      contentContainerStyle={styles.container}
      scrollEventThrottle={400}>
      <View style={{ flexDirection: 'row' }}>
        <Pressable style={styles.PIN} onPress={handleOnCreatePIN}>
          <Text>Create PIN</Text>
        </Pressable>
        <View style={{ flex: 1 }} />
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
  },
});
