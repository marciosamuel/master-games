import React, { useEffect, useMemo, useState } from 'react';
import { ActionsContainer, GamesContainer, Select } from './styles';
import CustomInput from '../components/CustomInput';
import ContentContainer from '../components/ContentContainer';
import GameCard from '../components/GameCard';
import { getAll } from '../requests';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [allGames, setAllGames] = useState(null);
  const [errors, setErrors] = useState(null);
  const [searchName, setSearchName] = useState('');
  const [sortOption, setSortOption] = useState('A-Z');
  const [category, setCategory] = useState('Categorias');
  const [platform, setPlatform] = useState('Plataformas');

  const sortedGames = useMemo(() => {
    if (allGames) {
      switch (sortOption) {
        case 'A-Z':
          return allGames.sort((a, b) => (a.title <= b.title ? -1 : 1));
        case 'Z-A':
          return allGames.sort((a, b) => (a.title >= b.title ? -1 : 1));
        case 'DATE (desc)':
          return allGames.sort((a, b) =>
            a.release_date <= b.release_date ? -1 : 1
          );
        case 'DATE (asc)':
          return allGames.sort((a, b) =>
            a.release_date >= b.release_date ? -1 : 1
          );
        default:
          return allGames;
      }
    }
    return [];
  }, [allGames, sortOption]);

  const matchedGames = useMemo(() => {
    if (searchName.length >= 3 && category !== 'Não selecionado') {
      return sortedGames
        .filter((game) =>
          game.title.toLowerCase().includes(searchName.toLowerCase())
        )
        .filter((game) => game.genre === category);
    }
    if (searchName.length >= 3)
      return sortedGames.filter((game) =>
        game.title.toLowerCase().includes(searchName.toLowerCase())
      );
    if (category !== 'Não selecionado') {
      return sortedGames.filter((game) => game.genre === category);
    }
    return sortedGames;
  }, [sortedGames, searchName, category, platform]);

  const categories = useMemo(() => {
    const categoryList = [];
    if (allGames) {
      allGames.forEach((game) => {
        const { genre } = game;
        if (!categoryList.includes(genre)) {
          categoryList.push(genre);
        }
      });
    }
    console.warn(categoryList);
    return categoryList;
  }, [allGames]);

  const platforms = useMemo(() => {
    const platformList = [];
    if (allGames) {
      allGames.forEach((game) => {
        const { platform } = game;
        if (!platformList.includes(platform)) {
          platformList.push(platform);
        }
      });
    }
    console.warn(platformList);
    return platformList;
  }, [allGames]);

  const getGames = async () => {
    await getAll()
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
    getGames();
  }, []);

  return (
    <ContentContainer actions>
      <ActionsContainer>
        <CustomInput
          label="Busque por nome"
          value={searchName}
          handleChange={setSearchName}
          type="text"
          error={searchName.length < 3 && searchName !== ''}
          errorMessage="Você precisa digitar pelo menos 3 caracteres"
        />
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="Não selecionado" hidden>
            Filtrar por categoria
          </option>
          {categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </Select>
      </ActionsContainer>

      {isLoading && <h3>Carregando...</h3>}
      {errors && <h3>Deu erro</h3>}
      {matchedGames && (
        <GamesContainer>
          {matchedGames.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </GamesContainer>
      )}
    </ContentContainer>
  );
}

export default Home;
