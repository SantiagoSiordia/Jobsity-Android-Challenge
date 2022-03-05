import React, { FC } from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
export type ButtonProps = PressableProps & {
  title: string;
  variant: 'black' | 'white';
  icon?: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({
  title,
  icon,
  variant,
  ...pressableProps
}) => {
  return (
    <Pressable style={styles[variant].button} {...pressableProps}>
      <Text style={styles[variant].text}>{title}</Text>
      {icon && icon}
    </Pressable>
  );
};

const styles = {
  black: StyleSheet.create({
    text: {
      textAlign: 'center',
      fontSize: 16,
      color: 'white',
    },
    button: {
      borderWidth: 2,
      borderRadius: 8,
      paddingVertical: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
  }),
  white: StyleSheet.create({
    text: {
      textAlign: 'center',
      fontSize: 16,
      color: 'black',
    },
    button: {
      borderWidth: 2,
      borderRadius: 8,
      paddingVertical: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      marginBottom: 8,
      paddingHorizontal: 16,
    },
  }),
};
