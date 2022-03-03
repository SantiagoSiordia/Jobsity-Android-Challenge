import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ImageRoute, ParamList } from '@services';

export const Image: FC = () => {
  const { goBack } = useNavigation();
  const {
    params: { image },
  } = useRoute<RouteProp<ParamList, ImageRoute>>();

  const { top } = useSafeAreaInsets();
  return (
    <ImageBackground
      style={StyleSheet.flatten([styles.image, { paddingTop: 16 + top }])}
      source={{ uri: image }}
      resizeMode="contain">
      <Icon name="clear" size={32} onPress={goBack} style={styles.icon} />
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
