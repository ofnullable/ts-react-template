import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Storage } from '../common';

export interface Colors {
  text: string;
  background: string;
  gray: string[];
  blue: string[];
  red: string[];
  yellow: string[];
}

interface ThemeContextType {
  colors: Colors;
  theme: 'light' | 'dark';
  isLight: boolean;
  toggleTheme: () => void;
}

const Context = createContext<ThemeContextType>({
  colors: {
    gray: [],
    blue: [],
    red: [],
    yellow: [],

    text: '#424242',
    background: '#f5f5f5',
  },
  theme: 'light',
  isLight: true,
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(Context);

const getPreferColor = (): 'light' | 'dark' => {
  const stored = Storage.get('theme');

  if (stored) return stored;

  if (!window.matchMedia) {
    Storage.set('theme', 'light');
    return 'light';
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    Storage.set('theme', 'dark');
    return 'dark';
  }

  Storage.set('theme', 'light');
  return 'light';
};

const light = {
  text: '#424242',
  background: '#f5f5f5',
  gray: ['#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121'],
  blue: ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1'],
  red: ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c'],
  yellow: [
    '#fffde7',
    '#fff9c4',
    '#fff59d',
    '#fff176',
    '#ffee58',
    '#ffeb3b',
    '#fdd835',
    '#fbc02d',
    '#f9a825',
    '#f57f17',
  ],
};

const dark = {
  text: '#f5f5f5',
  background: '#424242',
  gray: [...light.gray].reverse(),
  blue: [...light.blue].reverse(),
  red: [...light.red].reverse(),
  yellow: [...light.yellow].reverse(),
};

const themes = { light, dark };

interface ContextProps {
  children: React.ReactNode;
}

export default function ThemeContext({ children }: ContextProps) {
  const [theme, setTheme] = useState(getPreferColor());

  const isLight = useMemo(() => theme === 'light', [theme]);

  const colors = useMemo(() => themes[theme], [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      Storage.set('theme', newTheme);
      return newTheme;
    });
  }, []);

  return <Context.Provider value={{ colors, theme, isLight, toggleTheme }}>{children}</Context.Provider>;
}
