import { createSelector } from "reselect";

export const getPlayers = createSelector(
    (state) => state.players.list,
    (state) => state.players.filters,
    (players, filters) => {
        const response = players.filter(player => {
            return !filters.name || player.name === filters.name
        }).filter(player => {
            return !filters.age || parseInt(player.age) === parseInt(filters.age)
        }).filter(player => {
            return !filters.position || player.position === filters.position
        });
        return response;
    }
);

export const getPositions = createSelector(
    state => state.players.positions,
    (position) => { return position }
);
