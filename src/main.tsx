import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FavoriteContext, Theme, ThemeContext, useLocalStorage } from './hooks';
import GlobalStyles from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/themes';
import Routes from './routes';
import { FavoriteGameProps } from './components/GameCard';

const App: React.FC = () => {
  const [theme, setTheme] = useLocalStorage<Theme>('THEME', 'dark');
  const [favorites, setFavorites] = useLocalStorage<FavoriteGameProps[]>(
    'FAVORITES',
    []
  );

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
};

ReactDOM.render(<App />, document.getElementById('root'));
