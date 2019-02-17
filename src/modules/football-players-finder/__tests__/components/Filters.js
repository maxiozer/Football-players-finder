import React from "react";
import { configure, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filters from "../../components/Filters";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"
import * as actionTypes from "../../actionTypes";
import thunk from "redux-thunk"

configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);

const store = mockStore({
    players: {
        positions: [
            'Left Wing',
            'Left-Back',
            'Right-Back'
        ],
        filters: {
            name: "",
            age: "",
            position: ""
        }
    }
});

it("render name filter", () => {
    const wrapper = render(
        <Provider store={store}>
            <Filters />
        </Provider>
    );
    expect(wrapper.find('#name').length).toBe(1);
});

it("render age filter", () => {
    const wrapper = render(
        <Provider store={store}>
            <Filters />
        </Provider>
    );
    expect(wrapper.find('#age').length).toBe(1);
});

it("render position filter", () => {
    const wrapper = render(
        <Provider store={store}>
            <Filters />
        </Provider>
    );
    expect(wrapper.find('#position-select').length).toBe(1);
});

it("filter", () => {
    const wrapper = mount(
        <Provider store={store}>
            <Filters />
        </Provider>
    );
    wrapper.find("#filter-form form").simulate("submit");
    const actions = store.getActions();
    expect(actions[0].type).toBe(actionTypes.SET_FILTERS);
});
