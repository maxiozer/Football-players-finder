import {createStore} from "redux";

const reducer = (state, action) => {
    return state;
}

export default createStore(reducer, {
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
});
