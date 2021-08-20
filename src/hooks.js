import React, { useCallback, useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue = "") => {
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
        console.log(error);
      }
    },
    [key]
  );

  return [state, setValue];
};

export const ThemeContext = React.createContext({
  theme: "light",
  setTheme: () => {},
});
