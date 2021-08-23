import React, { useEffect, useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import { BiErrorCircle } from 'react-icons/bi';
import Header from '../components/Header';
import { ContentWrapper, MessageContainer } from './styles';
import GamesList from '../components/GamesList';
import Filters from '../components/Filters';
import getGames from '../requests';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [allGames, setAllGames] = useState(null);
  const [errors, setErrors] = useState(null);
  const [sortedGames, setSortedGames] = useState(null);
  const [filters, setFilters] = useState({});

  const getAllGames = async () => {
    setIsLoading(true);
    await getGames(filters)
      .then((r) => {
        const games = r.data;
        setAllGames(games);
      })
      .catch((error) => {
        setErrors(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllGames();
  }, [filters]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <MessageContainer>
          <ImSpinner9 />
          <br />
          <h2>Buscando jogos</h2>
        </MessageContainer>
      );
    }
    if (errors) {
      return (
        <MessageContainer>
          <BiErrorCircle />
          <br />
          <h2>Ocorreu alguma falha na comunicação com o servidor</h2>
        </MessageContainer>
      );
    }
    return <GamesList values={sortedGames} />;
  };

  return (
    <>
      <Header />
      <ContentWrapper>
        {renderContent()}
        <Filters
          values={allGames}
          handleChange={setSortedGames}
          setFilters={setFilters}
        />
      </ContentWrapper>
    </>
  );
}
