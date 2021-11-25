import React, { useState, useEffect } from "react";
import { getPokemons, getMorePokemons } from "../services/pokemons";
import PokemonCard from "../components/PokemonCard";
import Header from "../components/Header";

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  const morePokemons = () => {
    getMorePokemons(count + 19).then((data) => {
      setPokemons(data);
      setCount((prevCount) => {
        return prevCount + 20;
      });
    });
  };

  const lessPokemons = () => {
    getMorePokemons(count - 21).then((data) => {
      setPokemons(data);
      setCount((prevCount) => {
        return prevCount - 20;
      });
    });
  };

  return (
    <>
      <Header />
      <div className="cards">
        {Object.entries(pokemons)[3] &&
          Object.entries(pokemons)[3][1].map((pokemon, index) => {
            return <PokemonCard key={index} id={index + count} {...pokemon} />;
          })}
      </div>
      <div className="footer">
        <div className="btn" onClick={lessPokemons}>
          <h3 className="btn__text">Back</h3>
        </div>
        <div className="btn" onClick={morePokemons}>
          <h3 className="btn__text">Next</h3>
        </div>
      </div>
    </>
  );
};

export default AllPokemon;
