import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RenderHTML from 'react-native-render-html';
import { SCREENS } from '..';
import { defaultNoImageURI } from '../../resources';
import { EpisodeRoute, ParamList } from '../../services/navigation';
import { useEpisode } from '../../services/queries/useEpisode';

export const Episode: FC = () => {
  const {
    params: { episodeId },
  } = useRoute<RouteProp<ParamList, EpisodeRoute>>();
  const { push } = useNavigation<StackNavigationProp<any>>();
  const { data: episode, isLoading, isError } = useEpisode(episodeId);

  if (isLoading) {
    return (
      <View>
        <Text>Is loading</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Is error</Text>
      </View>
    );
  }

  if (episode === undefined) {
    return null;
  }

  // console.log(episode);

  const handleOnShowImage = () => {
    push(SCREENS.IMAGE, {
      image: episode.image?.original,
    });
  };

  return (
    <>
      <ImageBackground
        source={{ uri: episode.image?.original ?? defaultNoImageURI }}
        style={styles.image}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', 'white']}
          style={styles.linearGradient}>
          <Pressable
            onPress={handleOnShowImage}
            style={styles.invisiblePressable}
          />
        </LinearGradient>
      </ImageBackground>
      <View style={styles.container}>
        <Text style={styles.infoTitle}>Episode name:</Text>
        <Text style={styles.infoText}>{episode.name}</Text>
        <Text style={styles.infoTitle}>Season:</Text>
        <Text style={styles.infoText}>{episode.season}</Text>
        <Text style={styles.infoTitle}>Summary:</Text>
        <RenderHTML source={{ html: episode.summary }} contentWidth={100} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'white',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 16,
  },
  invisiblePressable: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});
