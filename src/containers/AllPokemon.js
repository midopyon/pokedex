import React, { useState, useEffect } from "react";
import { getPokemons } from "../services/pokemons";
import PokemonCard from "../components/PokemonCard";

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  return (
    <div className="cards">
      {Object.entries(pokemons)[3] &&
        Object.entries(pokemons)[3][1].map((pokemon, index) => {
          return <PokemonCard key={index} id={index + 1} {...pokemon} />;
        })}
    </div>
  );
};

export default AllPokemon;
