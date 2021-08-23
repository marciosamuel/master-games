import React, { useEffect, useMemo, useState } from 'react';
import { ActionsWrapper, FiltersContainer } from './styles';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

export default function Filters(props) {
  const { values, handleChange, setFilters } = props;
  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState('nao-selecionado');
  const [platform, setPlatform] = useState('nao-selecionado');

  const matchedGames = useMemo(() => {
    if (searchValue && values) {
      return values.filter((game) =>
        game.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    return values;
  }, [values, searchValue]);

  useEffect(() => {
    handleChange(matchedGames);
  }, [matchedGames]);

  useEffect(() => {
    if (category !== 'nao-selecionado') {
      setFilters({
        category,
      });
    } else if (platform !== 'nao-selecionado') {
      setFilters({
        platform,
      });
    } else if (
      category !== 'nao-selecionado' &&
      platform !== 'nao-selecionado'
    ) {
      setFilters({
        platform,
        category,
      });
    } else {
      setFilters({});
    }
  }, [platform, category]);

  const categories = [
    'mmorpg',
    'shooter',
    'strategy',
    'moba',
    'racing',
    'sports',
    'social',
    'sandbox',
    'open-world',
    'survival',
    'pvp',
    'pve',
    'pixel',
    'voxel',
    'zombie',
    'turn-based',
    'first-person',
    'third-Person',
    'top-down',
    'tank',
    'space',
    'sailing',
    'side-scroller',
    'superhero',
    'permadeath',
    'card',
    'battle-royale',
    'mmo',
    'mmofps',
    'mmotps',
    '3d',
    '2d',
    'anime',
    'fantasy',
    'sci-fi',
    'fighting',
    'action-rpg',
    'action',
    'military',
    'martial-arts',
    'flight',
    'low-spec',
    'tower-defense',
    'horror',
    'mmorts',
  ];

  const platforms = ['pc', 'browser', 'all'];

  return (
    <ActionsWrapper>
      <CustomInput
        value={searchValue}
        handleChange={setSearchValue}
        label="Procurar"
      />
      <FiltersContainer>
        <h3>Filtros</h3>
        <CustomSelect
          label="Categoria"
          value={category}
          handleChange={setCategory}
          options={categories}
        />
        <CustomSelect
          label="Plataforma"
          value={platform}
          handleChange={setPlatform}
          options={platforms}
        />
      </FiltersContainer>
    </ActionsWrapper>
  );
}
