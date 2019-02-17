import { setFilters, findPlayers } from "../actionCreators";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actionTypes from '../actionTypes';

const mockStore = configureStore([thunk]);

beforeEach(() => moxios.install());
afterEach(() => moxios.uninstall());

it("findPlayers", () => {
    const store = mockStore({
        players: {
            list: []
        }
    });

    moxios.stubRequest("https://football-players-b31f2.firebaseio.com/players.json?print=pretty", {
        status: 200,
        response: [
            [{
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
                "age": 32
            }]
        ]
    });

    return store.dispatch(findPlayers())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toBe(actionTypes.FIND_PLAYERS);
            expect(actions[0].list[0]["0"].name).toBe("Romelu Lukaku");
            expect(actions[0].list[0]["1"].name).toBe("David de Gea");

        })
});

it("set filters", () => {
    const store = mockStore({
        players: {
            filters: { age: 0, name: "", position: "" }
        }
    });

    store.dispatch(setFilters("Romelu Lukaku", 32, "Centre-Forward"));

    const actions = store.getActions();
    expect(actions[0].type).toBe(actionTypes.SET_FILTERS);
    expect(actions[0].filters.age).toBe(32);
    expect(actions[0].filters.name).toBe("Romelu Lukaku");
    expect(actions[0].filters.position).toBe("Centre-Forward");

})