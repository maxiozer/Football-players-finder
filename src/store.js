import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import players from "./modules/football-players-finder";

export default createStore(
    combineReducers({ players: players.reducer }),
    applyMiddleware(thunk)
);
