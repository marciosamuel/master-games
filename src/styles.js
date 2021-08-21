import styled, { createGlobalStyle } from "styled-components";

export const darkTheme = {
  primaryText: "#f5f5f5",
  secondaryText: "#dedede",
  background: "#3d3d3d",
  foreground: "#585858",
};

export const lightTheme = {
  primaryText: "#3d3d3d",
  secondaryText: "#585858",
  background: "#f5f5f5",
  foreground: "#dedede",
};

export default createGlobalStyle`
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
  margin:0;
  padding: 0;
  box-sizing: border-box;
  transition: background-color .5s linear;
  transition: color .5s linear;
}

html {
  height: 100%;
  width: 100%;
  background-color: var(--background);
}

p, button, input, div, select, li {
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
}
`;

export const Container = styled.div`
  width: 95%;
  padding: 1rem;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: var(--primary-text);
  text-align: center;
  font-family: "Passero One", cursive;
  font-size: 3rem;
  margin: 1rem 0;
`;

export const Subtitle = styled.h2`
  color: var(--secondary-text);
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const Line = styled.hr`
  border: 1px solid var(--foreground);
  width: 90%;
  margin: 1rem auto;
`;

export const ActionsContainer = styled.nav`
  width: 90%;
  margin: 1rem auto;
  height: 75px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .search-game {
    width: auto;
    display: flex;
  }
`;

export const Input = styled.div`
  background: linear-gradient(45deg, var(--cyan), var(--blue));
  width: 320px;
  height: 2.5rem;
  padding: 2px;
  border-radius: 20px;
  position: relative;
  margin: auto 0.5rem;

  @media screen and (max-width: 768px) {
    width: 200px;
  }

  input {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: none;
    background-color: var(--background);
    outline: none;
    padding: 0 1.5rem;
    color: var(--secondary-text);

    &::placeholder {
      color: var(--secondary-text);
    }
  }

  @keyframes goUp {
    from {
      transform: translateY(25px) scale(0.5);
      opacity: 0.5;
    }
    to {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }

  .placeholder {
    color: var(--secondary-text);
    position: absolute;
    height: 1rem;
    font-size: 1rem;
    font-weight: 400;
    top: -1.5rem;
    left: 1.5rem;
    margin: unset;
    animation-name: goUp;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
    font-family: "Roboto", sans-serif;
  }

  small {
    color: var(--secondary-text);
    margin-left: 1rem;
  }
`;

export const Button = styled.button`
  width: ${(props) => (props.size === "small" ? "100px" : "200px")};
  height: 2.5rem;
  margin: auto 0.5rem;
  border-radius: 20px;
  border: none;
  background: linear-gradient(45deg, var(--cyan), var(--blue));
  outline: none;
  color: whitesmoke;
  font-size: 1rem;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    background: var(--foreground);
    color: var(--secondary-text);
  }

  &:active {
    transform: scale(0.95);
    transition: transform 0.2s linear;
  }
`;

export const GamesContainer = styled.main`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 320px;
  padding: 1rem;
  background-color: var(--foreground);
  border-radius: 22px;
  color: var(--secondary-text);
  text-align: center;
  border: 3px solid transparent;
  transition: box-shadow 0.3s linear;

  @media screen and (max-width: 768px) {
    width: 200px;
  }

  &:hover {
    box-shadow: 0px 0px 2px 2px var(--secondary-text);
    cursor: pointer;
  }

  .title {
    color: var(--primary-text);
    font-size: 1.5rem;
    margin: 8px 0;
  }

  .info {
    font-size: 1.2rem;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 500px;
    max-height: 300px;
    margin: 0.5rem auto;
    border-radius: 22px;
  }

  .rating {
    margin: 0 auto;
    width: 100%;

    img {
      width: 35px;
      height: auto;
      margin: 8px 5px;
      cursor: pointer;
      &:hover {
        transform: scale(1.15);
      }
    }
  }

  .clear-rate {
    width: 100%;
    text-align: center;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
