module.exports = {
  preset: 'react-native',
  setupFiles: ['./src/utils/tests/setup-test.js'],
  moduleFileExtensions: ['d.tsx', 'ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons|@react-native-community/datetimepicker|react-native-paper|react-native-iphone-x-helper)/)',
  ],
};
