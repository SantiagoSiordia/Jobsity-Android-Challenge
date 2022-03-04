import { Loading } from '@components';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { defaultNoImageURI } from '@resources';
import { SCREENS } from '@screens';
import { EpisodeRoute, ParamList, useEpisode } from '@services';
import React, { FC } from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RenderHtml from 'react-native-render-html';

export const Episode: FC = () => {
  const {
    params: { episodeId },
  } = useRoute<RouteProp<ParamList, EpisodeRoute>>();
  const { push } = useNavigation<StackNavigationProp<any>>();
  const { data: episode, isLoading, isError } = useEpisode(episodeId);

  if (isLoading) {
    return <Loading />;
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
        <Text style={styles.infoTitle}>Episode number:</Text>
        <Text style={styles.infoText}>{episode.number}</Text>
        <Text style={styles.infoTitle}>Summary:</Text>
        {episode.summary !== null && episode.summary !== undefined && (
          <RenderHtml
            baseStyle={styles.html}
            contentWidth={100}
            source={{
              html: episode.summary,
            }}
          />
        )}
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
    color: 'black',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 16,
    color: 'black',
  },
  invisiblePressable: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  html: { color: 'black' },
});
