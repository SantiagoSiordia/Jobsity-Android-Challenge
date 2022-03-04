import { Loading, ShowIdWrapper } from '@components';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { defaultNoImageURI } from '@resources';
import { ParamList, PersonDetailRoute, usePerson } from '@services';
import React, { FC } from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SCREENS } from '../screens';

export const PersonDetails: FC = () => {
  const {
    params: { personId },
  } = useRoute<RouteProp<ParamList, PersonDetailRoute>>();
  const { push } = useNavigation<StackNavigationProp<any>>();
  const { data: person, isLoading, isError } = usePerson(personId);

  const handleOnShowImage = () => {
    push(SCREENS.IMAGE, {
      image: person?.image?.original,
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

  if (person === undefined || person === null) {
    return null;
  }

  const showIds: Array<string> = [];

  person._embedded?.castcredits?.forEach(element => {
    const splitLink = element._links.show.href.split('/') || [];
    showIds.push(splitLink[splitLink.length - 1]);
  });

  return (
    <ScrollView>
      <ImageBackground
        source={{ uri: person.image?.original ?? defaultNoImageURI }}
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
        <Text style={styles.name}>{person.name}</Text>
        <View style={styles.showsContainer}>
          {showIds.map(showId => {
            return <ShowIdWrapper key={'show-' + showId} showId={showId} />;
          })}
        </View>
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
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 32,
    color: 'black',
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
  showsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
