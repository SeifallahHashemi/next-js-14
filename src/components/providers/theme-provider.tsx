"use client"
import React from 'react';
import {ThemeProviderProps} from "next-themes/dist/types";
import {ThemeProvider as NextThemesProvider} from "next-themes/"

const ThemeProvider:React.FC<ThemeProviderProps> = ({ children, ...props}) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
};

export default ThemeProvider;