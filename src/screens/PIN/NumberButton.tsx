import React, { FC } from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export type NumberButtonProps = Pick<PressableProps, 'onPress'> & {
  number: number;
};

export const NumberButton: FC<NumberButtonProps> = ({ number, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => {
        return (
          <View
            style={StyleSheet.flatten([
              styles.numberButton,
              pressed && styles.numberButtonPressed,
            ])}>
            <Text
              style={StyleSheet.flatten([
                styles.numberText,
                pressed && styles.numberTextPressed,
              ])}>
              {number}
            </Text>
          </View>
        );
      }}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  numberButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    borderColor: 'white',
  },
  numberButtonPressed: {
    backgroundColor: 'white',
  },
  numberText: {
    color: 'white',
    fontSize: 32,
  },
  numberTextPressed: {
    color: 'black',
    fontSize: 32,
  },
});
