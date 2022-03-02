import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Search: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
