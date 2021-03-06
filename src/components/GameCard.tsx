import React, { useContext, useMemo } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { FavoriteContext } from '../hooks';
import { Card } from './styles';
import FilledStar from '../assets/FilledStar.svg';
import EmptyStar from '../assets/EmptyStar.svg';

export interface GameProps {
  id: string;
  title: string;
  platform: string;
  genre: string;
  thumbnail: string;
  release_date: Date;
}

export interface FavoriteGameProps extends GameProps {
  tag?: string;
  rate?: number;
}

const GameCard: React.FC<FavoriteGameProps> = (props) => {
  const { path } = useRouteMatch();
  const {
    id,
    title,
    platform,
    genre,
    thumbnail,
    tag,
    rate,
    release_date: releaseDate,
  } = props;
  const { favorites, setFavorites } = useContext(FavoriteContext);
  const history = useHistory();

  const isFavorite = useMemo(() => {
    if (favorites) {
      return favorites.find((fav) => fav.id === id);
    }
    return false;
  }, [favorites]);

  const handleUpdateTag = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFavorites(
      favorites.map((fav) => {
        if (fav.id === id) {
          return { ...fav, tag: event.target.value };
        }
        return fav;
      })
    );
  };

  const handleAddFav = () => {
    setFavorites([
      ...favorites,
      {
        id,
        title,
        platform,
        genre,
        thumbnail,
        tag: 'Adicionar tag',
        rate: 0,
        release_date: releaseDate,
      },
    ]);
  };

  const handleRemoveFav = () => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
    history.go(0);
  };

  const handleSetRate = (index: number) => {
    setFavorites(
      favorites.map((fav) => {
        if (fav.id === id) {
          return {
            ...fav,
            rate: index === rate ? index - 1 : index,
          };
        }
        return fav;
      })
    );
  };

  return (
    <Card>
      <img src={thumbnail} alt="Capa do jogo" loading="lazy" />
      <h3 className="title">{title}</h3>
      <p className="info">
        {platform} - {genre}
      </p>
      {isFavorite ? (
        <button type="button" className="fav" onClick={handleRemoveFav}>
          Remover <MdFavorite />
        </button>
      ) : (
        <button type="button" className="fav" onClick={handleAddFav}>
          Favoritar <MdFavoriteBorder />
        </button>
      )}
      {path === '/favorites-list' && (
        <>
          <div className="rate">
            {[1, 2, 3, 4, 5].map((item) => (
              <img
                alt={`estrela ${item}`}
                src={rate && item <= rate ? FilledStar : EmptyStar}
                key={item}
                onClick={() => handleSetRate(item)}
              />
            ))}
          </div>
          <select value={tag} onChange={handleUpdateTag}>
            {['Adicionar tag', 'Joguei', 'Jogando', 'Quero Jogar'].map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </>
      )}
    </Card>
  );
};

export default GameCard;
