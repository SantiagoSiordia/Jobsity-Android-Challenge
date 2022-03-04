import { Button } from '@components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { setQuery, useAppSelector } from '@services';
import React, { FC, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';

export const SearchHeader: FC<NativeStackHeaderProps> = () => {
  const [stringToSearch, setStringToSearch] = useState<string>('');
  const { goBack } = useNavigation();
  const dispatch = useDispatch();
  const searchQuery = useAppSelector(state => state.search.query);
  const { top } = useSafeAreaInsets();
  const handleClear = () => {
    setStringToSearch('');
    goBack();
  };

  const handleSearchShows = () => {
    dispatch(
      setQuery({
        query: {
          queryString: stringToSearch,
          searchType: 'show',
        },
      }),
    );
  };

  const handleSearchPeople = () => {
    dispatch(
      setQuery({
        query: {
          queryString: stringToSearch,
          searchType: 'person',
        },
      }),
    );
  };

  return (
    <View>
      <LinearGradient
        colors={['white', 'black']}
        style={StyleSheet.flatten([
          styles.container,
          { paddingTop: top + 16 },
        ])}>
        <View style={styles.inputContainer}>
          <Icon color="white" name="input" size={16} />
          <TextInput
            autoFocus
            onChangeText={setStringToSearch}
            placeholder="Search shows or people by name"
            placeholderTextColor="white"
            selectionColor="black"
            style={styles.textInput}
            value={stringToSearch}
          />
        </View>

        <Icon color="white" name="clear" onPress={handleClear} size={30} />
      </LinearGradient>
      <View style={styles.resultsContainer}>
        {stringToSearch.length > 0 && (
          <>
            <Button
              // eslint-disable-next-line react/jsx-curly-brace-presence
              icon={<Icon color="black" name="tv" size={20} />}
              onPress={handleSearchShows}
              title="Search shows"
              variant="white"
            />
            <Button
              // eslint-disable-next-line react/jsx-curly-brace-presence
              icon={<Icon color="black" name="person-search" size={20} />}
              onPress={handleSearchPeople}
              title="Search people"
              variant="white"
            />
          </>
        )}
        <Text style={styles.searchingFor}>
          Results for{' '}
          <Text style={styles.searchQuery}>"{searchQuery.queryString}"</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  textInput: {
    color: 'white',
    marginHorizontal: 16,
    width: '100%',
  },
  inputContainer: {
    backgroundColor: 'grey',
    borderRadius: 8,
    padding: 8,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  searchingFor: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    paddingBottom: 8,
  },
  searchQuery: {
    fontWeight: 'bold',
  },
  resultsContainer: {
    backgroundColor: 'black',
    paddingHorizontal: 16,
  },
});
