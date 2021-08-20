import React, { useContext } from "react";
import { ThemeContext } from "../hooks";
import { Title, Subtitle, Line, Container } from "../styles";
import CustomButton from "./CustomButton";

function ContentContainer(props) {
  const { children } = props;
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Container>
      <CustomButton
        handleClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
        title={`Tema ${theme === "dark" ? "Escuro" : "Claro"}`}
        size="small"
      />
      <Title>Master Games</Title>
      <Subtitle>
        Bem vindo á nossa plataforma, navegue pelo nosso catálogo e explore os
        jogos disponíveis
      </Subtitle>
      <Line />
      {children}
    </Container>
  );
}

export default ContentContainer;
