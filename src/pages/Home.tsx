import React, { useEffect, useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import { BiErrorCircle } from 'react-icons/bi';
import Header from '../components/Header';
import { ContentWrapper, MessageContainer } from './styles';
import GamesList from '../components/GamesList';
import Filters, { FiltersProps } from '../components/Filters';
import getGames from '../requests';
import { GameProps } from '../components/GameCard';

const Home: React.FC = () => {
  document.title = 'Master Games - Página Inicial';
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allGames, setAllGames] = useState<GameProps[]>([]);
  const [errors, setErrors] = useState(null);
  const [sortedGames, setSortedGames] = useState<GameProps[]>([]);
  const [filters, setFilters] = useState<FiltersProps>({});

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
};

export default Home;
