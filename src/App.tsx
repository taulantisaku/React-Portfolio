import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Intro } from "./components/Intro/Intro";
import { ProdutctsList } from "./components/ProductsList/ProdutctsList";
import { Toggle } from "./components/toggle/Toggle";

const App = () => {
  return (
    <div>
      <Toggle />
      <Intro />
      <About />
      <ProdutctsList />
      <Contact />
    </div>
  );
};

export default App;
