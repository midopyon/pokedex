import AllPokemon from "./containers/AllPokemon";
import Pokemon from "./components/Pokemon";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<AllPokemon />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
    </div>
  );
};

export default App;
