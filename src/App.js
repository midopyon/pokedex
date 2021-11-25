import AllPokemon from "./containers/AllPokemon";
import Pokemon from "./components/Pokemon";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/" element={<AllPokemon />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
