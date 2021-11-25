import React from "react";

const PokemonCard = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        alt="pokemon img"
      ></img>
    </div>
  );
};

export default PokemonCard;
