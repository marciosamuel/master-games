import styled from 'styled-components';

export const ContentWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 51px);
  display: flex;
  padding: 1rem;
`;

export const MessageContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    color: var(--secondary-text);
    font-size: 2rem;
  }

  svg {
    width: 50px;
    height: 50px;
    color: var(--primary-text);
  }

  p {
    color: var(--secondary-text);
    font-size: 1.2rem;
  }
`;
