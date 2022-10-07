import { createStore, combineReducers, applyMiddleware,  compose, } from "redux";
// import thunk from "redux-thunk" 
import pokemons from "./pokemons";
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk];

const rootReducer = combineReducers({ pokemons: pokemons });

const configureStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(...middlewares)));
};

export default configureStore;
