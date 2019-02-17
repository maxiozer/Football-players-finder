import { getPlayers, getPositions } from "../selectors";
import configureStore from "redux-mock-store";
import { ExpansionPanelActions } from "@material-ui/core";
const mockStore = configureStore();

it("test players selector", () => {

    const state = {
        players: {
            list: [{
                "contractUntil": "2022-06-30",
                "dateOfBirth": "1993-05-13",
                "jerseyNumber": 9,
                "name": "Romelu Lukaku",
                "nationality": "Belgium",
                "position": "Centre-Forward",
                "age": 32
            }, {
                "contractUntil": "2019-06-30",
                "dateOfBirth": "1990-11-07",
                "jerseyNumber": 1,
                "name": "David de Gea",
                "nationality": "Spain",
                "position": "Centre-Forward",
                "age": 32
            }],
            filters: { age: 32, name: "Romelu Lukaku", position: "Centre-Forward" }
        }
    }

    expect(getPlayers(state)).toEqual([state.players.list[0]]);

});

it("test positions selector", () => {
    const state = {
        players: {
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
    }

    expect(getPositions(state)).toEqual(state.players.positions);

});
