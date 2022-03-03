import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PIN: FC = () => {
  return (
    <View style={styles.container}>
      <Text>PIN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
