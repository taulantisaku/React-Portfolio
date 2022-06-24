import { useContext } from "react";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Intro } from "./components/Intro/Intro";
import { ProdutctsList } from "./components/ProductsList/ProdutctsList";
import { Toggle } from "./components/toggle/Toggle";
import { ThemeContext } from "./lib/context/ThemeContext";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProdutctsList />
      <Contact />
    </div>
  );
};

export default App;
