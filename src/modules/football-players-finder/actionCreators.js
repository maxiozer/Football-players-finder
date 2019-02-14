import * as actionTypes from './actionTypes';
import axios from "axios";

const findPlayers = () => {
    return dispatch => {
        return axios.get("https://football-players-b31f2.firebaseio.com/players.json?print=pretty")
            .then(response => {
                let now = new Date();
                let res = response.data.map(player => {
                    let dateOfBirth = new Date(player.dateOfBirth);
                    return player = {
                        ...player,
                        age: now.getFullYear() - dateOfBirth.getFullYear(),
                    }
                })
                dispatch({
                    type: actionTypes.FIND_PLAYERS,
                    list: res
                })
            })
    }
}

const setFilters = (name, age, position) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SET_FILTERS,
            filters: {
                name,
                age,
                position
            }
        })
    }
}

export { findPlayers, setFilters };