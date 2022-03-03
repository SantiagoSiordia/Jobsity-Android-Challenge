import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ParamList, Routes } from '../../services/navigation';
import { useShow } from '../../services/queries/useShow';

export const ShowDetailsHeader: FC<NativeStackHeaderProps> = () => {
  const { goBack } = useNavigation();

  const {
    params: { showId },
  } = useRoute<RouteProp<ParamList, Routes>>();

  const { data: show, isLoading } = useShow(showId);

  const handleClear = () => goBack();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.title}>Loading</Text>
      ) : (
        <Text style={styles.title}>{show?.name}</Text>
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
