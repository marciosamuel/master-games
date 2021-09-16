import { createContext, useCallback, useState } from 'react';
import { FavoriteGameProps } from '../components/GameCard';

export function useLocalStorage<T>(
  key: string,
  initialValue?: T
): [T, (value: T) => void] {
  const [state, setState] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    },
    [key]
  );

  return [state, setValue];
}

export type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (value: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: () => {},
});

interface FavoriteContextProps {
  favorites: FavoriteGameProps[];
  setFavorites: (value: FavoriteGameProps[]) => void;
}

export const FavoriteContext = createContext<FavoriteContextProps>({
  favorites: [],
  setFavorites: () => {},
});
