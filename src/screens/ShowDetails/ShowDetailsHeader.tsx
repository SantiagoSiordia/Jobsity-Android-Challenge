import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useShow, DetailRoute, ParamList } from '@services';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

export const ShowDetailsHeader: FC<NativeStackHeaderProps> = () => {
  const { goBack } = useNavigation();

  const {
    params: { showId },
  } = useRoute<RouteProp<ParamList, DetailRoute>>();
  const { top } = useSafeAreaInsets();
  const { data: show, isLoading } = useShow(showId);

  const handleClear = () => goBack();

  return (
    <LinearGradient
      colors={['white', 'black']}
      style={StyleSheet.flatten([styles.container, { paddingTop: top + 16 }])}>
      {isLoading ? (
        <Text style={styles.title}>Loading</Text>
      ) : (
        <Text style={styles.title}>{show?.name}</Text>
      )}
      <Icon name="clear" size={30} color="white" onPress={handleClear} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    padding: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
});
