import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { DetailRoute, ParamList, useShow } from '@services';
import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      <Icon color="white" name="clear" onPress={handleClear} size={30} />
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
