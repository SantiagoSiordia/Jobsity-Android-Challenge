import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { SCREENS } from '../screens';
import { ShowType } from '../services';

export interface ShowProps {
  show: ShowType;
}

const defaultNoImageURI =
  'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg';

export const Show: FC<ShowProps> = ({ show }) => {
  const { push } = useNavigation<StackNavigationProp<any>>();

  const handleOnShowPress = () => {
    push(SCREENS.SHOW_DETAILS, {
      showId: show.id,
    });
  };

  return (
    <Pressable style={styles.showContainer} onPress={handleOnShowPress}>
      <Text style={styles.showName}>{show.name}</Text>
      <Image
        source={{
          uri: show.image !== null ? show.image.medium : defaultNoImageURI,
        }}
        style={styles.image}
      />
    </Pressable>
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
