import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../services/redux/search';
import { useAppSelector } from '../../services/redux';

export const SearchHeader: FC<NativeStackHeaderProps> = () => {
  const [showToSearch, setShowToSearch] = useState<string>('');
  const { goBack } = useNavigation();
  const dispatch = useDispatch();
  const searchQuery = useAppSelector(state => state.search.query);

  const handleClear = () => {
    setShowToSearch('');
    goBack();
  };

  const handleSearch = () => {
    dispatch(setQuery(showToSearch));
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Icon name="input" color="white" />
          <TextInput
            value={showToSearch}
            autoFocus
            onChangeText={setShowToSearch}
            style={styles.textInput}
            placeholder="Search shows by name"
            placeholderTextColor="white"
            selectionColor="black"
          />
        </View>
        {showToSearch !== '' ? (
          <Button title="Search" onPress={handleSearch} />
        ) : null}

        <Icon name="clear" size={30} color="white" onPress={handleClear} />
      </View>
      <Text style={styles.searchingFor}>
        Searching for <Text style={styles.searchQuery}>"{searchQuery}"</Text>
      </Text>
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
    width: 130,
  },
  inputContainer: {
    backgroundColor: 'grey',
    borderRadius: 8,
    padding: 8,
    height: 30,
    flexDirection: 'row',
  },
  searchingFor: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    paddingBottom: 8,
    backgroundColor: 'black',
  },
  searchQuery: {
    fontWeight: 'bold',
  },
});
