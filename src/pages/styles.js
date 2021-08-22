import styled from 'styled-components';

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

export const Select = styled.select`
  height: 2.5rem;
  margin: auto 0;
  padding: 0 1rem;
  border-radius: 20px;
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(45deg, var(--cyan), var(--blue)) 1;
  outline: none;
  cursor: pointer;
  background-color: var(--background);
  color: var(--secondary-text);
  font-size: 1rem;

  option {
    color: var(--secondary-text);
  }
`;
