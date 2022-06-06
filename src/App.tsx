import { About } from "./components/About/About";
import { Intro } from "./components/Intro/Intro";
import { ProdutctsList } from "./components/ProductsList/ProdutctsList";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProdutctsList />
    </div>
  );
};

export default App;
