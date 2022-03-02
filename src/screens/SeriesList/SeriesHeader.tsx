import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useInfiniteShows } from '../../services';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../screens';

export const SeriesHeader: FC<NativeStackHeaderProps> = () => {
  const { data: shows } = useInfiniteShows();

  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.push(SCREENS.SEARCH_SHOWS);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loaded show pages: {shows?.pages.length}</Text>
      <Icon name="search" size={20} color="white" onPress={handleSearch} />
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
  textInput: {
    color: 'white',
    marginHorizontal: 16,
    minWidth: 130,
  },
  inputContainer: {
    backgroundColor: 'grey',
    borderRadius: 8,
    padding: 8,
    height: 30,
    flexDirection: 'row',
  },
});
