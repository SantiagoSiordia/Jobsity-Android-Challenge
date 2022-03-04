import React, { FC } from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

export type ButtonProps = PressableProps & {
  title: string;
  icon?: React.Component;
};

export const Button: FC<ButtonProps> = ({ title, icon, ...pressableProps }) => {
  return (
    <Pressable style={styles.pressable} {...pressableProps}>
      <Text style={styles.pressableText}>{title}</Text>
      {icon}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#f194ff',
    height: 30,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressableText: {
    color: 'white',
  },
});
