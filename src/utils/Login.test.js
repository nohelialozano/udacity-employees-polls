import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

    it('will display an error if the user and password do not match the records', async() => {
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
      fireEvent.change(component.getByTestId("user-input"), { target: { value: 'tylermcginnis' } });
      fireEvent.change(component.getByTestId("password-input"), { target: { value: 'abc' } });
      var submitButton = component.getByTestId("submit-button");
      fireEvent.click(submitButton);

      await act(async () => {
        expect(component.getByTestId('error-message')).toBeInTheDocument();
      });
    });

    it('will verify that username, password and submit button are on the page', async() => {
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
        expect(component.getByTestId('user-input')).toBeInTheDocument();
        expect(component.getByTestId('password-input')).toBeInTheDocument();
        expect(component.getByTestId('submit-button')).toBeInTheDocument();
      });
    });
});