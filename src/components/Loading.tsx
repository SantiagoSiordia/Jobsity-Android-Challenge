import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

export const Loading: FC = () => {
  return (
    <View style={styles.container}>
      <Progress.Circle
        size={200}
        borderWidth={5}
        indeterminate={true}
        color="black"
      />
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center', flex: 1 },
  text: { fontSize: 36, fontWeight: 'bold', color: 'black' },
});
