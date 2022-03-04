import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { defaultNoImageURI } from '@resources';
import { SCREENS } from '@screens';
import { PersonType } from '@services';
import React, { FC } from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

export interface PersonProps {
  person: PersonType;
}

export const Person: FC<PersonProps> = ({ person }) => {
  const { push } = useNavigation<StackNavigationProp<any>>();

  const handleOnPersonPress = () => {
    push(SCREENS.PERSON_DETAILS, {
      personId: person.id,
    });
  };
  return (
    <Pressable onPress={handleOnPersonPress} style={styles.personContainer}>
      <Text style={styles.showName}>{person.name}</Text>
      <Image
        source={{
          uri: person.image?.medium ?? defaultNoImageURI,
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
  personContainer: {
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
