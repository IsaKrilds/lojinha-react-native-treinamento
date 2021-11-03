import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    black: '#000',
    white: '#fff',
    softWhite: '#f4f4f4',
    lightGrey: '#a5a5a5',
    darkGrey: '#111111',
  },
  spacing: (value: number) => {
    return value * 8;
  },
};
