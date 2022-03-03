import React, { FC } from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export type NumberButtonProps = Pick<PressableProps, 'onPress'> & {
  disabled: boolean;
  number: number;
};

export const NumberButton: FC<NumberButtonProps> = ({
  number,
  disabled,
  onPress,
}) => {
  return (
    <Pressable disabled={disabled} onPress={onPress}>
      {({ pressed }) => {
        return (
          <View
            style={StyleSheet.flatten([
              styles.numberButton,
              pressed && styles.numberButtonPressed,
              disabled && styles.disabledButton,
            ])}>
            <Text
              style={StyleSheet.flatten([
                styles.numberText,
                pressed && styles.numberTextPressed,
                disabled && styles.disabledText,
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
  disabledButton: {
    borderColor: 'grey',
  },
  disabledText: {
    color: 'grey',
  },
});
