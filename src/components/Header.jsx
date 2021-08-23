import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { BsMoon, BsSun } from 'react-icons/all';
import { HeaderContainer, Links, ToggleTheme } from './styles';
import { ThemeContext } from '../hooks';

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { path } = useRouteMatch();
  return (
    <HeaderContainer>
      <h1>Master Games</h1>
      <h1>MG</h1>
      <Links>
        <Link to="/" className={path === '/' && 'actual-page'}>
          Home
        </Link>
        <Link
          to="/favorites-list"
          className={path === '/favorites-list' && 'actual-page'}
        >
          Favoritos
        </Link>
      </Links>
      {theme === 'light' && (
        <ToggleTheme className="light-icon" onClick={() => setTheme('dark')}>
          <BsSun />
        </ToggleTheme>
      )}
      {theme === 'dark' && (
        <ToggleTheme className="dark-icon" onClick={() => setTheme('light')}>
          <BsMoon />
        </ToggleTheme>
      )}
    </HeaderContainer>
  );
}
