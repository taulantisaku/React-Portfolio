import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Intro } from "./components/Intro/Intro";
import { ProdutctsList } from "./components/ProductsList/ProdutctsList";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProdutctsList />
      <Contact />
    </div>
  );
};

export default App;
