import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { act } from 'react-dom/test-utils';
import AddQuestion from "../components/AddQuestion";

import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers"; // index.js where I combine the reducers
import middleware from "../middleware"; // index.js inside the middleware folder

describe('AddQuestion', () => {

    it('will verify if First Option and Second Option are on the page', async() => {
      let component;
      const store = createStore(reducer, middleware);
  
      act(() => {
        component = render(
          <Provider store={store}>
          <Router>
            <AddQuestion />
          </Router>
          </Provider>
        );
      });

      await waitFor(() => {
        expect(screen.getByText("First Option")).toBeInTheDocument();
        expect(screen.getByText("Second Option")).toBeInTheDocument();
      });
    });
});