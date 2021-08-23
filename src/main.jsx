import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FavoriteContext, ThemeContext, useLocalStorage } from './hooks';
import GlobalStyles from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/themes';
import Routes from './routes';

function App() {
  const [theme, setTheme] = useLocalStorage('THEME', 'dark');
  const [favorites, setFavorites] = useLocalStorage('FAVORITES', []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <FavoriteContext.Provider value={{ favorites, setFavorites }}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles theme={theme === 'dark' ? darkTheme : lightTheme} />
      </FavoriteContext.Provider>
    </ThemeContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
