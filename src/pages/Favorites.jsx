import React, { useContext, useMemo, useState } from 'react';
import Filters from '../components/Filters';
import GamesList from '../components/GamesList';
import Header from '../components/Header';
import { FavoriteContext } from '../hooks';
import { ContentWrapper } from './styles';

export default function Favorites() {
  document.title = 'Master Games - Favoritos';
  const { favorites } = useContext(FavoriteContext);
  const [sortedGames, setSortedGames] = useState();
  const [filters, setFilters] = useState({});

  const filteredGames = useMemo(() => {
    const { category, platform } = filters;
    if (category) return sortedGames.filter((game) => game.genre === category);
    if (platform)
      return sortedGames.filter((game) => game.platform === platform);
    if (platform && category)
      return sortedGames.filter(
        (game) => game.platform === platform && game.category === category
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
}
