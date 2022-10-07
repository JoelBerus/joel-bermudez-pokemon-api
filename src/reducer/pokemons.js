import { CONSTANTS } from "../utils";

const initialState = {
  pokemonList: [],
  loading: false,
  loadindPokemon: false,
  nextPage: "",
  prevPage: "",
  count: 0,
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_POKEMONS:
      return {
        ...state,
        pokemonList: action.payload,
      };
    case CONSTANTS.GET_POKEMONS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case CONSTANTS.GET_NEXT_PAGE_POKEMONS:
      return {
        ...state,
        nextPage: action.payload,
      };
    case CONSTANTS.GET_PREV_PAGE_POKEMONS:
      return {
        ...state,
        prevPage: action.payload,
      };
    case CONSTANTS.GET_COUNT_POKEMONS:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
export default pokemons;
