import React, { useContext, useMemo, useState } from 'react';
import Filters, { FiltersProps } from '../components/Filters';
import { FavoriteGameProps } from '../components/GameCard';
import GamesList from '../components/GamesList';
import Header from '../components/Header';
import { FavoriteContext } from '../hooks';
import { ContentWrapper } from './styles';

const Favorites: React.FC = () => {
  document.title = 'Master Games - Favoritos';
  const { favorites } = useContext(FavoriteContext);
  const [sortedGames, setSortedGames] = useState<FavoriteGameProps[]>([]);
  const [filters, setFilters] = useState<FiltersProps>({});

  const filteredGames = useMemo(() => {
    const { category, platform } = filters;
    if (category) return sortedGames.filter((game) => game.genre === category);
    if (platform)
      return sortedGames.filter((game) => game.platform === platform);
    if (platform && category)
      return sortedGames.filter(
        (game) => game.platform === platform && game.genre === category
      );
    return sortedGames;
  }, [filters, sortedGames]);

  return (
    <>
      <Header />
      <ContentWrapper>
        <GamesList values={filteredGames} />
        <Filters
          values={favorites}
          handleChange={setSortedGames}
          setFilters={setFilters}
        />
      </ContentWrapper>
    </>
  );
};

export default Favorites;
