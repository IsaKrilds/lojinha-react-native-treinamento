import 'react-native-gesture-handler/jestSetup';

/* eslint-disable */

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('@react-navigation/native', () => {
  const ReactNavigation = jest.genMockFromModule('@react-navigation/native')
  const useNavigation = () => ({ navigate: jest.fn() });
  return { ...ReactNavigation, useNavigation };
})

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  
  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};
  
  return Reanimated;
});


// As of react-native@0.64.X file has moved
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

/* eslint-enable */
