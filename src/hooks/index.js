import { createContext, useCallback, useState } from 'react';

export const useLocalStorage = (key, initialValue = '') => {
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
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
};

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
});
