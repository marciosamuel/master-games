import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext, useLocalStorage } from './hooks';
import GlobalStyles from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/themes';
import Routes from './routes';

function App() {
  const [theme, setTheme] = useLocalStorage('THEME', 'dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles theme={theme === 'dark' ? darkTheme : lightTheme} />
    </ThemeContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
