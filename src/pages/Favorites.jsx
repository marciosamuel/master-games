import React from 'react';
import Header from '../components/Header';
import { ContentWrapper } from './styles';

export default function Favorites() {
  return (
    <>
      <Header path="home" />
      <ContentWrapper>
        <h1>Meus Fav</h1>
      </ContentWrapper>
    </>
  );
}
