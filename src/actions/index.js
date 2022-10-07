import {
  getPokemonsService,
  getPokemonByUrlService,
  getPagePokemonsService,
} from "../services/index";
import { CONSTANTS } from "../utils";

export default () => {
  return async (dispatch, getState) => {
    dispatch({ type: CONSTANTS.GET_POKEMONS_LOADING, payload: true });
    const pokemons = await getPokemonsService()
      .then(response => {
        const { data, status } = response;
        if (status === 200) {
          const pokemonsData = data.results;
          dispatch({
            type: CONSTANTS.GET_NEXT_PAGE_POKEMONS,
            payload: data.next != "" ? data.next : null,
          });
          dispatch({
            type: CONSTANTS.GET_PREV_PAGE_POKEMONS,
            payload: data.previous != "" ? data.previous : null,
          });
          dispatch({
            type: CONSTANTS.GET_COUNT_POKEMONS,
            payload: data.results.length != "" ? data.results.length : 0,
          });
          dispatch(getPokemonInfo(pokemonsData));
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        dispatch({ type: CONSTANTS.GET_POKEMONS_LOADING, payload: false });
      });
  };
};

export const getPokemonInfo = (pokemons = []) => {
  return async dispatch => {
    const pokemonsInfoPromise = pokemons.map(async pokemon => {
      const pokemonInfo = await getPokemonByUrlService(pokemon.url)
        .then(response => {
          const { data, status } = response;
          if (status === 200) {
            return data;
          }
        })
        .catch(error => {
          console.log(error);
        });
      return pokemonInfo;
    });
    const pokemonsInfo = await Promise.all(pokemonsInfoPromise);
    dispatch({ type: "GET_POKEMONS", payload: pokemonsInfo });
  };
};

export const getPagePokemons = (type = CONSTANTS.NEXT) => {
  return async (dispatch, getState) => {
    const { nextPage, prevPage } = getState().pokemons;
    dispatch({ type: CONSTANTS.GET_POKEMONS_LOADING, payload: true });
    const pokemons = await getPagePokemonsService(
      type === CONSTANTS.NEXT ? nextPage : prevPage
    )
      .then(response => {
        const { data, status } = response;
        if (status === 200) {
          const pokemonsData = data.results;
          dispatch({
            type: CONSTANTS.GET_NEXT_PAGE_POKEMONS,
            payload: data.next != "" ? data.next : null,
          });
          dispatch({
            type: CONSTANTS.GET_PREV_PAGE_POKEMONS,
            payload: data.previous != "" ? data.previous : null,
          });
          dispatch({
            type: CONSTANTS.GET_COUNT_POKEMONS,
            payload: data.results.length != "" ? data.results.length : 0,
          });
          dispatch(getPokemonInfo(pokemonsData));
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        dispatch({ type: CONSTANTS.GET_POKEMONS_LOADING, payload: false });
      });
  };
};