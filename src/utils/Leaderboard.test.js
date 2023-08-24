import * as React from 'react';
import Leaderboard from "../components/Leaderboard";
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { legacy_createStore as createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import reducer from "../reducers"; // index.js where I combine the reducers
import middleware from "../middleware"; // index.js inside the middleware folder
import { handleInitialData } from "../actions/shared";

describe('Leaderboard', () => {
    it('will find an element with the text Sarah Edo', async() => {
        let component;
        const store = createStore(reducer, middleware);
        store.dispatch(handleInitialData());
    
        act(() => {
            component = render(
            <Provider store={store}>
                <Router>
                    <Leaderboard />
                </Router>
            </Provider>
            );
        });

        await waitFor(() => {
            expect(screen.getByText("Sarah Edo")).toBeInTheDocument();
        });
    });
});