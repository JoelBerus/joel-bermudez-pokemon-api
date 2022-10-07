import axios from "axios";

const url = "https://pokeapi.co/api/v2/";

export const getPokemonsService = () => {
  return axios.get(`${url}pokemon?offset=0&limit=10`);
};

export const getPokemon = (name) => {
  return axios.get(`${url}pokemon/${name}`);
}

export const getPagePokemonsService = (nextPage) => {
  return axios.get(nextPage);
}

export const getPokemonByUrlService = (url) => {
  return axios.get(url);
}
