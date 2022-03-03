import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ImageRoute, ParamList } from '../../services/navigation';

export const Image: FC = () => {
  const { goBack } = useNavigation();
  const {
    params: { image },
  } = useRoute<RouteProp<ParamList, ImageRoute>>();

  return (
    <ImageBackground
      style={styles.image}
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
