import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const SeriesList: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Series List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
