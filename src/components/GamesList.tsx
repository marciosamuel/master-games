import React, { useMemo, useState } from 'react';
import { GamesListContainer, GamesWrapper } from './styles';
import GameCard, { FavoriteGameProps, GameProps } from './GameCard';
import CustomSelect from './CustomSelect';
import { MessageContainer } from '../pages/styles';

interface GamesListProps {
  values: GameProps[] | FavoriteGameProps[];
}

const GamesList: React.FC<GamesListProps> = (props) => {
  const { values: allGames } = props;
  const [sortOption, setSortOption] = useState<string>('Alfabética (A-Z)');

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

  if (sortedGames.length === 0)
    return (
      <MessageContainer>
        <h2>Nenhum resultado encontrado</h2>
        <p>
          Infelizmente não encontramos nenhum resultado para a busca
          especificada.
        </p>
      </MessageContainer>
    );

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
        isPersistent
      />
      <GamesWrapper>
        {sortedGames.map((game) => (
          <GameCard {...game} />
        ))}
      </GamesWrapper>
    </GamesListContainer>
  );
};

export default GamesList;
