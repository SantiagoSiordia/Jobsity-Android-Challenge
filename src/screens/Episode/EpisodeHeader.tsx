import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { EpisodeRoute, ParamList } from '../../services/navigation';
import { useEpisode } from '../../services/queries/useEpisode';

export const EpisodeHeader: FC<NativeStackHeaderProps> = () => {
  const { goBack } = useNavigation();

  const {
    params: { episodeId },
  } = useRoute<RouteProp<ParamList, EpisodeRoute>>();

  const { data: episode, isLoading } = useEpisode(episodeId);

  const handleClear = () => goBack();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.title}>Loading</Text>
      ) : (
        <Text style={styles.title}>{episode?.name}</Text>
      )}
      <Icon name="clear" size={30} color="white" onPress={handleClear} />
    </View>
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
