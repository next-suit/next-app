import {extendTheme} from "native-base";

const nativeBaseTheme = extendTheme({
    config: {
      useSystemColorMode: false,  // 不自动检测主题
      initialColorMode: 'light',  // light/dark

    },
    colors: {
      primary: {
        500: '#50B4D0', // 主题色
      },
    },
  });

export default nativeBaseTheme;
