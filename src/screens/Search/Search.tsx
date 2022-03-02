import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Search: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
        Search a show by name on the header input!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  instructions: {
    textAlign: 'center',
  },
});
