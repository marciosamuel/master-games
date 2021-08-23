import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { ContentWrapper } from './styles';
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
      return <h1>Carregando...</h1>;
    }
    if (errors) {
      return <h1>Erro!!!</h1>;
    }
    if (allGames) {
      return <GamesList values={sortedGames} />;
    }
  };

  return (
    <>
      <Header path="home" />
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
