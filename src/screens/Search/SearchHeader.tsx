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
  const [showToSearch, setShowToSearch] = useState<string>('');
  const { goBack } = useNavigation();
  const dispatch = useDispatch();
  const searchQuery = useAppSelector(state => state.search.query);
  const { top } = useSafeAreaInsets();
  const handleClear = () => {
    setShowToSearch('');
    goBack();
  };

  const handleSearch = () => {
    dispatch(setQuery(showToSearch));
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
      </LinearGradient>
      <Text style={styles.searchingFor}>
        Results for <Text style={styles.searchQuery}>"{searchQuery}"</Text>
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
