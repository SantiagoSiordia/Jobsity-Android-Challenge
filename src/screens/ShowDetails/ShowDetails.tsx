import { Loading } from '@components';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { defaultNoImageURI } from '@resources';
import { SCREENS } from '@screens';
import {
  addFavorite,
  DetailRoute,
  Episode,
  ParamList,
  removeFavorite,
  useAppSelector,
  useShow,
  useShowEpisodes,
} from '@services';
import React, { FC } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RenderHtml from 'react-native-render-html';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';

export const ShowDetails: FC = () => {
  const {
    params: { showId },
  } = useRoute<RouteProp<ParamList, DetailRoute>>();
  const { push } = useNavigation<StackNavigationProp<any>>();
  const { data: show, isLoading, isError } = useShow(showId);
  const {
    data: showEpisodes,
    // isLoading: isLoadingEpisodes,
    // isError: isErrorEpisodes,
  } = useShowEpisodes(showId);

  const dispatch = useDispatch();

  const favorites = useAppSelector(state => state.favorites.favorites);

  const handleOnShowImage = () => {
    push(SCREENS.IMAGE, {
      image: show?.image?.original,
    });
  };

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

  if (show === undefined || show === null) {
    return null;
  }

  const restructuredEpisodes: Record<string, Array<Episode>> = {};

  showEpisodes?.forEach(episode => {
    if (restructuredEpisodes[episode.season] === undefined) {
      restructuredEpisodes[episode.season] = [];
    }
    restructuredEpisodes[episode.season] = [
      ...restructuredEpisodes[episode.season],
      episode,
    ];
  });

  const handleOnSeeEpisode = (episodeId: number) => {
    push(SCREENS.EPISODE_DETAILS, {
      episodeId,
      showId: show.id,
    });
  };

  const isFavorite = favorites.includes(show.id + '');

  const handleAddToFavorites = () => {
    if (isFavorite) {
      dispatch(removeFavorite(show.id + ''));
    } else {
      if (show !== undefined && show !== null) {
        dispatch(addFavorite(show.id + ''));
      }
    }
  };

  return (
    <ScrollView>
      <ImageBackground
        source={{ uri: show.image?.original ?? defaultNoImageURI }}
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
        <Text style={styles.title}>{show.name}</Text>
        <Text style={styles.airText}>
          {show.schedule.days.length === 0 ? 'Someday' : show.schedule.days}s at{' '}
          {show.schedule.time === '' ? 'some hour' : show.schedule.time}
        </Text>

        <Pressable
          onPress={handleAddToFavorites}
          style={StyleSheet.flatten([
            styles.favoritesButton,
            isFavorite && styles.isFavoriteButton,
          ])}>
          <Text
            style={StyleSheet.flatten([
              styles.favoritesText,
              isFavorite && styles.isFavoriteText,
            ])}>
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </Text>
          <Icon
            color={isFavorite ? 'white' : 'black'}
            name={isFavorite ? 'heart' : 'hearto'}
            size={16}
          />
        </Pressable>

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
        {Object.entries(restructuredEpisodes).map(([season, episodes]) => {
          return (
            <View key={show.name + '-season-' + season}>
              <Text style={styles.season}>Season {season}</Text>
              <View style={styles.episodesContainer}>
                {episodes.map(episode => {
                  return (
                    <Pressable
                      key={'episode-' + show.name + '-' + episode.id}
                      onPress={() => handleOnSeeEpisode(episode.id)}
                      style={styles.episodeContainer}>
                      <Text style={styles.episodeName}>{episode.name}</Text>
                      <Image
                        source={{
                          uri: episode?.image?.medium ?? defaultNoImageURI,
                        }}
                        style={styles.episodeImage}
                      />
                    </Pressable>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
  },
  linearGradient: {
    flex: 1,
    height: 200,
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
    flex: 1,
  },
  episodeImage: {
    width: 170,
    aspectRatio: 1.6,
    borderRadius: 8,
  },
  episodesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  episodeContainer: {
    alignSelf: 'baseline',
    marginBottom: 4,
  },
  episodeName: {
    width: 110,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  season: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 24,
    marginVertical: 24,
    fontWeight: 'bold',
  },
  favoritesText: {
    textAlign: 'center',
    marginRight: 24,
    fontSize: 16,
  },
  favoritesButton: {
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  isFavoriteButton: {
    backgroundColor: 'black',
  },
  isFavoriteText: {
    color: 'white',
  },
});
