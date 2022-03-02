import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ShowType } from '../../services';

export interface ShowProps {
  show: ShowType;
}

export const Show: FC<ShowProps> = ({ show }) => {
  return (
    <View style={styles.showContainer}>
      <Text style={styles.showName}>{show.name}</Text>
      <Image source={{ uri: show.image.medium }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 110,
    aspectRatio: 0.7,
    borderRadius: 8,
  },
  showContainer: {
    alignSelf: 'baseline',
    marginBottom: 4,
  },
  showName: {
    width: 110,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});
