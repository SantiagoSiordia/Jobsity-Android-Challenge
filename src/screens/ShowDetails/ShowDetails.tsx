import { RouteProp, useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { defaultNoImageURI } from '../../resources';
import { ParamList, Routes } from '../../services/navigation';
import { useShow } from '../../services/queries/useShow';
import RenderHtml from 'react-native-render-html';

export const ShowDetails: FC = () => {
  const {
    params: { showId },
  } = useRoute<RouteProp<ParamList, Routes>>();
  const { data: show, isLoading, isError } = useShow(showId);

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

  console.log(show.schedule);

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
            <Text style={styles.title}>{show.name}</Text>
            <Text style={styles.airText}>
              {show.schedule.days}s at {show.schedule.time}
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
    width: '100%',
    height: '100%',
  },
  linearGradient: {
    flex: 1,
    padding: 16,
    paddingTop: '70%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
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
});
