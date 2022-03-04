import { ShowIdWrapper } from '@components';
import { useAppSelector } from '@services';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

export const Favorites: FC = () => {
  const favorites = useAppSelector(state => state.favorites.favorites);
  return (
    <View style={styles.showsContainer}>
      {favorites.map(fav => (
        <ShowIdWrapper showId={fav} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  showsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
});
