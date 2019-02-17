import React from "react";
import { render,configure } from "enzyme";
import { Provider } from "react-redux";
import store from "./store";
import { FootBallPlayersFinder } from './modules/football-players-finder/pages';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('render without crashing', () => {
    render(
        <Provider store={store}>
            <FootBallPlayersFinder />
        </Provider>
    );
})

