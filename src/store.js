import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer = (state, action) => {
    switch (action.type) {
        case "FIND_PLAYERS":
            return {
                ...state,
                players: action.players
            }

        case "SET_FILTERS":
            return {
                ...state,
                filters: action.filters
            }
            
        default: return state;
    }

}

const initialState = {
    filters: {
        position: "",
        age: "",
        name: ""
    },
    players: [],
    positions: [
        'Attacking Midfield',
        'Central Midfield',
        'Centre-Back',
        'Centre-Forward',
        'Defensive Midfield',
        'Keeper',
        'Left Midfield',
        'Left Wing',
        'Left-Back',
        'Right-Back'
    ]
};

export default createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
);
