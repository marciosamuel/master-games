import React, { useMemo, useState } from 'react';
import { GamesListContainer, GamesWrapper } from './styles';
import GameCard from './GameCard';
import CustomSelect from './CustomSelect';

export default function GamesList(props) {
  const { values: allGames } = props;
  const [sortOption, setSortOption] = useState('Alfabética (A-Z)');

  const sortedGames = useMemo(() => {
    if (allGames) {
      switch (sortOption) {
        case 'Alfabética (A-Z)':
          return allGames.sort((a, b) => (a.title <= b.title ? -1 : 1));
        case 'Alfabética (Z-A)':
          return allGames.sort((a, b) => (a.title >= b.title ? -1 : 1));
        case 'Lançamento (Antigos)':
          return allGames.sort((a, b) =>
            a.release_date <= b.release_date ? -1 : 1
          );
        case 'Lançamento (Novos)':
          return allGames.sort((a, b) =>
            a.release_date >= b.release_date ? -1 : 1
          );
        default:
          return allGames;
      }
    }
    return [];
  }, [allGames, sortOption]);

  return (
    <GamesListContainer>
      <CustomSelect
        value={sortOption}
        handleChange={setSortOption}
        options={[
          'Alfabética (A-Z)',
          'Alfabética (Z-A)',
          'Lançamento (Novos)',
          'Lançamento (Antigos)',
        ]}
        noClear
      />
      <GamesWrapper>
        {sortedGames.map((game) => (
          <GameCard {...game} />
        ))}
      </GamesWrapper>
    </GamesListContainer>
  );
}
