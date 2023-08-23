import * as React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { act } from 'react-dom/test-utils';
import Login from "../components/Login";

import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers"; // index.js where I combine the reducers
import middleware from "../middleware"; // index.js inside the middleware folder

describe('Login', () => {
    it('will match snapshot', async () => {
      let component;
      const store = createStore(reducer, middleware);
  
      act(() => {
        component = render(
          <Provider store={store}>
          <Router>
            <Login />
          </Router>
          </Provider>
        );
      });
  
      await act(async () => {
        expect(component).toMatchSnapshot();
      });
    });
});