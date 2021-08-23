import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  background: #313131;
  padding: 1rem 1rem;
  align-items: center;
  justify-content: center;
  position: relative;

  h1 {
    background: linear-gradient(45deg, var(--cyan), var(--blue));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Passero One, cursive;
    position: absolute;
    left: 1rem;

    &:not(:first-child) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      &:first-child {
        display: none;
      }

      &:not(:first-child) {
        display: block;
      }
    }
  }
`;

export const Links = styled.div`
  display: flex;
  column-gap: 1.5rem;
  font-size: 1rem;

  a {
    color: #c8c8c8;
    text-transform: uppercase;
    font-family: 'DejaVu Sans', serif;
    text-decoration: none;

    &:hover {
      color: #f2f2f2;
    }
  }

  .actual-page {
    color: #f2f2f2;
  }

  @media screen and (max-width: 768px) {
    column-gap: 1rem;
    font-size: 14px;
  }
`;

export const ToggleTheme = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 100%;
  position: absolute;
  right: 1rem;

  &.light-icon {
    color: var(--yellow);
  }

  &.dark-icon {
    color: var(--blue);
  }

  svg {
    height: 30px;
    width: 30px;
    border-radius: 100%;
    border: 1px solid #666;
  }

  &:active {
    transform: scale(0.95);
    transition: transform 0.2s linear;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
`;

export const Input = styled.div`
  background: ${(props) =>
    props.$isFocus
      ? 'linear-gradient(45deg, var(--cyan), var(--blue))'
      : 'var(--foreground)'};
  width: 280px;
  height: 2.5rem;
  padding: 2px;
  border-radius: 5px;
  position: relative;
  margin: 0.5rem;
  transition: background 0.2s linear;
  display: flex;

  svg {
    height: 100%;
    width: 50px;
    padding: 0.5rem;
    margin: auto;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    color: var(--primary-text);
    background: var(--foreground);
  }

  input {
    width: 100%;
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
    background-color: var(--foreground);
    outline: none;
    padding-right: 1.5rem;
    color: var(--primary-text);

    &::placeholder {
      color: var(--secondary-text);
    }
  }
`;

export const FiltersContainer = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  color: var(--secondary-text);
  font-family: 'Roboto', serif;

  h3 {
    margin: 0.5rem 0 1rem;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--foreground);
    }
  }
`;

export const Select = styled.div`
  display: flex;
  align-items: center;
  height: 2.5rem;
  font-size: 1rem;
  margin: 0.5rem 0;

  select {
    height: 100%;
    width: 100%;
    margin: auto 0;
    padding: 0 1rem;
    border: 2px solid var(--secondary-text);
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    background-color: var(--background);
    color: var(--secondary-text);

    &:focus {
      border-image: linear-gradient(45deg, var(--cyan), var(--blue)) 1;
    }

    option {
      color: var(--secondary-text);
    }
  }

  span {
    margin: 0 0.5rem;

    svg {
      width: 30px;
      height: 30px;
      color: var(--secondary-text);

      &:hover {
        color: orangered;
        transition: 0.2s;
      }
    }
  }
`;

export const GamesListContainer = styled.div`
  width: 100%;

  Select {
    width: 280px;
    margin-left: 0.5rem;

    @media screen and (max-width: 768px) {
      margin: auto;
    }
  }
`;

export const GamesWrapper = styled.section`
  width: auto;
  display: flex;
  min-height: 100%;
  flex-wrap: wrap;
  gap: 1rem;
  margin: auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 300px;
  font-family: 'Roboto', sans-serif;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-grow: 1;
  }

  img {
    width: 100%;
    border-radius: 5px;
    margin: 1rem 0;
  }

  h3 {
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--primary-text);
  }

  p {
    font-size: 14px;
    color: var(--secondary-text);
  }

  select {
    width: auto;
    padding: 2px 10px;
    border: 1px solid var(--secondary-text);
    border-radius: 5px;
    background: var(--background);
    color: var(--secondary-text);
    margin: 5px auto;
    font-size: 1rem;
  }

  .rate {
    margin: 5px auto;

    img {
      width: 25px;
      height: 25px;
      margin: 0 5px;

      &:hover {
        cursor: pointer;
        transform: scale(1.15);
      }
    }
  }

  .fav {
    position: absolute;
    right: 5px;
    top: 20px;
    border: none;
    display: flex;
    gap: 5px;
    background: #31313180;
    border-radius: 5px;
    padding: 0 5px;
    font-size: 18px;
    color: #dedede;

    svg {
      height: 1rem;
      width: 1rem;
      margin: auto;
      color: salmon;
    }

    &:hover {
      background: #313131;
      transform: scale(1.05);
      transition: transform 0.3s ease-in-out;
      cursor: pointer;
    }
  }
`;
