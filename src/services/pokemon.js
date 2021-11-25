const URL = "https://pokeapi.co/api/v2";

export const getPokemon = (pathname) => {
  return fetch(`${URL}${pathname}`).then((response) => response.json());
};
