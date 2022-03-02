import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { getShowsByName } from '../../services/api/getShowsByName';

export const SearchHeader: FC<NativeStackHeaderProps> = () => {
  const [showToSearch, setShowToSearch] = useState<string>('');
  const { goBack } = useNavigation();

  const handleClear = () => {
    setShowToSearch('');
    goBack();
  };

  const handleSearch = () => {
    getShowsByName('rick');
  };

  return (
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

      <Icon name="clear" size={20} color="white" onPress={handleClear} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
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
    minWidth: 130,
  },
  inputContainer: {
    backgroundColor: 'grey',
    borderRadius: 8,
    padding: 8,
    height: 30,
    flexDirection: 'row',
  },
});
