import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './themes';

interface GlobalStyleProps {
  theme: ThemeProps;
}

export default createGlobalStyle<GlobalStyleProps>`
  :root {
    --primary-text: ${(props) => props.theme.primaryText};
    --secondary-text: ${(props) => props.theme.secondaryText};
    --background: ${(props) => props.theme.background};
    --foreground: ${(props) => props.theme.foreground};
    --cyan: #02d2e2;
    --blue: #4f61ba;
    --yellow: #ebce09;
    --orange: #e67a0e;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--background);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--foreground);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--foreground);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color .5s linear,  color .5s linear;
  }

  html {
    height: 100%;
    width: 100%;
    background-color: var(--background);
  }

  p, button, input, div, select, li, span, small {
    font-family: "Roboto", sans-serif;
  }
`;
