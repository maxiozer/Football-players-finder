
const initialState = {
    filters: {
        position: "",
        age: "",
        name: ""
    },
    list: [],
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
}

const players = (state = initialState, action) => {

    switch (action.type) {
        case "FIND_PLAYERS":
            return {
                ...state,
                list: action.list
            }
            
        case "SET_FILTERS":
            return {
                ...state,
                filters: action.filters
            }


        default: return state;

    }

}

export default players;