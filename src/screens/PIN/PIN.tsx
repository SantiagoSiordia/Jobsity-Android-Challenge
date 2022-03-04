import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SCREENS } from '@screens';
import { storePIN, usePIN } from '@services';
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchID from 'react-native-touch-id';
import Icon from 'react-native-vector-icons/Entypo';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NumberButton } from './NumberButton';

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: true, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

export const PIN: FC = () => {
  const { top } = useSafeAreaInsets();

  const [pin, setPin] = useState<string>('');

  const { data: storedPIN } = usePIN();

  const navigation = useNavigation<StackNavigationProp<any>>();

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    if (pin.length === 4) {
      if (storedPIN !== null) {
        if (pin === storedPIN) {
          navigation.replace(SCREENS.SERIES_LIST);
        }
      } else {
        storePIN(pin);
        navigation.replace(SCREENS.SERIES_LIST);
      }
    }
  }, [navigation, pin, storedPIN]);

  const handleOnNumberPress = (num: number) => {
    if (pin.length < 4) {
      setPin(prev => prev + num);
    }
  };

  const handleOnErase = () => setPin(prev => prev.slice(0, prev.length - 1));

  const handleOnActivateBiometrics = () => {
    TouchID.isSupported()
      .then(biometryType => {
        TouchID.authenticate('Authenticate', optionalConfigObject)
          .then(() => {
            navigation.replace(SCREENS.SERIES_LIST);
          })
          .catch(error => {
            console.log('Authentication Failed', error.toString());
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View
      style={StyleSheet.flatten([styles.container, { paddingTop: top + 16 }])}>
      <Text style={styles.PINText}>
        {storedPIN === null ? 'Create PIN' : 'PIN'}
      </Text>
      <View style={styles.PINContainer}>
        {[1, 2, 3, 4].map(element => (
          <View
            key={'pin-circle-' + element}
            style={pin.length >= element ? styles.fullDot : styles.emptyDot}
          />
        ))}
      </View>
      <View style={styles.blackBox}>
        <View style={styles.numberPad}>
          {numbers.map(num => (
            <NumberButton
              disabled={pin.length === 4}
              key={'number-' + num}
              number={num}
              onPress={() => handleOnNumberPress(num)}
            />
          ))}
          <View style={styles.zeroEraseContainer}>
            <View style={styles.iconContainer}>
              <MCIcon
                color="white"
                name="face-recognition"
                onPress={handleOnActivateBiometrics}
                size={48}
              />
            </View>
            <NumberButton
              disabled={pin.length === 4}
              key={'number-' + 0}
              number={0}
              onPress={() => handleOnNumberPress(0)}
            />
            <View style={styles.iconContainer}>
              <Icon
                color="white"
                name="erase"
                onPress={handleOnErase}
                size={48}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blackBox: {
    flex: 1,
    backgroundColor: 'black',
    borderTopRightRadius: 48,
    borderTopLeftRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  PINText: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emptyDot: {
    borderWidth: 3,
    borderColor: 'black',
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  PINContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '50%',
    alignSelf: 'center',
    marginVertical: 48,
  },
  fullDot: {
    backgroundColor: 'black',
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  zeroEraseContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 32,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
});
