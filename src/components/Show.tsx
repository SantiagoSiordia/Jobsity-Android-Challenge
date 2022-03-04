import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { defaultNoImageURI } from '@resources';
import { SCREENS } from '@screens';
import { ShowType } from '@services';
import React, { FC } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const width = screenWidth / 3 - 8 * 2;

export interface ShowProps {
  show: ShowType;
}

export const Show: FC<ShowProps> = ({ show }) => {
  const { push } = useNavigation<StackNavigationProp<any>>();

  const handleOnShowPress = () => {
    push(SCREENS.SHOW_DETAILS, {
      showId: show.id,
    });
  };

  return (
    <Pressable onPress={handleOnShowPress} style={styles.showContainer}>
      <Text style={styles.showName}>{show.name}</Text>
      <Image
        source={{
          uri: show.image?.medium ?? defaultNoImageURI,
        }}
        style={styles.image}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width,
    aspectRatio: 0.7,
    borderRadius: 8,
  },
  showContainer: {
    alignSelf: 'baseline',
    marginBottom: 4,
  },
  showName: {
    width,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});
