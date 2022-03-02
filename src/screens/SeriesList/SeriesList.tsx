import React, { FC } from 'react';
import {
  NativeScrollEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useInfiniteShows } from '../../services';
import { Show } from '../../components';

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
    <ScrollView
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          fetchNextPage();
        }
      }}
      scrollEventThrottle={400}>
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
