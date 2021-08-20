import React, { useState, useMemo, useEffect } from "react";
import { ActionsContainer, GamesContainer } from "../styles";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import ContentContainer from "../components/ContentContainer";
import { getAll } from "../requests";
import GameCard from "../components/GameCard";

function Home() {
  const [searchName, setSearchName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState(null);
  const [errors, setErrors] = useState(null);

  const getGames = async () => {
    await getAll()
      .then((r) => {
        const games = r.data.splice(0, 20);
        setGames(games);
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
      {games && (
        <GamesContainer>
          {games.map((game) => {
            return <GameCard key={game.id} {...game} />;
          })}
        </GamesContainer>
      )}
    </ContentContainer>
  );
}

export default Home;
