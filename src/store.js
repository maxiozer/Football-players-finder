import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import players from "./football-players-finder/reducer";

export default createStore(
    combineReducers({ players }),
    applyMiddleware(thunk)
);
