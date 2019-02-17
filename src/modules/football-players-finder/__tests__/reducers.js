import players from "../reducer";
import * as actionTypes from "../actionTypes";

it("find players", () => {
    const playerlist = [{
        "contractUntil": "2022-06-30",
        "dateOfBirth": "1993-05-13",
        "jerseyNumber": 9,
        "name": "Romelu Lukaku",
        "nationality": "Belgium",
        "position": "Centre-Forward"
    }];

    expect(
        players([], { type: actionTypes.FIND_PLAYERS, list: playerlist }
        )
    ).toEqual({ list: playerlist });
});

it("set filters", () => {
    const filtersTest = { age: 32, name: "Romelu Lukaku", position: "Centre-Forward" }

    expect(
        players([], { type: actionTypes.SET_FILTERS, filters: filtersTest }
        )
    ).toEqual({ filters: filtersTest });
});