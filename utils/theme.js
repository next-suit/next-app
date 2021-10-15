import {extendTheme} from "native-base";
import {DarkTheme} from "@react-navigation/native";

const primary = '#0DB393';
const second =  '#50c4a9';
const secondTransparent = 'rgba(255,255,255, 0.28)';
const danger = '#FE6666';
const dark = '#161F27';
const darkSecond = '#27323B';

export const tailwindTheme = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary,
        second,
        'second-transparent': secondTransparent,
        danger,
        dark,
        'dark-second': darkSecond,
      },
      margin: {
        '1': '1px',
      }
    },
  },
};

export const nativeBaseTheme = extendTheme({
  config: {
    useSystemColorMode: false,  // 是否自动检测主题
    initialColorMode: 'dark',  // light/dark

  },
  colors: {
    primary: {
      500: primary,
    },
  },
});


export const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary,
    background: darkSecond,
    card: dark,
  },
};
