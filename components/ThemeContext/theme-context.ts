import React from "react";

export enum themes {
    light = 'light',
    dark = 'dark',
  };
  
  export const ThemeContext = React.createContext({
    theme:themes.dark,
    toggleTheme: () => {}
  });