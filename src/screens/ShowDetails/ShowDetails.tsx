import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { defaultNoImageURI } from '../../resources';
import { DetailRoute, ParamList, Routes } from '../../services/navigation';
import { useShow } from '../../services/queries/useShow';
import RenderHtml from 'react-native-render-html';
import { StackNavigationProp } from '@react-navigation/stack';
import { SCREENS } from '..';

const height = Dimensions.get('screen').height;

export const ShowDetails: FC = () => {
  const {
    params: { showId },
  } = useRoute<RouteProp<ParamList, DetailRoute>>();
  const { push } = useNavigation<StackNavigationProp<any>>();
  const { data: show, isLoading, isError } = useShow(showId);

  const handleOnShowImage = () => {
    push(SCREENS.IMAGE, {
      image: show?.image?.original,
    });
  };

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

  if (show === undefined || show === null) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={{ uri: show.image?.original ?? defaultNoImageURI }}
          style={styles.image}>
          <LinearGradient
            colors={[
              'rgba(0, 0, 0, 0)',
              'rgba(255, 255, 255, 0.6)',
              'white',
              'white',
              'white',
            ]}
            style={styles.linearGradient}>
            <Pressable
              onPress={handleOnShowImage}
              style={styles.invisiblePressable}
            />
            <Text style={styles.title}>{show.name}</Text>
            <Text style={styles.airText}>
              {show.schedule.days.length === 0 ? 'Someday' : show.schedule.days}
              s at{' '}
              {show.schedule.time === '' ? 'some hour' : show.schedule.time}
            </Text>
            <Text style={styles.infoTextTitle}>Genres:</Text>
            <Text style={styles.infoText}>
              {show.genres.map(
                (genre, index) =>
                  `${genre}${index === show.genres.length - 1 ? '.' : ','} `,
              )}
            </Text>
            <Text style={styles.infoTextTitle}>Summary:</Text>
            <RenderHtml
              contentWidth={100}
              source={{
                html: show.summary,
              }}
            />
            <Text style={styles.title}>List of episodes</Text>
            <Text style={styles.infoTextTitle}>Season 1</Text>
          </LinearGradient>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  airText: {
    fontSize: 14,
    alignSelf: 'center',
    lineHeight: 24,
  },
  infoTextTitle: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  invisiblePressable: {
    height: height * 0.2,
    width: '100%',
  },
});
