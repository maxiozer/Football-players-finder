import React from "react";
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlayersTable from "../../components/PlayersTable";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"
import * as actionTypes from "../../actionTypes";
import thunk from "redux-thunk"

configure({ adapter: new Adapter() });

const mockStore = configureStore();

const store = mockStore({
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
            "age": 32
        }],
        filters: {}
    }
});

it("render elements from state", () => {
    const wrapper = mount(
        <Provider store={store}>
            <PlayersTable />
        </Provider>
    );
    expect(wrapper.find("#players-table").contains("Romelu Lukaku")).toEqual(true);
    expect(wrapper.find("#players-table").contains("David de Gea")).toEqual(true);
});
