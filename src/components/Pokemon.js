import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPokemon } from "../services/pokemon";

const Pokemon = () => {
  const location = useLocation();
  const [currPokemon, setCurrPokemon] = useState([]);

  useEffect(() => {
    getPokemon(location.pathname).then((data) => {
      setCurrPokemon(data);
    });
  }, []);

  const { id, name, height, base_experience, weight } = currPokemon;

  return (
    <div>
      <h2>{name}</h2>
      <img
        className="card__img"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="pokemon-pic"
      />
      <ul>
        <li>Height: {height}</li>
        <li>Weight: {weight}</li>
        <li>Base XP:{base_experience}</li>
      </ul>
      <ul>
        Abilities:
        {currPokemon.abilities &&
          currPokemon.abilities.map((ability, index) => {
            return <li key={index}>{ability["ability"]["name"]}</li>;
          })}
      </ul>
      <ul>
        Stats:
        {currPokemon.stats &&
          currPokemon.stats.map((stat, index) => {
            return (
              <li key={index}>
                {stat["stat"]["name"]}:<span>{stat.base_stat}</span>
              </li>
            );
          })}
      </ul>
      <ul>
        Types:
        {currPokemon.types &&
          currPokemon.types.map((type, index) => {
            return <li key={index}>{type["type"]["name"]}</li>;
          })}
      </ul>
    </div>
  );
};

export default Pokemon;
