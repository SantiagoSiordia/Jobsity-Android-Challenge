import { useNavigation } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import type { StackNavigationProp } from '@react-navigation/stack';
import { SCREENS } from '@screens';
import { useInfiniteShows } from '@services';
import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const SeriesHeader: FC<NativeStackHeaderProps> = () => {
  const { data: shows } = useInfiniteShows();

  const navigation = useNavigation<StackNavigationProp<any>>();
  const { top } = useSafeAreaInsets();

  const handleSearch = () => {
    navigation.push(SCREENS.SEARCH_SHOWS);
  };

  return (
    <LinearGradient
      colors={['white', 'black']}
      style={StyleSheet.flatten([styles.container, { paddingTop: top + 16 }])}>
      <Text style={styles.text}>Loaded show pages: {shows?.pages.length}</Text>
      <Icon name="search" size={30} color="white" onPress={handleSearch} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 30,
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
