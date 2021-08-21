import React, { useState, useMemo, useEffect } from "react";
import { ActionsContainer, GamesContainer } from "../styles";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import ContentContainer from "../components/ContentContainer";
import { getAll } from "../requests";
import GameCard from "../components/GameCard";

function Home() {
  document.title = "Master Games - Página incial";

  const [searchName, setSearchName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("A-Z");
  const [allGames, setAllGames] = useState(null);
  const [errors, setErrors] = useState(null);

  const sortedGames = useMemo(() => {
    if (allGames) {
      switch (sortOption) {
        case "A-Z":
          return allGames.sort((a, b) => (a.title <= b.title ? -1 : 1));
        case "Z-A":
          return allGames.sort((a, b) => (a.title >= b.title ? -1 : 1));
        case "DATE (desc)":
          return allGames.sort((a, b) =>
            a.release_date <= b.release_date ? -1 : 1
          );
        case "DATE (asc)":
          return allGames.sort((a, b) =>
            a.release_date >= b.release_date ? -1 : 1
          );
        default:
          allGames;
      }
    }
    return [];
  }, [allGames, sortOption]);

  const matchedGames = useMemo(() => {
    if (searchName.length >= 3)
      return sortedGames.filter((game) => {
        return game.title.toLowerCase().includes(searchName.toLowerCase());
      });
    return sortedGames;
  }, [sortedGames, searchName]);

  const categories = useMemo(() => {
    const categoryList = [];
    if (matchedGames) {
      matchedGames.forEach((game) => {
        const { genre } = game;
        if (!categoryList.includes(genre)) {
          categoryList.push(genre);
        }
      });
    }
    console.warn(categoryList);
    return categoryList;
  }, [matchedGames]);

  const platforms = useMemo(() => {
    const platformList = [];
    if (matchedGames) {
      matchedGames.forEach((game) => {
        const { platform } = game;
        if (!platformList.includes(platform)) {
          platformList.push(platform);
        }
      });
    }
    console.warn(platformList);
    return platformList;
  }, [matchedGames]);

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
        <div className="search-game">
          <CustomInput
            label="Busque por nome"
            value={searchName}
            handleChange={setSearchName}
            type="text"
            error={searchName.length < 3 && searchName !== ""}
            errorMessage="Você precisa digitar pelo menos 3 caracteres"
          />
          <CustomButton
            title="Buscar"
            size="small"
            handleClick={() => console.log("hello!")}
            disabled={searchName.length < 3 || searchName === ""}
          />
        </div>
      </ActionsContainer>

      {isLoading && <h3>Carregando...</h3>}
      {errors && <h3>Deu erro</h3>}
      {matchedGames && (
        <GamesContainer>
          {matchedGames.map((game) => {
            return <GameCard key={game.id} {...game} />;
          })}
        </GamesContainer>
      )}
    </ContentContainer>
  );
}

export default Home;
