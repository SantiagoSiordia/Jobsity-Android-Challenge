import { RouteProp, useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ParamList, Routes } from '../../services/navigation';
import { useShow } from '../../services/queries/useShow';

export const ShowDetails: FC = () => {
  const {
    params: { showId },
  } = useRoute<RouteProp<ParamList, Routes>>();
  const { data: show, isLoading, isError } = useShow(showId);

  if (isLoading) {
    return (
      <View>
        <Text>Is loading</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Is error</Text>
      </View>
    );
  }

  if (show === undefined) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>{show.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
