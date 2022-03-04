import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ImageRoute, ParamList } from '@services';
import React, { FC } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Image: FC = () => {
  const { goBack } = useNavigation();
  const {
    params: { image },
  } = useRoute<RouteProp<ParamList, ImageRoute>>();

  const { top } = useSafeAreaInsets();
  return (
    <ImageBackground
      resizeMode="contain"
      source={{ uri: image }}
      style={StyleSheet.flatten([styles.image, { paddingTop: 16 + top }])}>
      <Icon
        color="black"
        name="clear"
        onPress={goBack}
        size={32}
        style={styles.icon}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    padding: 16,
  },
  icon: {
    alignSelf: 'flex-end',
  },
});
