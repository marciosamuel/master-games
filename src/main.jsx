import React from "react";
import ReactDOM from "react-dom";
import { useLocalStorage, ThemeContext } from "./hooks";
import GlobalStyles, { lightTheme, darkTheme } from "./styles";
import Routes from "./routes";

function App() {
  const [theme, setTheme] = useLocalStorage("THEME", "dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes />
      <GlobalStyles theme={theme === "dark" ? darkTheme : lightTheme} />
    </ThemeContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
