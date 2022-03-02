import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useInfiniteShows } from '../../services';

export const SeriesHeader: FC<NativeStackHeaderProps> = () => {
  const { data: shows } = useInfiniteShows();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loaded pages: {shows?.pages.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
